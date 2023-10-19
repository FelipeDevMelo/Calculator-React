import React from "react";
import { useState } from "react";

function Button(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
            setCount(count+1)
            console.log(count)
      };
  return (
    <div className="item">
      <button type="button" onClick={handleClick} >{props.name}</button>
    </div>
  );
}

export default Button;