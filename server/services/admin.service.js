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
  return await User.find();
};

const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    updateData,
    {
      new: true,
    }
  );
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createAdmin,
  getUsers,
  updateUser,
  deleteUser,
};
