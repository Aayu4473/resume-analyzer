# 📄 AI Resume Analyzer

An AI-powered web application that analyzes uploaded resumes (PDF format) and provides improvement suggestions using Large Language Models (LLMs).

This project extracts text directly from uploaded resumes using PDF.js and sends the content to an AI model through OpenRouter API to generate resume feedback.

Built as one of my early projects to explore:
- AI API integration
- PDF processing in JavaScript
- Prompt-based resume analysis
- Frontend development with HTML, CSS, and JavaScript

---

## 🌱 Project Context

This is a beginner-level AI project created to understand how AI applications process real documents and generate useful outputs.

The goal was to combine:
- File Upload Handling
- PDF Text Extraction
- AI Integration
- Dynamic UI Updates

into a simple end-to-end web application.

---

# ✨ Features

✔ Upload Resume in PDF format  
✔ Extract resume text automatically  
✔ AI-based resume feedback  
✔ Real-time status updates  
✔ Clean browser-based interface  
✔ No backend required  

---

# 🏗 How It Works

```text
User Upload Resume (PDF)
          ↓
Extract Text using PDF.js
          ↓
Process Resume Content
          ↓
Send Prompt → OpenRouter API
          ↓
AI Model Analysis
          ↓
Display Suggestions on Screen
```

---

# 🛠 Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript (ES6)

## AI & APIs
- OpenRouter API
- GPT-3.5 Turbo Model

## Document Processing
- PDF.js

---

# 📂 Project Structure

```
resume-analyzer/
│
├── index.html
├── style.css
├── script.js
├── README.md
```

---

# ⚙ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Aayu4473/resume-analyzer.git
```

Open project:

```bash
cd resume-analyzer
```

---

## 2. Configure API Key

Open:

```bash
script.js
```

Replace:

```javascript
Authorization:"Bearer YOUR_API_KEY"
```

with:

```javascript
Authorization:"Bearer YOUR_OPENROUTER_API_KEY"
```

Get API key from:

https://openrouter.ai/

---

## 3. Run Project

Open:

```bash
index.html
```

OR

Use VS Code Live Server.

---

# ▶ Usage

1. Open website
2. Upload Resume PDF
3. Click **Analyze Resume**
4. Wait for AI processing
5. Read generated improvement suggestions

---

# 🧠 AI Prompt Logic

Current prompt:

```text
Analyze this resume and suggest improvements.
```

Resume text is extracted and partially sent to the AI model.

(Current implementation limits analysis to the first 1500 characters.)

---

# ⚠ Current Limitations

- Supports PDF only
- Requires API key
- Uses first 1500 characters for analysis
- No backend validation
- Large resumes may lose information

---

# 🚀 Future Improvements

- [ ] ATS Score Generator
- [ ] Resume Keyword Matching
- [ ] Resume Section Detection
- [ ] Job Description Comparison
- [ ] Better UI Design
- [ ] Export Suggestions as PDF
- [ ] Multi-page Resume Optimization

---


# 👩‍💻 Author

**Aayushi Tiwari**

GitHub:
https://github.com/Aayu4473

LinkedIn:
https://linkedin.com/in/aayushi-tiwari-tech

---

If this project helped you or you found it interesting, consider giving it a ⭐
