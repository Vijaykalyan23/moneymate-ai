
// A utility function to interact with Gemini API
export const queryGeminiAI = async (
  message: string,
  apiKey: string | null
): Promise<string> => {
  if (!apiKey) {
    return "Please provide a valid API key in settings to use the AI assistant.";
  }

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an AI assistant for MoneyMate, a personal finance app. 
                The app helps users track expenses, manage budgets, visualize financial data, set bill reminders, 
                and get AI-powered insights. Answer the following query concisely and helpfully: ${message}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.2,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 800,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error querying Gemini API:", error);
    return "Sorry, I encountered an error. Please try again later.";
  }
};
