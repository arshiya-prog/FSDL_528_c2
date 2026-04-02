import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (input === "0" && value !== ".") {
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const clearInput = () => setInput("0");

  const deleteLast = () => {
    setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const getClass = (type) => {
    if (type === "operator") return "bg-orange-500 text-white";
    if (type === "top") return "bg-gray-400 text-black";
    return "bg-gray-700 text-white";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 bg-black rounded-3xl p-5 shadow-2xl">

        {/* Display */}
        <div className="text-white text-right text-5xl font-light mb-6 break-words">
          {input}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-4">

          {/* Row 1 */}
          <button onClick={clearInput} className={`h-16 rounded-full text-xl ${getClass("top")}`}>C</button>
          <button onClick={deleteLast} className={`h-16 rounded-full text-xl ${getClass("top")}`}>⌫</button>
          <button onClick={() => handleClick("%") } className={`h-16 rounded-full text-xl ${getClass("top")}`}>%</button>
          <button onClick={() => handleClick("/") } className={`h-16 rounded-full text-xl ${getClass("operator")}`}>/</button>

          {/* Row 2 */}
          <button onClick={() => handleClick("7")} className={`h-16 rounded-full text-xl ${getClass()}`}>7</button>
          <button onClick={() => handleClick("8")} className={`h-16 rounded-full text-xl ${getClass()}`}>8</button>
          <button onClick={() => handleClick("9")} className={`h-16 rounded-full text-xl ${getClass()}`}>9</button>
          <button onClick={() => handleClick("*")} className={`h-16 rounded-full text-xl ${getClass("operator")}`}>*</button>

          {/* Row 3 */}
          <button onClick={() => handleClick("4")} className={`h-16 rounded-full text-xl ${getClass()}`}>4</button>
          <button onClick={() => handleClick("5")} className={`h-16 rounded-full text-xl ${getClass()}`}>5</button>
          <button onClick={() => handleClick("6")} className={`h-16 rounded-full text-xl ${getClass()}`}>6</button>
          <button onClick={() => handleClick("-")} className={`h-16 rounded-full text-xl ${getClass("operator")}`}>-</button>

          {/* Row 4 */}
          <button onClick={() => handleClick("1")} className={`h-16 rounded-full text-xl ${getClass()}`}>1</button>
          <button onClick={() => handleClick("2")} className={`h-16 rounded-full text-xl ${getClass()}`}>2</button>
          <button onClick={() => handleClick("3")} className={`h-16 rounded-full text-xl ${getClass()}`}>3</button>
          <button onClick={() => handleClick("+")} className={`h-16 rounded-full text-xl ${getClass("operator")}`}>+</button>

          {/* Row 5 */}
          <button
            onClick={() => handleClick("0")}
            className="col-span-2 h-16 bg-gray-700 text-white rounded-full text-xl text-left pl-6"
          >
            0
          </button>

          <button onClick={() => handleClick(".")} className={`h-16 rounded-full text-xl ${getClass()}`}>.</button>

          <button
            onClick={calculateResult}
            className={`h-16 rounded-full text-xl ${getClass("operator")}`}
          >
            =
          </button>

        </div>
      </div>
    </div>
  );
}
