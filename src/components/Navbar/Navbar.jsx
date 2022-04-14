import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Grid } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import { Link, useLocation} from 'react-router-dom';

import Logo from "../../assets/shop_logo.png"
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();



    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit" >
            <Toolbar>
                <Grid justifyContent={"center"} container>
                    <Grid xs={4} item></Grid>
                    <Grid xs={4} item>
                        <Grid container component={Link} to="/"  justifyContent={"center"}>
                            <img src={Logo} alt="logo" className={classes.logo} />
                        </Grid>
                    </Grid>
                    <Grid xs={4} item>
                        <Grid
                            container
                            spacing={0}
                            align="center"
                            justify="center"
                            direction="row"
                            style={{minHeight:'120px'}}
                        >
                            <Typography component={Link} to="/about" variant="h6" className={classes.title} color="inherit" >ABOUT</Typography>
                            <Typography component={Link} to="/contact" variant="h6" className={classes.title} color="inherit" >CONTACT</Typography>
                            <IconButton component={Link} to="/cart" aria-label="Show Cart" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>    
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar