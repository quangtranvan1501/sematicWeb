const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

// Đường dẫn đến endpoint SPARQL của Fuseki
const sparqlEndpoint = 'http://localhost:3030/#/dataset/demo/query';

// Middleware để phân tích dữ liệu từ body của request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route trang chủ
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route để xử lý yêu cầu SPARQL
app.post('/query', (req, res) => {
  const query = req.body.query;

  // Tạo yêu cầu SPARQL đến Fuseki
  request.post(
    sparqlEndpoint,
    {
      json: {
        query: query,
      },
    },
    (error, response, body) => {
      console.log('Fuseki Response:', body);
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        // Trả về kết quả từ Fuseki cho trình duyệt
        res.send(body);
      }
    }
  );
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
