import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 0,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    fontFamily:'Source Sans Pro',
    fontSize:'15px',
    padding:'5px'
  },
  regularText: {
    color:'black',
    alignItems: 'center',
    textDecoration: 'none',
    fontFamily:'Source Sans Pro',
    fontSize:'15px',
    padding:'0',
    margin:'0',
  },
  boldText: {
    alignItems: 'center',
    textDecoration: 'none',
    fontFamily:'Source Sans Pro',
    fontSize:'25px',
    fontWeight:'100',
    padding:'0',
    margin:0
  }
}));