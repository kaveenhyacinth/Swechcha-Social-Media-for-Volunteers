const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
        username: {
                type: String,
                required: true
        },

        email: {
                type: String,
                required: true,
                trim: true,
                unique: true
        },

        password: {
                type: String,
                required: true,
                minlength: 6,
                maxlength: 20
        }
},
{
        timestamps: true,
});

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;