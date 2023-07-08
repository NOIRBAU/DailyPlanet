import React, { useState } from 'react';
import logo from './assets/Daily_Planet.png';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DrawerComp from './Drawer';

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#111111' }} position="static" mb={0}>
        <Toolbar>
          <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }} class="centered">
            <img style={{ width: 70, height: 50, margin: 5 }} src={logo} />
            DAILY PLANET
          </Typography>
          <DrawerComp />
          <>
            <Tabs
              sx={{ marginLeft: 'auto' }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="HOME" />
              <Tab label="ABOUT" />
              <Tab label="CONTACT" />
              <Tab label="LOGIN" />
            </Tabs>
            <Button
              sx={{ marginLeft: 'auto' }}
              style={{ backgroundColor: 'goldenrod' }}
              variant="contained"
            >
              Login
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
