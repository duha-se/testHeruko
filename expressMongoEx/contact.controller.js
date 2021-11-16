const Contact = require('./contact.model');

// Create and Save a new contact
exports.create = (req, res) => {
    // Validate request
    if(!req.body.phone && !req.body.firstName) { //check if the request is empty -nothing 2 add ...
        return res.status(400).send({
            message: "contact phone and firstName can not be empty"
        });
    }

    // Create a contact
    const contact = new Contact({
        firstName: req.body.firstName , 
        lastName: req.body.lastName, 
        phone: req.body.phone,
        email: req.body.email         
    });
// console.log(req.params.contactId);
    // Save contact in the database
    contact.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the contact."
        });
    });
};

// Retrieve and return all contacts from the database.
exports.findAll = (req, res) => {
    Contact.find()
    .then(contacts => {
        res.send(contacts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving contacts."
        });
    });
  
    // console.log(db.id);
};

// Find a single contact with a contactId
exports.findOne = (req, res) => {
        Contact.findById(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.contactId
            });            
        }
        res.send(contact);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.contactId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving contact with id " + req.params.contactId
        });
    });
};

// Update a contact identified by the contactId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.phone && !req.body.firstName) {
        return res.status(400).send({
            message: "Contact first name and phone can not be empty"
        });
    }
    // const contactId = req.params.id;
    // Find contact and update it with the request body
    Contact.findByIdAndUpdate( req.params.contactId, {
        firstName: req.body.firstName , 
        lastName: req.body.lastName, 
        phone: req.body.phone,
        email: req.body.email 
    }, {new: true})
    .then(data  => {
        if(!data ) {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.contactId
            });
        }
        res.send(contact);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Contact not found with id " +req.params.contactId
            });                
        }
        return res.status(500).send({
            message: "Error updating contact with id " + req.params.contactId
        });
    });
};

// Delete a contact with the specified contactId in the request
exports.delete = (req, res) => {
    // const contactId = req.params.id;
    Contact.findByIdAndRemove(req.params.contactId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.contactId
            });
        }
        res.send({message: "Contact deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.contactId
            });                
        }
        return res.status(500).send({
            message: "Could not delete contact with id " + req.params.contactId
        });
    });
};