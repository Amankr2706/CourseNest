const express = require('express');
const router = express.Router();
const { analyzeResume, generateQuestions, analyzeInterview } = require('../controllers/interviewController');
const protect = require('../middleware/auth');

router.post('/analyze-resume', protect, analyzeResume);
router.post('/generate-questions', protect, generateQuestions);
router.post('/analyze-interview', protect, analyzeInterview);

module.exports = router;