import { GoogleGenAI, Type } from "@google/genai";
import { AIComfortResponse } from '../types';

// Safely retrieve API key to prevent startup crashes in browser environments
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    // process is not defined
  }
  return '';
};

const apiKey = getApiKey();
// Initialize AI only if we have an environment context, otherwise handle gracefully
const ai = new GoogleGenAI({ apiKey });

export const getSpiritualComfort = async (emotion: string): Promise<AIComfortResponse> => {
  if (!apiKey) {
    return {
      verse: "The Lord is my shepherd; I shall not want.",
      reference: "Psalm 23:1",
      message: "We are currently unable to connect to the AI assistant, but know that peace is found in His presence."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `A user is feeling "${emotion}". Provide a comforting Bible verse (KJV), the reference, and a short, gentle 1-sentence encouragement relevant to their feeling.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            verse: { type: Type.STRING },
            reference: { type: Type.STRING },
            message: { type: Type.STRING },
          },
          required: ["verse", "reference", "message"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AIComfortResponse;
  } catch (error) {
    console.error("AI Error:", error);
    return {
      verse: "Peace I leave with you, my peace I give unto you.",
      reference: "John 14:27",
      message: "Let your heart be not troubled, neither let it be afraid."
    };
  }
};