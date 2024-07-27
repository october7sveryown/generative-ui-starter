import { streamText } from "ai";
import { createOpenAI as createGroq } from "@ai-sdk/openai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  //conversation history
  const { messages } = await req.json();

  //configuring Groq
  const groq = createGroq({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });

  //calling llm
  const result  = await streamText({
    model: groq("llama-3.1-70b-versatile"),
    messages : messages
  });

  //return result as a streamed response object
  return result.toAIStreamResponse();
}
