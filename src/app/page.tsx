"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        <h5 className="font-semibold text-center">
          Generative UI starter app with Vercel AI SDK, Llama 3.1 and Groq
        </h5>
        {messages.map((m) => (
          <div
            key={m.id}
            className="whitespace-pre-wrap p-2 m-2 bg-gray-100 text-black border-1 border-gray-50 rounded-lg"
          >
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}
