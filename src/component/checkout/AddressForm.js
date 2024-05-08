import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';
import OrderContext from '../../context/order/OrderContext';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useContext } from 'react';

export default function AddressForm({ next = null, back = null }) {
    const { t } = useTranslation();

    const orderContext = useContext(OrderContext);
    const { setCurrentOrderAddress } = orderContext;

    const emptyForm = {
        firstname: "",
        lastname: "",
        address1: "",
        address2: "",
        city: "",
        department: "",
        zipcode: "",
        country: "",
    }

    const [formAddress, setFormAddress] = useState(emptyForm)

    const onChange = (event) => {
        console.log(event)
        //setFormAddress(...formAddress, [event])
    }

    const {
        firstname,
        lastname,
        address1,
        address2,
        city,
        department,
        zipcode,
        country
    } = formAddress

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {t('checkout.shippingAddress')}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label={t('checkout.firstName')}
                        value={firstname}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label={t('checkout.lastName')}
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={lastname}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label={t('checkout.address')}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        value={address1}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label={t('checkout.address')}
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        value={address2}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label={t('checkout.city')}
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        value={city}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="department"
                        name="department"
                        label={t('checkout.region')}
                        fullWidth
                        variant="standard"
                        value={department}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zipcode"
                        name="zipcode"
                        label={t('checkout.zipCode')}
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        value={zipcode}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label={t('checkout.country')}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        value={country}
                        onChange={onChange()}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label={t('checkout.useAddressForPayment')}
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                <Button onClick={back} sx={{ mt: 3, ml: 1 }}>
                    {t('generic.back')}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setCurrentOrderAddress(formAddress)
                        next()
                        }}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {t('generic.next')}
                </Button>
            </Box>
        </React.Fragment>
    );
}