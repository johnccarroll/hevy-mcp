const axios = require('axios');
const http = require('http');
const https = require('https');

axios.defaults.httpAgent = new http.Agent({ keepAlive: false });
axios.defaults.httpsAgent = new https.Agent({ keepAlive: false }); 