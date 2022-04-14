import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';
import useStyles from './styles';

const AddressForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data, e) => {
    test({ ...data, shippingCountry, shippingSubdivision, shippingOption })
  }

  const onError = (errors, e) => console.log(errors, e);

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  });

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);


  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid container className={classes.AddressForm} >

          <Grid item xs={5} sm={5} md={4} lg={3}>
            <span className={classes.inputFormatText}>First Name</span><br/>
            <input {...register("firstName")}  className={classes.inputFormatText} label="First name" />
          </Grid>
          <Grid item xs={5} sm={5} md={4} lg={3}>
            <span className={classes.inputFormatText}>Last Name</span><br/>
            <input {...register("lastName")} className={classes.inputFormatText} label="Last name" />
          </Grid>
            <div style={{height:'20px', width:'100%'}}></div>
            <Grid xs={9} sm={8} md={4} lg={4} >
          <span className={classes.inputFormatText}>Email</span><br/>
            <input {...register("email")} style={{width:'100%'}} className={classes.inputFormatText} label="email" />
          </Grid>
          <Grid xs={6}>
          </Grid>
            <div style={{height:'20px', width:'100%'}}></div>
          <Grid xs={10} sm={9} md={6} lg={5}>
            <span className={classes.inputFormatText}>Address</span><br/>
            <input {...register("address1")} style={{width:'100%'}} className={classes.inputFormatText} label="First name" />
          </Grid>
          <div style={{height:'20px', width:'100%'}}></div>
          <Grid xs={6} sm={5} md={4} lg={3} >
          <span className={classes.inputFormatText}>City</span><br/>
          <input {...register("city")} className={classes.inputFormatText}  label="city" />
          </Grid>
          <Grid xs={4} sm={4} md={3} lg={2} >
          <span className={classes.inputFormatText}>Zip</span><br/>
          <input {...register("zip")} className={classes.inputFormatText} label="Zip" />
          </Grid>
          <Grid style={{height:'300px;'}} xs={12}>
           <div ></div>
           </Grid>
          <Grid xs={12}>
            <span className={classes.inputFormatText}>Country</span><br/>
            <Select value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)}>
              {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
              <div style={{height:'200px;'}}></div>
              <Grid item xs={12}>
              <InputLabel>State</InputLabel>
              <Select  style={{height:'200px;'}} value={shippingSubdivision}  onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
              </Grid>
              <Grid item xs={12} sm={12}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
              </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} to="/cart">Back to Cart</Button>
            <Button type="submit" >Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;