# MoneyMate - AI-Powered Budget Tracker 💰📊

MoneyMate is an intelligent budget tracking and financial management application that leverages AI to help users track expenses, set financial goals, and manage their money efficiently. Now featuring an interactive AI chatbot for real-time financial guidance!

## 🔥 Features

- **AI-Powered Budget Insights**: Get intelligent recommendations on spending and saving.
- **Expense & Income Tracker**: Log transactions and categorize them automatically.
- **Goal-Based Budgeting**: Set financial goals and track your progress.
- **Visual Analytics Dashboard**: View insightful charts and graphs of your spending patterns.
- **Interactive AI Chatbot**: Ask financial queries and get instant AI-driven responses.
- **Dark Mode Interface**: Eye-friendly dark theme for better usability.
- **Cloud Sync & Storage**: Securely store and access your data from anywhere.
- **Responsive Design**: Works seamlessly on both mobile and desktop devices.

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **AI Integration**: Google Gemini AI
- **State Management**: Context API
- **UI Components**: React Hot Toast, Lucide React Icons
- **Data Handling**: LocalStorage for user preferences and API keys

## 🚀 Getting Started

Follow these steps to set up and run MoneyMate on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/moneymate.git
cd moneymate
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add your API key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```

## 🔑 Environment Variables

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key (required for AI chatbot functionality).

## 💬 AI Chatbot Integration

MoneyMate now includes a built-in chatbot to assist users with:
- Understanding app features and usage
- Budgeting and financial guidance
- General finance-related queries

### How It Works
- The chatbot is accessible via a floating chat icon.
- Users can ask finance-related questions, and the AI provides instant responses.
- Uses the `Google Gemini AI` API for accurate and insightful answers.

## 🤝 Contributing

We welcome contributions! If you’d like to improve MoneyMate, feel free to fork the repo, make changes, and submit a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

