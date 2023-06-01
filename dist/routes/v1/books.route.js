"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const user_1 = require("../../models/user");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        const users = await user_1.UserModel.scan().limit(50).exec();
        res.status(200).json(users);
    }
    catch (error) {
        console.error('An error ocurred:', error);
        res.status(500).json(error);
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await user_1.UserModel.get(id);
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Could not fetch user' });
    }
});
router.post('/', async (req, res) => {
    try {
        const user = new user_1.UserModel({
            id: (0, uuid_1.v4)(),
            ...req.body,
        });
        user.save();
        res.status(201).json({ message: 'new item created', item: user });
    }
    catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ error: 'Could not create book' });
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        await user_1.UserModel.update({ id, name, email });
        res.status(200).json({ message: 'User updated' });
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Could not update user' });
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await user_1.UserModel.update({ id }, { isDeleted: true });
        res.status(200).json({ message: 'User deleted' });
    }
    catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'Could not delete user' });
    }
});
exports.default = router;
