import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const [isCopied, setIsCopied] = useState(false);

  const generatedPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "01234567890";
    if (characterAllowed) str += "@#$%^&*+-(){}[]~`!";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
    setIsCopied(false);
  }, [length, numberAllowed, characterAllowed, setPassword, setIsCopied]);

  //useEffect
  useEffect(() => {
    generatedPassword();
  }, [length, numberAllowed, characterAllowed, generatedPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30);
    window.navigator.clipboard.writeText(password);
    setIsCopied(true);
  }, [password, setIsCopied]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-2">
      <div className="border border-gray-600 p-5 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md space-y-4">
        <h2 className="text-2xl text-center">Keyzy</h2>
        <p className="italic text-gray-400 text-center text-sm leading-4">
          Generate - Copy - Secure
        </p>

        {/* Input + Copy Button */}
        <div className="flex mt-5">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-1 text-white px-3 py-2 rounded-l-md border border-r-0 border-gray-600 text-sm sm:text-base"
            placeholder="Generate a password..."
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="bg-lime-600 text-black duration-200 cursor-pointer px-3 sm:px-4 rounded-r-md hover:bg-lime-700 hover:text-white text-sm sm:text-base"
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Slider */}
        <div className="flex items-center space-x-3">
          <input
            type="range"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-1 rounded-lg cursor-pointer accent-lime-500"
          />
          <span className="font-medium text-sm sm:text-base">
            Length ({length})
          </span>
        </div>

        {/* Options */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <label className="flex items-center space-x-1">
            <input
              type="checkbox"
              className="accent-lime-500"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <span className="text-sm sm:text-base">Numbers</span>
          </label>

          <label className="flex items-center space-x-1">
            <input
              type="checkbox"
              className="accent-lime-500"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <span className="text-sm sm:text-base">Special Characters</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatedPassword}
          className="w-full bg-lime-600 text-black py-2 rounded-md duration-200 hover:bg-lime-700 hover:text-white cursor-pointer text-sm sm:text-base"
        >
          Generate a new Password
        </button>
      </div>
    </div>
  );
}

export default App;
