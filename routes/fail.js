import express from 'express';
import fs from 'fs';
const router = express.Router();

// This will crash app completley
router.get('/crash', (req, res) => {
    fs.readFile('somefile.txt', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
});
    
// This will just throw normal error
router.get('/throw', () => {
    throw new Error('Ahhhh!!!!!');
});

export default router;