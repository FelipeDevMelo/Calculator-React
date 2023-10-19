import React from "react";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
      return;
    }
      setCalc(calc + value);
      
      if(!ops.includes(value)){
        setResult(eval(calc + value).toString());
      }
    
  };

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const deleteLast = () =>{
    if (calc == ""){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value)
    
  }

  const creatDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button type="button" key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  
    return (
      <div>
        <h1>Calculator</h1>
        <div className="buttons-grid">
          <div className="display-result">
        
            {result ?  <span>({result})</span> : ""} &nbsp;
            {calc || "0"}
          </div>
          <div className="operators">
            <button type="button" onClick={() => updateCalc("/")}>
              /
            </button>
            <button type="button" onClick={() => updateCalc("*")}>
              *
            </button>
            <button type="button" onClick={() => updateCalc("+")}>
              +
            </button>
            <button type="button" onClick={() => updateCalc("-")}>
              -
            </button>
            <button type="button" onClick={() => deleteLast()}>
              DEL
            </button>
          </div>

          <div className="digits">
            {creatDigits()}
            <button type="button" onClick={() => updateCalc("0")}>
              0
            </button>
            <button type="button" onClick={() => updateCalc(".")}>
              .
            </button>
            <button type="button" className="result" onClick={() => calculate()}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  
}
export default App;
