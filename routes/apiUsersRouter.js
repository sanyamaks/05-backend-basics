const apiUsersRouter = require("express").Router();
const users = require("../data/users.json");

apiUsersRouter.get("/users", (req, res) => {
  res.send(users);
});

apiUsersRouter.get("/users/:id", (req, res) => {
  const user = users.filter(user => user._id === req.params.id);
  if (user.length === 0) {
    res.send({ message: "Нет пользователя с таким id" });
    return;
  }

  res.send(user);
});

module.exports = apiUsersRouter;
