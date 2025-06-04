import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [textInput, setTextInput] = useState('');
  const [time, setTime] = useState(getTime())

  function getTime() {
    return new Date().toLocaleString().split(' ')[1]
  }

  const handleIncrement = () => {
    setCounter(counter + 1); 
    setTime(getTime());
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
    setTime(getTime());
  }
  const handleChange = (e) => setTextInput(e.target.value);

  return (



    <div className="container">
      <div className="counter-container">
        <div>{counter}</div>
        <Button text="+" onClick={handleIncrement} />
        <Button text="-" onClick={handleDecrement} />
        <div>Counter last updated at: {time}</div>
      </div>

      <div className="input-container">
        <label htmlFor="disp">Enter some text: </label>
        <input type="text" id="disp" value={textInput} onChange={handleChange}/>  
        <div>Your input: {textInput}</div>
      </div>
    </div>
  );
  
}

export default App;