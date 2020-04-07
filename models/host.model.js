  /*jshint esversion: 6 */
/*jshint esversion: 8 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HostSchema = new Schema({
  hostname: {
    
          type: String, 
          required: true,
          trim: true
      
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20
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
  eventshosted:[{
    EventID : {
                    type: Schema.Types.ObjectID,
                     ref : "Event",
                     required : true    
                 }
  

  }]
  
},
{
  timestamps: true
}
);


const events = mongoose.model('events', HostSchema);

module.exports = host;
