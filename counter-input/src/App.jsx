import { useState } from "react";
// import Button from "./components/Button";
import Counter from './components/Counter';
import InputText from './components/InputText';
import './App.css'
import '@fontsource/inter';
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";


function App() {
  const [textInput, setTextInput] = useState('');
  const [counter, setCounter] = useState(0);
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

  const handleReset = () => {
    setCounter(0);
    setTextInput('');
  }
  return (

    <Card sx={{maxWidth: '400px'}}>
    <CardContent>
      <div className="container">
            <Counter counter={counter} time={time} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
          <InputText textInput={textInput} handleChange={handleChange}/>
        <button onClick={handleReset}>Reset</button>
      </div>
    </CardContent>
    </Card>
  );
  
}

export default App;