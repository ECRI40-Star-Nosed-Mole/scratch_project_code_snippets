const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  tags: {
    type: Object,
    default: {},
  },
  languages: {
    type: Object,
    default: {},
  },

  lastId: { type: Number, default: 0 },

  snippets: {
    type: [
      {
        id: { type: Number, required: true },
        type: Object,
        title: { type: String, required: true },
        comments: { type: String },
        storedCode: { type: String },

        tags: [String],
        language: { type: String },
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model('User', userSchema);
