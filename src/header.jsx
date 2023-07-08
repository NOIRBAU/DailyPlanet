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
const pages = ['HOME', 'ABOUT', 'CONTACT'];

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar
        sx={{ background: '#111111', maxWidth: '1300px', position: 'static' }}
        className="appBar"
      >
        <Toolbar>
          <div className="navbar__toolbar">
            <img style={{ width: 70, height: 50, margin: 5 }} src={logo} />
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: '1.5rem', pl: '10%' }}>DAILY PLANET</Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: 'auto' }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  TabIndicatorProps={{
                    style: { background: 'Goldenrod', height: 3 },
                  }}
                >
                  {pages.map((page, index) => (
                    <Tab key={index} label={page} />
                  ))}
                </Tabs>
                <Button
                  sx={{ marginLeft: 'auto' }}
                  style={{ backgroundColor: 'goldenrod' }}
                  variant="contained"
                >
                  LOGIN
                </Button>
              </>
            )}
          </div>

          <></>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
