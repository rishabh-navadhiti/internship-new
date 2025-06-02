const bcrypt = require('bcryptjs');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function comparePassword(input, hash) {
  return await bcrypt.compare(input, hash);
}

module.exports = { hashPassword, comparePassword };