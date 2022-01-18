import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import logo from '../../assets/logo.png';
import useStyles from './styles';



const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit" >
            <Toolbar>
                <Typography variant="h6" className={classes.tittle} color="inherit" >
                    Commerce.js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="Show Cart" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>    
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar