import React, {useState, useEffect} from 'react'

import { alpha } from '@mui/material/styles';
import { Grid } from '@material-ui/core';
import Magnifier from "react-magnifier";

import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useParams } from "react-router-dom";
import useStyles from './styles';
import { commerce } from '../../lib/commerce';

const Item = ({onAddToCart, props}) => {
    const classes = useStyles();
    let params    = useParams();
    let productID = params.productID;
    let name      = '';
    let images    = [];

    const [size, setSize]            = React.useState({});
    const [price, setPrice]          = React.useState('');
    const [selected, setSelected]    = React.useState('');
    const [imgSrc, setImgSrc]        = React.useState('');
    const [variants, setVariants]    = React.useState(false);
    const [hasGallery,setHasGallery] = React.useState();
    const [galleryVariants,setGalleryVariants] = React.useState([]);
    const [isNFT,setIsNFT]           = React.useState(true);
    const [products, setProducts]    = useState([]);
    
    const fetchProducts = async () => {
      const { data } = await commerce.products.list({query:productID});
      const item = data[0]
      setProducts(item);
      setImgSrc(item.image.url);
      setVariants(item.variant_groups.length > 0);
      setPrice(item.price.formatted_with_symbol);
      setIsNFT(item.categories.length > 0);
      setHasGallery(item.assets.length > 1);

      if(item.assets.length > 1) {
        setGalleryVariants(item.assets);
      }

      if(item.variant_groups.length > 0) {
        setSelected(item.variant_groups[0].options[0].id);
      }
    };
 
    const handleAddToCart = () => onAddToCart(products.id,1, size);

    useEffect(() => {
      fetchProducts();
    }, []);

    function changePhoto(src){
      setImgSrc(src.target.src);
    }

    function handleChange(e:SelectChangeEvent) {
      let variant  = {};
      let key      = products.variant_groups[0].id;
      variant[key] = e.target.value;
      setSize(variant);
      setSelected(e.target.value);
      let options = products.variant_groups[0].options;
      options.map((option) => {
          if(option.id == e.target.value) {
            setPrice(option.price.formatted_with_symbol);
        }
      });
    }
    
    return (
            <>
             <Grid
                container
                spacing={0}
                align="center"
                justify="center"
                direction="row"
                style={{ height:'100%', paddingTop:'150px', paddingBottom:'150px' }}
              >
              <Grid item xs={1}></Grid>
              <Grid item xs={12} sm={8} md={6}>
                  {imgSrc &&(
                    <Magnifier src={imgSrc} style={{width:'100%'}} />
                  )}
                  <Grid container justifyContent={"center"} style={{width:'20px;'}}>
                    { hasGallery && (
                        galleryVariants.map((x, index) => (
                          <img key={index} onClick={changePhoto} alt='1' src={x.url} style={{width:'75px'}} />
                        ))
                      )
                    }
                  </Grid>
                </Grid>
                <Grid item xs={12} md={3} style={{padding:'50px'}}>
                  <p className={classes.regularText} style={{textAlign:'justify'}}>
                      <span className={classes.title}>{products.name}</span><br/>
                  </p>
                  <div className={classes.description} style={{textAlign:'justify'}} dangerouslySetInnerHTML={{ __html:products.description}} ></div>
                  { variants &&(
                    <Box sx={{minWidth:'20'}}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Size</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Size"
                        value={selected}
                        onChange={handleChange} >
                        { products.variant_groups[0].options.map((option) => {
                          return (<MenuItem value={option.id} key={option.id} >{option.name}</MenuItem>);
                        })
                        }
                      </Select>
                    </FormControl>
                </Box>
                )}
                <p className={classes.regularText} style={{textAlign:'justify'}}>
                  <span className={classes.price}>{price}</span><br/>
                </p>
                <p className={classes.body} onClick={handleAddToCart} style={{textAlign:'justify'}} >ADD TO CART
                  <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                  <AddShoppingCart />
                  </IconButton>
                </p>
                
          
                </Grid>
              <Grid item xs={12} md={3} style={{padding:'20px'}}>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>
          </>
    );
};

export default Item;