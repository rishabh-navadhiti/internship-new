import Button from '@mui/material/Button';
import { useState } from "react";
import Stack from '@mui/material/Stack';

const Counter = ({handleDecrement, handleIncrement, counter, time}) => {
    return (
      
        <div className="counter-container">
            <div>{counter}</div>
            <Stack direction="row" spacing={2}  sx={{justifyContent: "center"}}> 
                <Button color='success' onClick={handleIncrement} variant='contained'>+1</Button>
                <Button color='error' onClick={handleDecrement} variant='contained'>-1</Button>
            </Stack>
            <div>Counter last updated at: {time}</div>
        </div>
    )
}

export default Counter;