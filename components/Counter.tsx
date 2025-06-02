"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div className="flex gap-x-4 items-center my-4">
        <button
          onClick={() => (count <= 0 ? 0 : setCount(count - 1))}
          className="py-2 px-4 bg-blue-500 text-white">
          - 1
        </button>

        <span>{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="py-2 px-3 bg-blue-500 text-white">
          + 1
        </button>
      </div>
    </div>
  );
}

export default Counter;
