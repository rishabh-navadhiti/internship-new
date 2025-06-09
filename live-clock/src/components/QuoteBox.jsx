import React, { useState } from 'react';
import { Box, Typography, Button, Skeleton } from '@mui/material';
import getQuote from '../util/getQuote'


function QuoteBox({sx}) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    
    await new Promise((res) => setTimeout(res, 500));
    
    const data = await getQuote();
    console.log(data);
    
    setQuote(data.quote);
    setAuthor(data.author);
    setLoading(false);
  };

  return (
    <Box sx={sx}>
      {loading ? (
        <>
          <Skeleton variant="text" width="80%" height={40} />
          <Skeleton variant="text" width="40%" height={30} />
        </>
      ) : (
        <>
          <Typography variant='body1'>"{quote}"</Typography>
          <Typography variant='body2' sx={{fontStyle: 'italic'}}>— {author}</Typography>
        </>
      )}
      <Button variant='outlined' onClick={handleClick} disabled={loading} sx={{ mt: 2 }}>
        New Quote
      </Button>
    </Box>
  );
}


export default QuoteBox;
