import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily:'Source Sans Pro',
    fontSize:'2rem'
  },
  body: {
    fontFamily:'Source Sans Pro',
    fontSize:'1rem'
  },
  description: {
    fontSize:'14px',
    fontFamily:'Source Sans Pro',
    paddingBottom:'20px'
  },
  price: {
    fontSize:'20px',
    fontWeight:'800',
    fontFamily:'Source Sans Pro'
  }
}));