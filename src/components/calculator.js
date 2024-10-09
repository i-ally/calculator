import React, { useState } from "react";
import { add } from "../calculator";
import './calculator.css'; 

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator-container"> {/* Add the class here */}
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <p>{error}</p>}
    </div>
  );
}
