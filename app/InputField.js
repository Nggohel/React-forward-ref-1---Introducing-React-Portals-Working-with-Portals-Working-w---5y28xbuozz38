import React, { useRef } from 'react';

const InputField = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const getInputValue = () => {
    return inputRef.current.value;
  };

  return (
    <div>
      <input id="input" type="text" ref={inputRef} />
    </div>
  );
});

export default InputField;
