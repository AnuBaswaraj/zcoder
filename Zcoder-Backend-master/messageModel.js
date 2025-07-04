const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: {
    text: { type: String, required: true }
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
