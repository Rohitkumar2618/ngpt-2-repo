import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

// Initialize the OpenAI client with the API key
const client = new OpenAI({
  apiKey: OPENAI_KEY, // Use your OpenAI API key
  dangerouslyAllowBrowser: true, // Allows the use of the API in the browser, ensure security measures
});

// Example function to interact with the Gemini API
export const fetchGeminiResponse = async (userQuery) => {
  try {
    // Make the request to the Gemini API using the model name
    const gptResult = await client.chat.completions.create({
      model: "gemini-1", // Use the correct Gemini model name once available
      messages: [{ role: "user", content: userQuery }],
    });

    // Return the response or handle it in your app
    return gptResult.choices[0].message.content;
  } catch (error) {
    console.error("Error interacting with Gemini API:", error);
    throw error;
  }
};

// Default export for the OpenAI client
export default client;
