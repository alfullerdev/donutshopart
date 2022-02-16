import React from "react";
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.toolbar} />
            <Grid justifyContent={"center"} style={{padding:"50px"}} container>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={6} lg={4}>
                        <Product product={product}  onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        
        </main> 
    );
};

export default Products;