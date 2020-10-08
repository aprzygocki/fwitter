const findAllUsers = 'SELECT * FROM users;';
const insertUser = 'INSERT INTO users SET username =?;';

module.exports = {
  findAllUsers,
  insertUser,
};
