// External Modules
const express = require('express');
const contactRoutes = express.Router();

// Local Modules
const {
    getAllContact,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require('../controllers/contactController');


//  Way -- 1
// contactRoutes.route('/').get(getAllContact);

// contactRoutes.route("/").post(createContact);

// contactRoutes.route("/:id").get(getContact);

// contactRoutes.route("/:id").put(updateContact);

// contactRoutes.route("/:id").delete(deleteContact);

//  Way -- 2
contactRoutes.route('/').get(getAllContact).post(createContact);
contactRoutes.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


// Note: Both way we can do

module.exports = contactRoutes;