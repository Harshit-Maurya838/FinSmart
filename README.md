# 💸 AI Finance Tracker - FinSmart - Full Stack Web App

A comprehensive, AI-powered personal finance management platform built using **Next.js**, **Tailwind CSS**, **ShadCN UI**, and **Gemini AI**. This project empowers users to track income, expenses, manage budgets, scan receipts, and generate intelligent monthly financial reports.

![alt text](/public/image-1.png)
![alt text](/public/image.png)

---

## 🚀 Features

- ✅ User Authentication with **Clerk**
- 💰 Track Income & Expenses
- 📊 AI-Generated Monthly Financial Reports
- 🧾 AI-Powered Receipt Scanning (Gemini AI)
- 📅 Recurring Transactions Support
- 🧠 Smart Categorization with AI
- 🗂️ Budget Management & Alerts
- 📈 Interactive Charts & Insights
- 📥 Email Notifications (Resend API)
- 🔒 Secured Routes & Role Management
- 📱 Fully Responsive UI with **Tailwind CSS**
- ⚙️ Backend powered by **Prisma** + **Supabase**
- 🛡️ Security with **Arcjet**

---

## 📦 Tech Stack

- **Frontend:** Next.js 15 (App Router), Tailwind CSS, ShadCN UI
- **Backend:** Prisma ORM, Supabase (PostgreSQL), API Routes
- **Authentication:** Clerk
- **AI:** Gemini AI (Gemini 1.5 Flash)
- **Emailing:** Resend API
- **Security:** Arcjet (rate limiting, bot protection)
- **Styling:** Tailwind CSS, Responsive Layouts
- **Charts:** Recharts, Bar & Pie Visualizations
- **Deployment:** Vercel

---

## 🧠 AI Integrations

- **Gemini AI API**
  - Receipt scanning
  - Smart categorization of expenses
  - Personalized monthly insights

- **AI Email Reports**
  - Monthly financial summaries sent to users with key metrics

---

## 🔐 Authentication & Security

- Clerk handles login/signup using pre-built components
- Middleware for protected routes
- Role-based access (User/Admin)
- Environment variables for all API keys
- Arcjet for enhanced API security

---

## 🧾 Database Schema Overview

- **User** → Authentication & linked accounts
- **Account** → Tracks balances per user
- **Transaction** → Tracks individual income/expenses
- **Budget** → Monthly budget with alert settings
- **Reports** → AI-generated summaries
- **RecurringTransactions** → For repeated expenses/income

---

## 📊 Core Functionality

- Income & Expense Tracking
- Account Management (default account, multiple support)
- Transaction Sorting, Filtering, Pagination
- Budget Configuration and Alert Notifications
- Recurring Transactions with Cron Jobs
- Form validation, error handling, toast notifications
- Charts for visualization (bar, pie)
- Email system using Resend API
- Monthly report generation with AI insights

---

## 📥 Background Jobs & Ingest API

- Folder: `/inest`
- Budget alerts run in background
- Retry mechanism for failed jobs
- Batch processing of recurring transactions

---

## 🧪 Local Development

```bash
# Clone the repo
git clone https://github.com/Harshit-Maurya838/FinSmart.git
cd FinSmart

# Install dependencies
npm install --legacy-peer-deps

# Setup environment variables

# Run locally
npm run dev
```
---

## 📧 Contact

For issues or suggestions, feel free to open an issue or contact me via [LinkedIn](https://www.linkedin.com/in/44-harshit-maurya/) or email.
🔗 [Live Demo](https://finsmart-pi.vercel.app/)