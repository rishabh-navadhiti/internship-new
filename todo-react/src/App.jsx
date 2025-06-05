import { Box, Typography, TextField, Card, Stack, Button, Checkbox, IconButton } from '@mui/material'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false); 

    const handleChange = (e) => setInput(e.target.value);

    const handleSubmit = (e) => {        
        e.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            details: input.trim(),
            completed: false
        }
        setTasks([...tasks, newTask]);
        setInput('');
        
    }

    const handleDelete = (id) => () => setTasks(tasks.filter(task => task.id !== id));
    
     const handleCheck = (id) => {
        return (e) => {         
            setTasks(tasks.map(task => {
                if (task.id == id) {
                    return {...task, completed: e.target.checked}
                }
                return task;
            }))
            // setTimeout(() => {                

            // }, 1000);
            console.log(`Task with id ${id} is ${e.target.checked ? 'completed' : 'not completed'}`);    
        }
    }

    return (
        
        <Box sx={{ minHeight: '100vh'}}>
            <Card sx = {{width: '50%', margin: 'auto', marginTop: '30vh', padding: '40px',
                 backgroundColor: '#d3f3d3',
                color: '#212121',           
                boxShadow: 1,
                borderRadius: 2,}}>


                <Typography variant="h2" sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: '20px'}}>
                    ToDo List
                </Typography>


                <Box component='form' sx={{marginTop: '20px', justifyContent: 'space-between', display: 'flex', gap: '10px'}} onSubmit={handleSubmit}>
                    <TextField required={true} variant='outlined' id='taskInput' sx={{borderColor: '#fffffff', width: '80%'}} value={input} onChange={handleChange}/> 
                    <Button type='submit' variant='contained' color='primary' sx={{padding: '4px 30px'}}>Add Task</Button>
                </Box> 



                <Box sx={{marginTop: '40px'}}>
                    {tasks.filter(task => !task.completed).map(task => {
                        return(
                            <Stack key={task.id} direction='row' sx={{marginTop: '10px', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '10px'}}>
                                <Typography variant='h5'><Checkbox checked={task.completed} onChange={handleCheck(task.id)}/>{task.details}</Typography>
                                <Button variant='outlined' color='error' onClick={handleDelete(task.id)}>Delete</Button>
                            </Stack>
                        )
                    })}
                </Box>


                
                <Box sx={{marginTop: '40px'}}>    
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ cursor: 'pointer', marginBottom: '20px' }}
                    >
                        <IconButton
                        size="small"
                        sx={{
                            transform: open ? 'rotate(270deg)' : 'rotate(0deg)',
                            padding: '4px',
                            marginRight: '8px',
                            
                        }}
                        onClick={() => setOpen(prev => !prev)}
                        >
                        <ExpandMoreIcon fontSize="small" />
                        </IconButton>   
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Completed Tasks
                        </Typography>
                    </Box>

                    {!open ? tasks.filter(task => task.completed).map(task => {
                        return(
                            <Stack key={task.id} direction='row' sx={{marginTop: '10px', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '10px'}}>
                                <Typography variant='h5' sx={{textDecoration: 'line-through', color: '#525252'}}><Checkbox checked={task.completed} onChange={handleCheck(task.id)}/>abcd</Typography>
                            </Stack>
                        )
                    }) : <></>}
                </Box>


            </Card>
        </Box>
    )
}

export default App;