const axios = require('axios');
const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

// Đường dẫn đến endpoint SPARQL của Fuseki
const sparqlEndpoint = 'http://localhost:3030/demo';

// Middleware để phân tích dữ liệu từ body của request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serving static files
app.use(express.static(__dirname));

// Route trang chủ
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

// Route để xử lý yêu cầu SPARQL
app.post('/query', async (req, res) => {
  const query = req.body.query;

  // Tạo yêu cầu SPARQL đến Fuseki
  let a = await queryDemo(query)
  res.send(a.data)
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

async function queryDemo(query) {

  const url = 'http://localhost:3030/demo/query';
  const headers = {
  };

  const data = 'query='+query;

  return await axios.post(url, data, { headers })

}
