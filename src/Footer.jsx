import { Container } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { amber } from '@mui/material/colors';

const Footer = () => (
  <>
    <Container
      sx={{
        background: '#111111',
        height: 50,
        maxWidth: 1300,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 0,
      }}
    >
      <TwitterIcon sx={{ color: amber[500], fontSize: 40 }} />
      <FacebookIcon sx={{ color: amber[500], fontSize: 40 }} />
      <GitHubIcon sx={{ color: amber[500], fontSize: 40 }} />
      <InstagramIcon sx={{ color: amber[500], fontSize: 40 }} />
      <LinkedInIcon sx={{ color: amber[500], fontSize: 40 }} />
    </Container>
  </>
);

export default Footer;
