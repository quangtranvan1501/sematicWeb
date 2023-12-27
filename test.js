const axios = require('axios');

const url = 'http://localhost:3030/demo/query';
const headers = {
};

const data = 'query=PREFIX%20ex%3A%20%3Chttp%3A%2F%2Fexample.org%2F%3E%0APREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20fam%3A%20%3Chttp%3A%2F%2Fwww.ifi.uio.no%2FINF3580%2Ffamily%23%3E%0A%0ASELECT%20%3Fb%20%3Fa%0AWHERE%20%7B%0A%20%20%3Fb%20ex%3AhasAuthor%20%3Fx%20.%0A%20%20%3Fx%20ex%3Aname%20%3Fa%0A%7D%0A%0A%0A';

axios.post(url, data, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
