// require mongoose
const mongoose = require("mongoose");
// create shorthand for the Schema constructor
const { Schema } = mongoose;

// schema written here
const treatSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "http://placehold.it/500x500.png" },
});

const Treat = mongoose.model("Treat", treatSchema);
module.exports = Treat;
