import React from 'react'
import { Grid } from '@material-ui/core';
const Gallery = (gallery, changePhotoImg, props) => {
    console.log(props);
    const galleryAll = gallery.gallery;
  return (
      <>
    { 
        galleryAll.map((x, index) => (
            <Grid key={index}  item xs={4} ><img onClick={() => changePhotoImg}  alt='1' src={x.url} style={{width:'100px'}} /></Grid>
          ))
    }
    </>  
  )
}

export default Gallery;