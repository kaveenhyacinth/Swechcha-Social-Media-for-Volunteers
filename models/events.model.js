 /*jshint esversion: 6 */
  /*jshint esversion: 8 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    eventname : {
      
            type: String, 
            required: true,
            trim: true
        
    },

     eventCreatedDate : {
        type: Date, 
          'default' : Date.now,
         required: true,
     },

     eventClosedDate : {
         type: Date, 
         required: true,
     },
     eventDate : {
         type: Date, 
         required: true,
     },

    eventlocation : {
        address : {
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
         }
     },

    images:[{
        data:Buffer,
        type:String
    
    }],

    desc : {
        type: String,
        required: true,
        trim: true
    },

   

     type : {
         type: Date,
         'default' : Date.now
     },
    
   

     volunteers :[{
             volunteerID : {
                 type: Schema.Types.ObjectID,
                 ref : "volunteers",
                 required : true    
             }
        
    
}]},
{
    timestamps: true
}
);


const events = mongoose.model('events', EventsSchema);

module.exports = events;