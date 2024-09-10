const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
