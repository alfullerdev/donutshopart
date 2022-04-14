import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
  const handleEmptyCart = () => onEmptyCart();
  
  const renderEmptyCart = () => (
    <Typography variant="subtitle1" className={classes.emptyCart}>You have no items in your shopping cart
    </Typography>
  );
  if (!cart.line_items) return 'Loading';
  
  const renderCart = () => (
    <>
      <Grid container justifyContent={"center"} style={{paddingBottom:'150px'}}>
        <Grid item justifyContent={"center"} xs={12}>
          <Grid><div className={classes.cartTotal}>Items in cart</div></Grid>
        </Grid>
        <Grid item xs={6} sm={5} lg={4}>
          {cart.line_items.map((lineItem) => (
              <Grid xs={12} item key={lineItem.id}>
                <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
              </Grid>
          ))}
        </Grid>
        <Grid item xs={6}>
          <div className={classes.subtotalButton}>Subtotal: {cart.subtotal.formatted_with_symbol}</div>
          <Button className={classes.emptyButton} variant="outlined" type="button" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} variant="outlined" to="/checkout"  type="button" >Checkout</Button>
          </Grid>
          </Grid>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom></Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;