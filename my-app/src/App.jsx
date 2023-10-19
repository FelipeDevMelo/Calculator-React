import React from "react";
import Button from "./Components/Button";
import Display from "./Components/Display";

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <div className="buttons-grid">
        <Display />
       <Button name="(" />
       <Button name=")" />
       <Button name="%" />
       <Button name="AC" />
       <Button name="7" />
       <Button name="8" />
       <Button name="9" />
       <Button name="/" />
       <Button name="4" />
       <Button name="5" />
       <Button name="6" />
       <Button name="X" />
       <Button name="1" />
       <Button name="2" />
       <Button name="3" />
       <Button name="-" />
       <Button name="0" />
       <Button name="." />
       <Button name="=" />
       <Button name="+" />


      </div>
    </div>
  );
}

export default App;
