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
    const { setCurrentOrderAddress, current_order } = orderContext;

    const [form, setForm] = useState(current_order && current_order.current_order_address)
    const {
        firstname,
        lastname,
        email,
        address1,
        address2,
        city,
        department,
        zipcode,
        country
    } = form

    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);

    const onChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {t('checkout.shippingAddress')}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label={t('checkout.firstName')}
                        autoComplete="firstname"
                        type="text"
                        variant="standard"
                        name="firstname"
                        value={firstname}
                        required
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastname"
                        type='text'
                        name="lastname"
                        label={t('checkout.lastName')}
                        fullWidth
                        autoComplete="lastname"
                        variant="standard"
                        value={lastname}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={t('checkout.email')}
                        autoComplete="email"
                        variant="standard"
                        type='email'
                        name="email"
                        fullWidth
                        value={email}
                        required
                        onChange={onChange}
                        error={(email.length > 0 && emailRegex.test(email) === true) || email.length === 0 ? false : true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        type='text'
                        label={t('checkout.address')}
                        fullWidth
                        autoComplete="address1"
                        variant="standard"
                        value={address1}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        type='text'
                        label={t('checkout.address')}
                        fullWidth
                        autoComplete="address2"
                        variant="standard"
                        value={address2}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zipcode"
                        type='text'
                        name="zipcode"
                        label={t('checkout.zipCode')}
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        value={zipcode}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        type='text'
                        label={t('checkout.city')}
                        fullWidth
                        autoComplete="city"
                        variant="standard"
                        value={city}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="department"
                        name="department"
                        type='text'
                        label={t('checkout.region')}
                        fullWidth
                        variant="standard"
                        value={department}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        type='text'
                        label={t('checkout.country')}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        value={country}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                <Button onClick={back} sx={{ mt: 3, ml: 1 }}>
                    {t('generic.back')}
                </Button>
                <Button
                    variant="contained"
                    disabled={!firstname || !lastname || !email || !address1 || !zipcode || !city || !country}
                    onClick={() => {
                        setCurrentOrderAddress(form)
                        next()
                    }}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {t('generic.next')}
                </Button>
            </Box>
        </>
    );
}