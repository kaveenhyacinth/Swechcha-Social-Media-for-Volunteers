const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VolunteerSchema = new Schema(
  {
    name: {
      fname: {
        type: String,
        required: true,
        trim: true,
      },
      mname: {
        type: String,
        trim: true,
      },
      lname: {
        type: String,
        required: true,
        trim: true,
      },
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
      line1: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      district: {
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

    profession: {
      type: String,
      required: true,
    },

    profileImage: {
      data: Buffer,
      contentType: String,
    },

    coverImage: {
      data: Buffer,
      contentType: String,
    },

    // EventJoined :[{
    //         EventID : {
    //             type: Schema.Types.ObjectID,
    //             ref : "events",
    //             required : true
    //         },
    //         EventJoinedDate : {
    //             type: Date,
    //             'default' : Date.now
    //         }
    //     }
    //     ]
  },
  {
    timestamps: true,
  }
);

const Volunteer = mongoose.model("Volunteer", VolunteerSchema, "volunteers");

module.exports = Volunteer;
