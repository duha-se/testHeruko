module.exports = (app) => {
    const contacts = require('./contact.controller.js');

    // Create a new contact
    app.post('/contacts', contacts.create);

    // Retrieve all contacts
    app.get('/contacts', contacts.findAll);

    // Retrieve a single contact with contactId
    app.get('/contacts/:contactId', contacts.findOne);

    // Update a contact with contactId
    app.put('/contacts/:contactId', contacts.update);

    // Delete a contact with contactId
    app.delete('/contacts/:contactId', contacts.delete);

    // app.use('/api/contacts', router);
}