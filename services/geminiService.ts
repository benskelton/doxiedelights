
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDoxieAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are a specialized dachshund expert assistant for 'Doxie Delights'. You love dachshunds (wiener dogs). You provide styling tips, health advice (not as a replacement for a vet), and general trivia about the breed. Keep your tone cheerful, premium, and professional. Always mention that our accessories are specially cut for the dachshund's long body.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble thinking right now. Maybe a belly rub would help? (Error connecting to the expert)";
  }
};
