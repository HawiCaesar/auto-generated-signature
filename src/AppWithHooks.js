import React, { useState } from "react";
import fitty from "fitty";
import html2canvas from "html2canvas";
import "./styles.css";

export default function AppWithHooks() {
  const [inputVal, setInputVal] = useState("");

  const [inputVal2, setInputVal2] = useState("");

  const elRef = React.useRef();

  React.useEffect(() => {
    fitty(elRef.current, {
      multiLine: false,
      minSize: 10,
      maxSize: 52
    });
  }, []);

  const printImage = () => {
    const domElement = document.getElementById("signature-area");
    html2canvas(domElement).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      console.log(imgData, "######");
      //window.open(imgData)
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />

      <input
        type="text"
        value={inputVal2}
        onChange={e => setInputVal2(e.target.value)}
      />

      <button onClick={printImage}>Print Sig</button>
      <div style={{ width: "688px", height: "140px", backgroundColor: "grey" }}>
        <div
          id="signature-area"
          style={{
            margin: "40px auto",
            whiteSpace: "nowrap",
            fontFamily: "cursive, Helvetica",
            fontStyle: "italic"
          }}
          ref={elRef}
        >
          {inputVal} {inputVal2}
        </div>
      </div>
    </div>
  );
}
