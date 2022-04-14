import React, {useState, useEffect} from 'react'
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";

import { Navbar, Footer, Products, Cart, Checkout, Item, About, Terms, Contact, Policy} from './components';
import { BottomNavigation } from '@mui/material';
import { commerce } from './lib/commerce';

const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
  
    const fetchProducts = async () => {



      const { data } = await commerce.products.list({
        category_slug: ['live'],
      });

      

      setProducts(data);
    };
  
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
  
    const handleAddToCart = async (productId, quantity, variant) => {
      const item = await commerce.cart.add(productId, quantity, variant);
  
      setCart(item.cart);
    };
  
    const handleUpdateCartQty = async (lineItemId, quantity) => {
      const response = await commerce.cart.update(lineItemId, { quantity });
  
      setCart(response.cart);
    };
  
    const handleRemoveFromCart = async (lineItemId) => {
      const response = await commerce.cart.remove(lineItemId);
  
      setCart(response.cart);
    };
  
    const handleEmptyCart = async () => {
      const response = await commerce.cart.empty();
  
      setCart(response.cart);
    };
  
    const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();
  
      setCart(newCart);
    };
  
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
  
        setOrder(incomingOrder);
        refreshCart();
        
      } catch (error) {
        setErrorMessage(error.data.error.message);
      }
    };
  
    useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);
  
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
      <Router>
        <div style={{ display: 'flex' }}>
            <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
            <Routes>
              <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />} />
              <Route exact path=":productID" element={<Item onAddToCart={handleAddToCart} />} />
              <Route exact path="/about"     element={<About />}   />
              <Route exact path="/terms"     element={<Terms />}   />
              <Route exact path="/policy"    element={<Policy />}   />
              <Route exact path="/contact"   element={<Contact />} />
              <Route 
                exact path="/cart" 
                element={
                  <Cart 
                    cart={cart} 
                    onUpdateCartQty={handleUpdateCartQty} 
                    onRemoveFromCart={handleRemoveFromCart} 
                    onEmptyCart={handleEmptyCart} 
                  />}
              />
              <Route exact path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
            </Routes>
            <Outlet />
            <Footer/>
        </div>
      </Router>
    )
}

export default App;        
 