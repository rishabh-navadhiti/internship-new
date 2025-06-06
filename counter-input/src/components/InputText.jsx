import { Margin } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Input from '@mui/joy/Input';

const InputText = ({textInput, handleChange}) => {

    return (
        <div className="input-container">
            <TextField id="outlined-basic"  variant="filled" placeholder=''  label='Enter text' onChange={handleChange}
            sx={{backgroundColor: 'white', "& .MuiInputBase-input::placeholder": {color: 'red'}}}
        />
        {/* <Input
  color="primary"
  placeholder="adsfsdf"
  variant="outlined"
  onChange={handleChange}
/>      */}
        <div>Your input: {textInput}</div>
        </div>
    )
}

export default InputText;