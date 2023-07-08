import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroImage from './assets/newsWall1.jpg';

const Hero = () => {
  return (
    <Box mt={0}>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 500,
          maxWidth: '1300px',
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <Box
          sx={{ width: { xs: '100%', sm: '85%', md: '70%' }, padding: { xs: 3, sm: 2, md: 20 } }}
        >
          <Box sx={{ background: 'DarkGoldenrod', opacity: '0.8', borderRadius: 5 }} pb={1}>
            <Typography align="center" variant="h1" sx={{ fontWeight: 900 }} mt={5}>
              Daily Planet
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
