import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();
  return <>
          <Grid
              container
              spacing={0}
              align="center"
              justify="center"
              direction="column"
              style={{ height:'700px' }}
            >
                <p className={classes.boldText}>CONTACT</p>
                <p className={classes.regularText} ><a className={classes.regularText} href={"mailto:support@amberfullerdesigner.com"}>support@shop.amberfullerdesigner.com</a></p>
                <p className={classes.regularText} style={{marginTop:"20px"}}>Instagram: @ledonutshop_art</p>
          </Grid>
        </>
};

export default Contact;
