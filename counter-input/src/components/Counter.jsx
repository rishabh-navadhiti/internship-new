import { useState } from "react";
import { Button, Stack, Typography, Box } from '@mui/material';


const Counter = ({handleDecrement, handleIncrement, counter, time}) => {
    return (
      
        <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h6">Counter: {counter}</Typography>

            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button color="error" onClick={handleDecrement} variant="contained">-1</Button>
                <Button color="success" onClick={handleIncrement} variant="contained">+1</Button>
            </Stack>

            <Typography variant="caption" display="block" mt={1}>
                Last updated at: {time}
            </Typography>
        </Box>


        // <div className="counter-container">
        //     <div>{counter}</div>
        //     <Stack direction="row" spacing={2}  sx={{justifyContent: "center"}}> 
        //         <Button color='success' onClick={handleIncrement} variant='contained'>+1</Button>
        //         <Button color='error' onClick={handleDecrement} variant='contained'>-1</Button>
        //     </Stack>
        //     <div>Counter last updated at: {time}</div>
        // </div>
    )
}

export default Counter;