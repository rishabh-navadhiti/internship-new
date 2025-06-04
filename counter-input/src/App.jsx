import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);

  const handleDecrement = () => setCounter(counter - 1);

  return (
    <div className="container">
      <div>{counter}</div>
      <Button text="+" onClick={handleIncrement} />
      <Button text="-" onClick={handleDecrement} />
    </div>
  );
  
}

export default App;