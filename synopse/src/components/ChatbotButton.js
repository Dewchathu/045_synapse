"use client";

import { useState } from "react";
import Image from 'next/image'

export default function ChatbotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-purple-500 to-blue-400 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
        >
          {/* Chat Icon */}
          {isChatOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <Image
            src="/chatbot.png"
            width={35}
            height={35}
          />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-22 right-5 bg-white w-72 h-96 border border-gray-300 shadow-xl rounded-lg z-50">
          <div className="flex justify-between items-center p-3 bg-purple-500 text-white rounded-t-lg">
            <h3 className="font-semibold">AI Chatbot</h3>
            <button onClick={() => setIsChatOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-3 space-y-2 h-full">
            {/* Chat messages (dummy for now) */}
            <div className="flex-grow overflow-y-auto p-2">
              <p className="text-sm text-gray-500">Hello! How can I assist you today?</p>
            </div>

            {/* Input field */}
            <div className="flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow px-2 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-purple-500"
              />
              <button className="bg-purple-500 text-white px-4 rounded-r-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
