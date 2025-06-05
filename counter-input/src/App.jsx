import { useState } from "react";
// import Button from "./components/Button";
import Counter from './components/Counter';
import InputText from './components/InputText';
import './App.css'
import '@fontsource/inter';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';


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

    <Box sx={{ minHeight: '100vh', bgcolor: '#1b2530', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 400, width: '100%', p: 2 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center'}} gutterBottom>Simple Counter App</Typography>

          <Counter
            counter={counter}
            time={time}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />

          <InputText textInput={textInput} handleChange={handleChange} />

          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button variant="contained" onClick={handleReset} color="primary">Reset</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>

  //   <Card sx={{maxWidth: '400px'}}>
  //   <CardContent>
  //     <div className="container">
  //           <Counter counter={counter} time={time} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
  //         <InputText textInput={textInput} handleChange={handleChange}/>
  //       <button onClick={handleReset}>Reset</button>
  //     </div>
  //   </CardContent>
  //   </Card>
  );
  
}

export default App;