const axios = require('axios');
const getAccessToken = require('./getAccessToken');
const DB_BASEURL = process.env.FIREBASE_URL;

async function requestWithToken(method, url, data) {
  const token = getAccessToken();
  return axios({
    method,
    url: `${DB_BASEURL}${url}`,
    headers: { Authorization: `Bearer ${token}` },
    data
  });
}