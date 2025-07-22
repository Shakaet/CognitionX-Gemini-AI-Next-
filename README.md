# 🤖 Gemini AI Assistant – Next.js App

![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-blue?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

Gemini AI Assistant is a sleek, fast, and dynamic AI interface built using **Next.js (App Router)**, **MongoDB**, and **Tailwind CSS**. It allows users to interact with an AI and stores previous conversations using a MongoDB backend.

---

## 🔥 Features

- ✅ Ask AI questions and get smart responses
- ✅ MongoDB integration for saving chat history
- ✅ Server Actions for secure API logic
- ✅ Responsive modern UI using Tailwind CSS
- ✅ Dynamic route-based conversation pages
- ✅ Loading states & modular components
- ✅ Incremental Static Regeneration (ISR)

---

## 🌐 Live Demo

👉 [View on Vercel](https://cognition-x-gemini-ai-next.vercel.app/)

---

## 🧾 Technologies Used

- **Next.js 15 (App Router)**
- **Tailwind CSS**
- **MongoDB Atlas**
- **React**
- **Vercel** (for deployment)

---

## 📁 Folder Structure

```bash
📦 app/
├── 📁 action/                   # Server actions (e.g., DB write)
│   └── action.js
├── 📁 component/                # Reusable components
│   ├── Del.jsx                 # Delete conversation button
│   ├── Input.jsx              # Input field and submit handler
│   ├── SideBar.jsx            # Sidebar with chat history
│   └── Suggestion.jsx         # Suggested prompts
├── 📁 conversation/            # Dynamic conversation pages
│   ├── 📁 [id]/                # Each conversation page (by ID)
│   │   └── page.js
│   └── loading.js             # Loading state for conversation page
├── 📁 lib/                     # External libs
│   └── mongodb.js             # MongoDB connection helper
├── favicon.ico
├── globals.css                # Tailwind global styles
├── layout.js                  # Root layout
├── loading.js                 # Loading UI for initial pages
└── page.js                    # Home page

# 🚀 Next.js Project Starter Guide

This is a full-stack Next.js application powered by App Router. Follow the instructions below to set up and run the project locally on **port 3000**.

---

## 📦 Prerequisites

Make sure the following are installed:

- **Node.js** (v18 or later): https://nodejs.org
- **npm** or **yarn** (npm comes with Node.js)

---

## 📁 Clone the Repository

```bash
git clone https://github.com/Shakaet/CognitionX-Gemini-AI-Next-.git
cd CognitionX-Gemini-AI-Next

npm install
# or
yarn install

API_KEY=your_api_key_here
NEXT_PUBLIC_API_URL=https://your-api.com

npm run dev
# or
yarn dev


