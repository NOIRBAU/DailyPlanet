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
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: { xs: '100%', sm: '50%', md: '40%' }, padding: { xs: 3, sm: 2, md: 20 } }}
        >
          <Box sx={{ background: 'DarkGoldenrod', opacity: '0.8', borderRadius: 5 }} pb={1}>
            <Typography align="center" variant="h1" sx={{ fontWeight: 900 }} mt={6}>
              Daily Planet
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
