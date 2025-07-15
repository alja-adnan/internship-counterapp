
"use client";

import { useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800"> Counter</h1>

        <div className="text-6xl font-mono text-gray-700">{count}</div>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow"
          >
            <Minus />
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow"
          >
            <RotateCcw />
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow"
          >
            <Plus />
          </button>
        </div>

        <Link
          to="/validation"
          className="inline-block mt-4 text-blue-600 font-medium hover:underline"
        >
          Go to Validation Form
        </Link>
      </div>
    </div>
  );
}

export default CounterApp;





