import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  footer_styles: {
    color: "black", 
    position: "fixed", 
    bottom: 0, 
    height:'80px', 
    width:"100%", 
    border:'black',
    paddingTop:'40px',
    backgroundColor:'white',
    [theme.breakpoints.down('xs')]: {
      paddingTop:'20px',
      height:'60px',
      
    },       
  },
  footer_text: {
    textDecoration: 'none',
    fontFamily:'Source Sans Pro',
    fontSize:'15px',
    padding:'5px',
    color:'black',

    [theme.breakpoints.down('xs')]: {
      fontSize:'12px'

    },

  }
}));