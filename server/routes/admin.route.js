const express = require("express");
const { adminController } = require("../controllers");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware");

router.post("/", adminController.createAdmin);
router.get("/", authMiddleware.authenticateToken, adminController.findUsers);
router.put(
  "/:id",
  authMiddleware.authenticateToken,
  adminController.updateUser
);
router.delete(
  "/:id",
  authMiddleware.authenticateToken,
  adminController.deleteUser
);

module.exports = router;
