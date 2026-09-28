"use client";

import { useState } from "react";

export default function StudentCard({ name, course, year }) {
  const [message, setMessage] = useState("Hello, Student!");

  return (
    <div className="bg-blue-100 rounded-2xl shadow-md p-6 w-80 text-center">
      <h2 className="text-lg font-bold uppercase tracking-wide text-blue-800 mb-4">
        Student Card
      </h2>

      <p className="text-xl font-semibold italic text-gray-800">{name}</p>
      <p className="text-gray-700">{course}</p>
      <p className="text-gray-700 mb-4">{year}</p>

      <button
        onClick={() => setMessage("Welcome to Next.js!")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        Click Me
      </button>

      <p className="mt-4 text-gray-900 font-medium">{message}</p>
    </div>
  );
}