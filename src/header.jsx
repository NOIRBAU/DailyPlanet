import React from "react";
import {AppBar, Typography} from '@mui/material';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography>
                        DAILY PLANET
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header