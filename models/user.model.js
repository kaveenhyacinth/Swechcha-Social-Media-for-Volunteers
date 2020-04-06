const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //user name
    name : {
        fname : {
            type: String, 
            required: true,
            trim: true
        },
        mname : {
            type: String,
            trim: true
        },
        lname : {
            type: String, 
            required: true,
            trim: true
        }
    },

    NIC : {
        type: String, 
        required: true,
        trim: true,
        unique :true
    },

    DOB : {
        type: Date, 
        required: true,
    },

    address : {
        line1 : {
            type: String,
            required: true
        },
        city : {
            type: String,
            required: true
        },
        district : {
            type: String, 
            required: true
        },
        country : {
            type: String, 
            required: true
        },
        postalCode: {
            type: Number, 
            required: true
        }
    },

    contactNo : {
        type: String, 
        required: true,
        trim: true
    },

    email : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    profession : {
        type: String, 
        required: true
    },

    password : {
        type: String, 
        required: true,
        minlength: 6
    },

    DateJoined : {
        type: Date,
        'default' : Date.now
    },
    
    // ProfileImage : {
    //     data:Buffer,
    //     contentType: String
    // },

    // CoverImage : {
    //     data:Buffer,
    //     contentType: String
    // },

    // EventJoined :[{
    //         EventID : {
    //             type: Schema.Types.ObjectID,
    //             ref : "Event",
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
    timestamps: true
}
);

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;