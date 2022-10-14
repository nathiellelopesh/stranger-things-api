const User = require("../models/user");

module.exports = {
  async store(req, res) {
    const { name, email, level, character } = req.body;

    const user = await User.create({ name, email, level, character });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async put(req, res) {
    const { name, email, level, character } = req.body;

    await User.update(
      { name, email, level, character },
      { where: { id: req.params.id } }
    );

    return res.send("User updated with sucess");
  },

  async delete(req, res) {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send("Sucess! User exclude.");
  },
};
