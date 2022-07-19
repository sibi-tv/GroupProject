import express, { Router } from 'express';

const ROUTER = express.Router();

ROUTER.get('/', (req, res) => {
    res.send('This works!');
});

export default ROUTER;
