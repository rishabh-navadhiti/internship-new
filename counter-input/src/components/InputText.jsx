import { TextField, Typography, Box } from '@mui/material';

const InputText = ({textInput, handleChange}) => {

    return (

        <Box sx={{ mt: 3 }}>
            <TextField
                fullWidth
                variant="filled"
                label="Enter text"
                onChange={handleChange}
                value={textInput}   
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
                Your input: {textInput}
            </Typography>
        </Box>


//         <div className="input-container">
//             <TextField id="outlined-basic"  variant="filled" placeholder=''  label='Enter text' onChange={handleChange}
//             sx={{backgroundColor: 'white', "& .MuiInputBase-input::placeholder": {color: 'red'}}}
//         />
//         {/* <Input
//   color="primary"
//   placeholder="adsfsdf"
//   variant="outlined"
//   onChange={handleChange}
// />      */}
//         <div>Your input: {textInput}</div>
//         </div>
    )
}

export default InputText;   