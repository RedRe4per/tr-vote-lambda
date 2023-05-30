'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = require('express');
const dynamodb_1 = require('../../utils/dynamodb');
const aws_sdk_1 = __importDefault(require('aws-sdk'));
const dynamodb = new aws_sdk_1.default.DynamoDB.DocumentClient();
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
  try {
    res.status(200).json("let's find something. Test in AWS Lambda now!");
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await (0, dynamodb_1.getItem)('books', { id });
    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Could not fetch book' });
  }
});
router.post('/', async (req, res) => {
  const book = req.body;
  try {
    await (0, dynamodb_1.putItem)('books', book);
    res.status(201).json({ message: 'Book created' });
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Could not create book' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});
exports.default = router;
