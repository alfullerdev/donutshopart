import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();

  function hoverButton(e) {
    e.target.style.color = '#ccc';
}

function leaveButton(e) {
    e.target.style.color = 'black';
}
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
                <p className={classes.regularText} ><a onMouseOver={hoverButton} onMouseOut={leaveButton} className={classes.regularText} href={"mailto:support@amberfullerdesigner.com"}>support@shop.amberfullerdesigner.com</a></p>
                <p className={classes.regularText} style={{marginTop:"20px"}} > <a onMouseOver={hoverButton} onMouseOut={leaveButton} className={classes.regularText} href={"https://www.instagram.com/ledonutshop_art/"}>Instagram: @ledonutshop_art</a></p>
          </Grid>
        </>
};

export default Contact;
