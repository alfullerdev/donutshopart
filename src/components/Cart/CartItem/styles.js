import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
  
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  custom: {
    border: "none",
    boxShadow: "none"
  },
  description: {
    fontSize:'14px',
    fontFamily:'Source Sans Pro',
    paddingBottom:'20px'
  },
}));