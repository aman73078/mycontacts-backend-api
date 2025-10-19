const asyncHandler = require("express-async-handler");
const { pool } = require("../config/db");

// @desc Get All Contact
// @route GET /api/contact
// @access public
const getAllContact = asyncHandler(async (req, resp) => {
    const [rows] = await pool.query("SELECT * FROM contacts");
    resp
        .status(200)
        .json({ message: "Get All Contact", count: rows.length, rows: rows });
});

// @desc Get Contact
// @route GET /api/contact/:id
// @access public
const getContact = asyncHandler(async (req, resp) => {
    const row = await pool.query(`SELECT * FROM contacts WHERE id=${Number(req.body.id)}`);
    resp.status(200).json({ message: `Get contact for ${req.params.id}`, data: row, status: true });
});

// @desc Create Contact
// @route POST /api/contact
// @access public
const createContact = asyncHandler(async (req, resp) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone, message } = req.body;
    if (!Object.keys(req.body).length) {
        resp.status(400);
        throw new Error("All fields are mandatory.");
    }
    const [result] = await pool.query(`INSERT INTO contacts (name, email, phone, message) VALUES (?,?,?,?)`, [name, email, phone || null, message || null]);
    resp.status(201).json({ message: 'Created successfully.', status: true, data: result });
});

// @desc Update contact
// @route PUT /api/contact/:id
// @access public
const updateContact = asyncHandler(async (req, resp) => {
    const {id, name, email, phone, message} = req.body;
    const [existing] = await pool.query(`SELECT * FROM contacts WHERE id=?`, [id]);
    if(existing.length === 0){
        resp.status(404);
        throw new Error('Contact not found.');
    }
    const [result] = await pool.query(`UPDATE contacts SET name=?, email=?, phone=?, message=? WHERE id=?`,
        [name || existing[0].name, email || existing[0].email, phone || existing[0].phone, message || existing[0].message, id]);
    resp.status(200).json({ message: 'Contact updated successfully.', status:true, data: result });
});

// @desc Delete Contact
// @route Delete /api/contact/:id
// @access public
const deleteContact = asyncHandler(async (req, resp) => {
    resp.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
    getAllContact,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};
