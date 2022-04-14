import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '150px',
    textAlign:'center',
    padding:'10px',
    fontFamily:'Source Sans Pro',
    fontSize:'45px',
  },
  emptyButton: {
    minWidth: '100%',
    marginBottom: '15px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
      fontSize:'10px'
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px'
      
    },
  },
  checkoutButton: {
    minWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
      fontSize:'10px'
    },
  },
  cartTotal:{
    fontFamily:'Source Sans Pro',
    fontSize:'15px',
    color:'white',
    padding:'10px',
    backgroundColor:'black',
    fontWeight:'800'
  }, 
  subtotalButton:{
    fontFamily:'Source Sans Pro',
    fontSize:'25px',
    padding:'10px',
    margin:'0px',
    marginBottom:'30px',
    color:'white',
    backgroundColor:'black',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
      fontSize:'14px'
    },

  },
  link: {
    textDecoration: 'none',
  },
  emptyCart:{
    textAlign:'center',
    color:'black',
    textDecoration: 'none'
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));