/*jshint esversion: 6 */
/*jshint esversion: 8 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventsSchema = new Schema(
  {
    eventname: {
      type: String,
      required: true,
      trim: true,
    },

    eventCreatedDate: {
      type: Date,
      default: Date.now,
    },

    eventDate: {
      type: Date,
      required: true,
    },

    eventlocation: {
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
      landmark: {
        type: String,
      },
    },

    thumbnail: {
      data: Buffer,
      type: String,
    },

    images: [
      {
        data: Buffer,
        type: String,
      },
    ],

    desc: {
      type: String,
      required: true,
      trim: true,
    },

    host: {
      type: Schema.Types.ObjectId,
      ref: "Host",
      required: true,
    },

    isHeld: {
      type: Boolean,
      default: false,
    },

    isCancelled: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      trim: true,
    },

    volunteers: [
      {
        type: Schema.Types.ObjectID,
        ref: "Volunteer",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventsSchema, "events");

module.exports = Event;
