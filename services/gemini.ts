
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getProgramRecommendation(userGoal: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is looking for an international program (study or work abroad). User's input: "${userGoal}". Based on common options like Japan (labor export/internship), Korea (university/master study), or Germany (dual vocational training/nursing), provide a short, encouraging recommendation (max 3 sentences) in Vietnamese suggesting which path might suit them best.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, hiện tại tôi không thể đưa ra gợi ý. Vui lòng liên hệ với tư vấn viên của chúng tôi để được hỗ trợ tốt nhất.";
  }
}
