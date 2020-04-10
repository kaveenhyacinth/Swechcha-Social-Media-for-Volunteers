const mongoose = require("mongoose");

// create mongoose schema
const Schema = mongoose.Schema;

// define admin schema
const AdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
    },
  },
  {
    timestamps: true,
  }
);

// Deploy admin schema
const Admin = mongoose.model("Admin", AdminSchema, "admins");

module.exports = Admin;
