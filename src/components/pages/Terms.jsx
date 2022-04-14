import React from 'react';
import useStyles from './styles';
import { Grid } from '@material-ui/core'

const terms = () => {
    
    function hoverButton(e) {
      e.target.style.color = '#ccc';
    }

    function leaveButton(e) {
      e.target.style.color = 'black';
    }

   

  return <>
  <Grid container justifyContent={"center"} >
  <Grid xs={11} style={{marginBottom:'150px', marginTop:'150px', textAlign:'justify', fontFamily:'Source Sans Pro', fontSize:'15px'}}>

    <h4>Return Policy</h4>
    <p>Please choose your artwork carefully, check sizing and consider extra spacing for framing options as we do not accept returns. All items are final sale.</p>
    <h4>Damaged Artwork</h4>
    <p>If you notice any serious damage to the outside of the package upon delivery or notice damage upon unpacking your artwork please email<br/><br/><a onMouseOver={hoverButton} onMouseOut={leaveButton} style={{color:'black', textDecoration:'none'}} href={"mailto:support@amberfullerdesigner.com"}> support@amberfullerdesigner.com </a><br/><br/> within 48 hours of receiving the artwork with digital images of the damage. If we find that the edition was damaged in transit we will endeavor to replace the edition at no cost to you. </p>
  </Grid>
  </Grid>
  </>
};

export default terms;
