import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);

  const handleDecrement = () => setCounter(counter - 1);

  return (
    <div className="container">
      <div>{counter}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
  
}

export default App;