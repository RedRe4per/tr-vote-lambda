"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../../models/user");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        res.status(200).json('table');
    }
    catch (error) {
        console.error('An error ocurred:', error);
        res.status(500).json(error);
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json('book');
    }
    catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ error: 'Could not fetch book' });
    }
});
router.post('/', async (req, res) => {
    // const book = {
    //   id: uuidv4(),
    //   ...req.body,
    // };
    try {
        const user = new user_1.UserModel({
            id: '1',
            name: 'Derek',
            email: 'zhangsan@example.com',
        });
        user.save();
        res.status(201).json({ message: 'user created' });
    }
    catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ error: 'Could not create book' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        res.status(200).json({});
    }
    catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json(error);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json({});
    }
    catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json(error);
    }
});
exports.default = router;
