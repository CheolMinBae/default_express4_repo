import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('in lottery router');
});

export default router;