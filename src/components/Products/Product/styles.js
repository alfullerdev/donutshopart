import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>({
    root: {
        maxWidth: '100%',
      },
      media: {
        height: '200',
        paddingTop: '56.25%', // 16:9
        width:'100%'
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      custom: {
        border: "none",
        boxShadow: "none",
        height:"400px",
        backgroundColor:'red',
        width:'400px'
        
      }
}))