import { v4 as uuidv4 } from 'uuid';

var users = [];

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`A user with name ${user.name}  has been added to database`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with id ${id}  has been deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const user = users.find((user) => user.id === id);
  if (name) user.name = name;

  if (email) user.email = email;

  if (phone) user.phone = phone;
  res.send(`user with id ${id}  has been updated successfully`);
};
