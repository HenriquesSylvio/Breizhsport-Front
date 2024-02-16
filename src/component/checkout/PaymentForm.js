import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';

export default function PaymentForm() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {t('checkout.paymentMethod')}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label={t('checkout.nameOnCard')}
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label={t('checkout.cardNumber')}
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label={t('checkout.expiryDate')}
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label={t('checkout.CVV')}
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}