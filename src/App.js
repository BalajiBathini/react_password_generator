import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="container">
        
        <div className="controls">
          <label>Password Length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <div>
            <input
              type="checkbox"
              id="includeUppercase"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <label htmlFor="includeUppercase">Include Uppercase</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="includeLowercase"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            <label htmlFor="includeLowercase">Include Lowercase</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="includeNumbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <label htmlFor="includeNumbers">Include Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="includeSymbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <label htmlFor="includeSymbols">Include Special Characters</label>
          </div>
          <button className="primary-button" onClick={generatePassword}>Generate Password</button>

        </div>
        <div className="password-display">
          {password && (
            <>
              <input type="text" value={password} readOnly />
              <button onClick={copyToClipboard}>Copy to Clipboard</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
