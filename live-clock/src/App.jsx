import { useState, useEffect } from 'react'
import './App.css'
import { Box, Card, Typography } from '@mui/material'
import QuoteBox from './components/QuoteBox';
import getCurrentTime from './util/time'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime())
    }, 1000)
  }, [])


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between'}}>

      <Header />

      <Box sx={{width: '900px', margin: '10vh auto'}}>
        <Card sx={{textAlign: 'center', padding: '30px 55px'}}>
          <Typography variant='h2'>Clock and Quotes</Typography>
          <Typography variant='h3'>{time}</Typography>

          <QuoteBox sx={{margin: '40px 0px'}}></QuoteBox>
        </Card>
      </Box>

      <Footer></Footer>
    </Box>
  )
}

export default App
