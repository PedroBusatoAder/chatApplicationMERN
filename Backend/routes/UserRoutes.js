import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
    res.send('This will be the screen for registering users!')
})

export default router;