## Project Overview
A full‑stack MERN application that uses AI to automatically generate comprehensive online courses on any topic and provides realistic AI‑powered interview practice. Upload your resume, get personalized interview questions, practice with speech‑to‑text, and receive instant AI‑driven feedback — all in one platform.

<br>

<h2 id="technologies">💻 Technologies</h2>

<b><em>Frontend:</em></b>

- **React.js** — For building a fast, dynamic, and responsive user interface.
- **Tailwind CSS** — For modern, responsive, and consistent styling.
- **PDF.js** — For PDF parsing and rendering (convert resume to image).
- **Fetch API** — For making API requests to external services.  
 
<b><em>Backend & Services:</em></b>

- **Node.js & Express.js** — For building the RESTful API backend.
- **MongoDB & Mongoose** — For persistent storage of user data, courses, and interview sessions.
- **Google Generative AI (gemini‑2.5‑flash)** — Powers both AI‑driven course generation and intelligent interview question generation & feedback.
- **YouTube Data API v3** — For searching and embedding relevant tutorial videos for each chapter.
- **JWT & bcryptjs** — For secure user authentication and password hashing.


<h2 id="key features">✨ Key Features</h2>

### 📚 AI‑Powered Course Generation
- **AI‑Driven Course Structuring** – Uses Google Gemini AI to generate a logical course structure including chapter titles, summaries, and estimated durations based on user inputs (topic, difficulty, length).
- **AI‑Generated Chapter Content** – Creates detailed content for each chapter: in‑depth summaries, key learning points, and relevant code examples where applicable.
- **Integrated YouTube Video Resources** – Automatically searches and embeds relevant YouTube tutorial videos for each chapter using the YouTube Data API v3, providing diverse learning materials.
- **Multi‑Resource Learning** – Each chapter can contain multiple resources (video, AI‑generated text, code examples) to offer comprehensive coverage.
- **Course Customization** – Define course topic, provide details/objectives, select difficulty (Beginner, Intermediate, Advanced), set course duration, and specify the number of chapters.
- **Review & Edit Structure** – Review and edit the AI‑generated course structure (chapter titles, summaries, durations) before generating the final detailed content.
- **Course Dashboard** – Displays all created courses in an easy‑to‑browse card format.
- **Interactive Course Viewing** – Allows users to navigate through chapters and the multiple resources within each chapter sequentially.

### 🎙️ AI Interview Practice
- **Resume Parsing & Analysis** – Upload your resume (PDF) which is converted to an image and analyzed by AI to extract key skills, experiences, and potential interview focus areas.
- **AI‑Powered Question Generation** – Dynamically generates exactly 5 personalized interview questions (with types and categories) based on your resume analysis using Google Gemini AI.
- **Speech‑to‑Text Response** – Answer questions using your voice with real‑time speech‑to‑text transcription.
- **Real‑Time AI Evaluation** – After completing all questions, receives structured feedback including: overall score (out of 100), detailed feedback for each answer, communication style analysis, improvement tips, and areas of strength.
- **Interactive UI** – Clean, user‑friendly interface designed for seamless interview practice, with visual recording indicators and question navigation.

### 🔐 User Authentication & Security
- **JWT Authentication** – Secure user sign‑up and login functionality using JSON Web Tokens (JWT) for session management. Passwords are securely hashed using bcryptjs.
- **Protected API Routes** – All sensitive operations (course creation, interview practice) require a valid JWT token.
- **Environment Variables** – All API keys (Gemini, YouTube Data API, database) are stored securely in backend `.env` files and never exposed to the client.

<br>

### **SignUp/Register Page**  :
<img width="1839" height="859" alt="Screenshot (29)" src="https://github.com/user-attachments/assets/4ddb552a-8e73-4d00-80ec-aef396cbcc2c" />

### **SignIn Page**  :
<img width="1846" height="859" alt="Screenshot (30)" src="https://github.com/user-attachments/assets/d0e258ac-f0d9-4c5f-a466-6642748a9736" />

### **Create Course**  :
<img width="1886" height="867" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/750c8140-ec0e-482b-a411-9291706d6f29" />

### **AI Generation**  :
<img width="1890" height="866" alt="Screenshot (34)" src="https://github.com/user-attachments/assets/f310b4ff-05c1-4ae1-abdf-b07b0af0d1c7" />

### **Interview Practice**  :
<img width="1898" height="855" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/9574eb28-7449-4c1b-afb9-cae5f36ba91c" />

### **AI Interview**  :
<img width="1904" height="859" alt="Screenshot (33)" src="https://github.com/user-attachments/assets/05fe9715-bf00-445f-aa6b-77afb1b1602f" />

<br>

<h2 id="pre">🗁 Prerequisites</h2>

Before running the project, make sure you have:  

✅Node.js & npm installed on your system  

✅MongoDB installed locally or use MongoDB Atlas  

✅API keys:  

  **Google Generative AI (Gemini)** – [Google AI Studio](https://aistudio.google.com/)
  **YouTube Data API v3** – [Google Cloud Console](https://console.cloud.google.com/)

### **Frontend Setup**
- **Open a new terminal and navigate to frontend folder**
  `cd client`

- **Install dependencies**
  `npm install`

- **Create a .env.local file in the client directory with** :
  ```env
  VITE_API_BASE_URL=http://localhost:5000
  ```
- **Start the development server**
  `npm run dev`

### **Backend Setup**
- **Navigate to backend folder**
  `cd server`

- **Install dependencies**
  `npm install`

- **Create a .env file in the server directory with the following variables** :
  ```env
  PORT=5000
  MONGO_URI=mongodb://localhost:27017/
  JWT_SECRET=your_secret_key_here
  GEMINI_API_KEY=your_gemini_api_key
  YOUTUBE_API_KEY=your_youtube_api_key
  ```
- **Start the backend server** 
  `npm start`








