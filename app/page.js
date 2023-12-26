import React, { useRef, useState } from "react";
import InputField from "./InputField";

function Home() {
  const newRef = useRef();
  const [values, setValues] = useState("");

  const settingValue = () => {
    const inputValue = newRef.current.getInputValue();
    setValues(inputValue);
  };

  const focusInput = () => {
    newRef.current.focus();
  };

  return (
    <div>
      <InputField ref={newRef} />
      <br />
      <button id="settingValueButton" onClick={settingValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus the input
      </button>
      <br />
      <br />
      <textarea id="textarea" value={values}></textarea>
    </div>
  );
}

export default Home;
