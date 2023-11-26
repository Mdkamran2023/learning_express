const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mongoose_advanced2");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
  },
  datecreated: {
    type: Date,
    default: () => new Date(),
  },
}, {
  timestamps: { createdAt: 'datecreated', updatedAt: 'dateupdated' }
});

module.exports = mongoose.model("user", userSchema);

