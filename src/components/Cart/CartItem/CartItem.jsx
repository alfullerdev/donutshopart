import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  const handleUpdateCartQty  = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
 
  console.log(item);
  return (
    <>
    <Card square={true} className={classes.custom}>
      <CardMedia component="img" image={item.image.url}  alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography >{item.name}</Typography>
        <Typography >{item.line_total.formatted_with_symbol}</Typography>
        <div className={classes.description} style={{textAlign:'justify'}} dangerouslySetInnerHTML={{ __html:item.description}} ></div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button type="button"  onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
    </>
  );
};

export default CartItem;