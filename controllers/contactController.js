// @desc Get All Contact
// @route GET /api/contact
// @access public
const getAllContact = (req,resp) => {
    resp.status(200).json({message: "Get All Contact"});
};

// @desc Get Contact
// @route GET /api/contact/:id
// @access public
const getContact = (req,resp) => {
    resp.status(200).json({message: `Get contact for ${req.params.id}`});
};

// @desc Create Contact
// @route POST /api/contact
// @access public
const createContact = (req,resp) => {
    try{
        console.log("The request body is: ", req.body);
        if(!Object.keys(req.body).length){
            resp.status(400);
            throw new Error("All fields are mandatory.");
        };
        resp.status(201).json({message: `Create contact for ${req.params.id}`});
    }catch(error){
        console.log(error.message);
        return error
    }
};

// @desc Update contact
// @route PUT /api/contact/:id
// @access public
const updateContact = (req,resp) => {
    resp.status(200).json({message: `Update contact for ${req.params.id}`});
};

// @desc Delete Contact
// @route Delete /api/contact/:id
// @access public
const deleteContact = (req,resp) => {
    resp.status(200).json({message: `Delete contact for ${req.params.id}`});
};

module.exports = {
    getAllContact,
    getContact,
    createContact,
    updateContact,
    deleteContact
};