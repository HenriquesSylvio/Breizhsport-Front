import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useTranslation } from 'react-i18next';
import CartDetail from './CartDetail';
import OrderContext from '../../context/order/OrderContext';
import { useContext } from 'react';




export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    const orderContext = useContext(OrderContext);
  const { cart } = orderContext;
  

  function getStepContent(step) {
    switch (step) {
        case 0:
            return <CartDetail next={handleNext}/>;
        case 1:
            return <AddressForm next={handleNext} back={handleBack}/>;
        case 2:
            return <PaymentForm next={handleNext} back={handleBack} />;
        case 3:
            return <Review back={handleBack} />;
        default:
            throw new Error('Unknown step');
    }
}

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const { t } = useTranslation();

    const steps = [t('checkout.cartDetail'), t('checkout.shippingAddress'), t('checkout.paymentDetails'), t('checkout.orderConfirmation')];

    return (
        <React.Fragment>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        {t('checkout.checkoutTitle')}
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                {t('checkout.confirmedOrder')}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t('checkout.orderNumber')} #2001539. {t('checkout.resumeByEmail')}
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}                           
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </React.Fragment>
    );
}