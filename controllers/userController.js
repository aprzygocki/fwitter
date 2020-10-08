const { fetchUsers, insertUserToDb } = require('../model/userOrm');

module.exports = {
  getAllUsers: async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  addUser: async (req, res) => {
    const userInput = req.body;
    try {
      const result = await insertUserToDb(userInput);
      res.json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
