const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Define routes for CRUD operations

// Create a new item
router.post('/', itemController.createItem);

// Get all items
router.get('/', itemController.getItems);

// Update an item by ID
router.put('/:id', itemController.updateItem);

// Delete an item by ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;
