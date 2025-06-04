import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div>{counter}</div>
      <button>+</button>
      <button>-</button>
    </div>
  );
  
}

export default App;