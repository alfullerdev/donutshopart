import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
  const handleEmptyCart = () => onEmptyCart();
  const renderEmptyCart = () => (
    <Typography variant="subtitle1" className={classes.emptyCart}>You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );
  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container>
        <Grid item xs={12} md={8}>
          {cart.line_items.map((lineItem) => (
              <Grid item xs={12} key={lineItem.id}>
                <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
              </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={4} >
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
            <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;