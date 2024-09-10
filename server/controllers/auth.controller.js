const { authService } = require("../services");

const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const refreshToken = async (req, res) => {
  try {
    const token = await authService.refreshToken(req.body);
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { login, refreshToken };
