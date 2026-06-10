const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 1. Analyze resume (image)
const analyzeResume = async (req, res) => {
  try {
    const { imageBase64, prompt } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const imagePart = { inlineData: { data: imageBase64, mimeType: 'image/png' } };
    const result = await model.generateContent([prompt, imagePart]);
    res.json({ analysis: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Resume analysis failed' });
  }
};

// 2. Generate interview questions
const generateQuestions = async (req, res) => {
  try {
    const { prompt } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    res.json({ questions: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Question generation failed' });
  }
};

// 3. Analyze interview answers
const analyzeInterview = async (req, res) => {
  try {
    const { prompt } = req.body; 
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    res.json({ analysis: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Interview analysis failed' });
  }
};

module.exports = { analyzeResume, generateQuestions, analyzeInterview };