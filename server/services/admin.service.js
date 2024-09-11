const { User } = require("../models");
const bcrypt = require("bcrypt");

const createAdmin = async (userData) => {
  try {
    const { name, email, password } = userData;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashPassword,
      role: "admin",
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    return await User.find();
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
  createAdmin,
  getUsers,
  updateUser,
  deleteUser,
};
