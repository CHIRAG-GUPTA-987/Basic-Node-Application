const Message = require("../Models/apps");
const postMessage = async (req, res) => {
  const { text } = req.body;
  const msg = await new Message({ text });
  await msg.save();
  return res.status(200).json(msg);
};

const getMessages = async (req, res) => {
  const msgs = await Message.find({});
  return res.status(200).json(msgs);
};

const deleteMessage = async (req, res) => {
  const { id } = req.body;
  const msg = await Message.findByIdAndDelete(id);
  return res.status(200).json(msg);
};

const updateMessage = async (req, res) => {
  const { id, text } = req.body;
  const msg = await Message.findByIdAndUpdate(id, { text });
  return res.status(200).json(msg);
};

module.exports = { postMessage, getMessages, deleteMessage, updateMessage };
