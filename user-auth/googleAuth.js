const { GoogleAuth } = require('google-auth-library');

const getAccessToken = async () => {
  const auth = new GoogleAuth({
    keyFile: '/home/rish/Development/Webdev/internship-new/user-auth/user-cred-a841c-firebase-adminsdk-fbsvc-ff9fb5edd2.json',
    scopes: ['https://www.googleapis.com/auth/datastore'],
  });

  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  return tokenResponse.token;

};

module.exports = getAccessToken;