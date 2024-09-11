const { User } = require("../models");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
  try {
    const { name, email, password } = userData;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashPassword,
      role: "user",
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, updateData) => {
  try {
    return await User.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      updateData,
      {
        new: true,
      }
    );
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
