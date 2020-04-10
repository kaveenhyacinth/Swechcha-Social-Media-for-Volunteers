/*jshint esversion: 6 */
/*jshint esversion: 8 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HostSchema = new Schema(
  {
    hostname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    NIC: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    DOB: {
      type: Date,
      required: true,
    },

    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      postal: {
        type: Number,
        required: true,
      },
    },

    contactNo: {
      type: String,
      required: true,
      trim: true,
    },

    profileImage: {
      data: Buffer,
      contentType: String,
    },

    coverImage: {
      data: Buffer,
      contentType: String,
    },

    eventsHosted: [
      {
        type: Schema.Types.ObjectID,
        ref: "Event",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Host = mongoose.model("Host", HostSchema, "hosts");

module.exports = Host;
