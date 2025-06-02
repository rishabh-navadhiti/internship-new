const request = require('../config/firebase');

async function createUser(id, user) {
  return request('POST', '', {
    fields: {
      fname: { stringValue: user.firstName },
      lname: { stringValue: user.lastName },
      email: { stringValue: user.email },
      password: { stringValue: user.password },
      isActive: { booleanValue: true }
    }
  });
}

async function updateUser(id, data) {
  return request('PATCH', `/${id}`, {
    fields: Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, typeof v === 'string' ? { stringValue: v } : { booleanValue: v }])
    )
  });
}

async function getAllUsers() {
  return request('GET', '', null);
}

async function deleteUser(id) {
  return request('DELETE', `/${id}`, null);
}

module.exports = { createUser, getAllUsers, updateUser, deleteUser };