const { GoogleAuth } = require('google-auth-library');

const getAccessToken = async () => {
  const auth = new GoogleAuth({
    keyFile: './your-service-account-key.json',
    scopes: ['https://www.googleapis.com/auth/datastore'],
  });

  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  return tokenResponse.token;

};

module.exports = getAccessToken;