const express = require("express");
const messageController = require("../Controllers/apps");
const router = express.Router();

router
  .route("/message")
  .get(messageController.getMessages)
  .post(messageController.postMessage)
  .put(messageController.updateMessage)
  .delete(messageController.deleteMessage);

module.exports = router;
