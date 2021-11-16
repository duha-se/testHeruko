const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName : String ,
    lastName: String,
    phone : Number ,
    email: String,
    contactId : String
}, {
    timestamps: true
});
module.exports = mongoose.model('contact', ContactSchema);