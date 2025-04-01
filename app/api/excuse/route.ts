import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);

export async function POST(request: Request) {
   try {
      const { excuse } = await request.json();
      const model = genAI.getGenerativeModel({
         model: "gemini-1.5-flash",
         generationConfig: {
            temperature: 0.9,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 100,
         },
      });

      const prompt = `Write an hilarious excuse about ${excuse} concisely, make it sounds like genz with great humor and hilarious tone around 30 words max`;

      const result = await model.generateContent(prompt);
      const reply = await result.response.text();

      return NextResponse.json({ excuse: reply });
   } catch (error) {
      console.log("Error generating excuses", error);
      return NextResponse.json(
         { error: "Failed to generate excuse" },
         { status: 500 }
      );
   }
}
