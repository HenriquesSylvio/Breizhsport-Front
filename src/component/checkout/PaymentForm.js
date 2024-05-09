import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import OrderContext from '../../context/order/OrderContext';

export default function PaymentForm({ next = null, back = null }) {
    const { t } = useTranslation();

    
    const orderContext = useContext(OrderContext);
    const { setCurrentOrderPayment, current_order } = orderContext;

    const [form, setForm] = useState(current_order && current_order.current_order_payment)
    const {
        cardDate,
        cardNumber,
        cardPincode,
        cardTitulaire,
    } = form

    const onChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {t('checkout.paymentMethod')}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label={t('checkout.nameOnCard')}
                        autoComplete="cardTitulaire"
                        variant="standard"
                        name="cardTitulaire"
                        value={cardTitulaire}
                        required
                        onChange={onChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label={t('checkout.cardNumber')}
                        fullWidth
                        autoComplete="cardNumber"
                        name="cardNumber"
                        variant="standard"
                        value={cardNumber}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardDate"
                        label={t('checkout.expiryDate')}
                        fullWidth
                        autoComplete="cardDate"
                        name="cardDate"
                        variant="standard"
                        value={cardDate}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardPincode"
                        label={t('checkout.CVV')}
                        fullWidth
                        autoComplete="cardPincode"
                        name="cardPincode"
                        variant="standard"
                        value={cardPincode}
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
                    onClick={() => {
                        setCurrentOrderPayment(form)
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