import React , {useState} from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import { Link, useLocation} from 'react-router-dom';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes     = useStyles();
    const currentYear = new Date().getFullYear();

    function hoverButton(e) {
        e.target.style.color = '#ccc';
    }

    function leaveButton(e) {
        e.target.style.color = 'black';
    }

    return <>
        <footer className={classes.footer_styles}>
        <Grid  justifyContent={"center"} container >
            <Grid xs={8} item className={classes.footer_text}>
                <span className={classes.copyright}>Copyright&copy; {currentYear} </span>
                <span>Amber Fuller Designer</span>. All rights reserved.
            </Grid>

            <Grid xs={1}component={Link} to="/terms"  onMouseOver={hoverButton} onMouseOut={leaveButton} item className={classes.footer_text} > Terms</Grid>
            <Grid xs={2} sm={1} component={Link} to="/policy" onMouseOver={hoverButton} onMouseOut={leaveButton} item className={classes.footer_text} >Privacy Policy</Grid>
        </Grid>
        </footer>
    </>
};

export default Footer;