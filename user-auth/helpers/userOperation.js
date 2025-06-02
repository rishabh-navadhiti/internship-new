const request = require('../config/firebase');

async function createUser(user) {
  return request('POST', '', {
    fields: {
      fName: { stringValue: user.fName },
      lName: { stringValue: user.lName },
      email: { stringValue: user.email },
      password: { stringValue: user.password },
      isActive: { booleanValue: true }
    }
  });
}

async function updateUser(id, data) {
  const user = await request('GET', `/${id}`, null); 
  const fieldsToUpdate = structuredClone(user.data.fields);
  // const fieldsToUpdate = {};

  if ('fName' in data) fieldsToUpdate.fName = { stringValue: data.fName };
  if ('lName' in data) fieldsToUpdate.lName = { stringValue: data.lName };
  if ('email' in data) fieldsToUpdate.email = { stringValue: data.email };
  if ('isActive' in data) fieldsToUpdate.isActive = { booleanValue: data.isActive };

  return request('PATCH', `/${id}?updateMask.fieldPaths=fName&updateMask.fieldPaths=lName&updateMask.fieldPaths=email&updateMask.fieldPaths=isActive`, {
    fields: fieldsToUpdate
  });
}

async function getAllUsers() {
  return request('GET', '', null);
}

async function deleteUser(id) {
  return request('DELETE', `/${id}`, null);
}

module.exports = { createUser, getAllUsers, updateUser, deleteUser };