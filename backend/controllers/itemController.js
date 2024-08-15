const db = require("../config/db");

// Create a new item
exports.createItem = (req, res) => {
    const { name, description } = req.body;
    const sql = 'INSERT INTO items (name, description) VALUES (?, ?)';
    db.query(sql, [name, description], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Item created successfully' });
    });
};

// Get all items
exports.getItems = (req, res) => {
    const sql = 'SELECT * FROM items';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Update an item
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const sql = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
    connection.query(sql, [name, description, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Item updated successfully' });
    });
};

// Delete an item
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM items WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Item deleted successfully' });
    });
};
