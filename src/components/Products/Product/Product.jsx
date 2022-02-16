import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    let   image   = '';

    const handleAddToCart = () => onAddToCart(product.id, 1);

    if(product.image) {
          image = product.image.url;
    }
    //product.image.url ?product.image.url : '';
    return (
            <Link 
                component={Link}  
                to={`${product.id}`}
                key={product.id}                
            >
                <img src={image} style={{width:'100%'}} />
            </Link>

    );
}

export default Product;