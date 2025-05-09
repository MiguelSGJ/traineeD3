import User from "../model/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User created", user });
    console.log("debug!");
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating user", details: error.message });
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error fetching users", details: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error fetching user", details: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true, runValidators: true, context: "query" }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated", user });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating user", details: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting user", details: error.message });
  }
};
