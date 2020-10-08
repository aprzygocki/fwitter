const { findAllUsers } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const insertUserToDb = async (userInput) => {
  try {
    return await connection.query(fetchUsers, userInput);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  fetchUsers,
  insertUserToDb,
};
