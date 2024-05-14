import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import { useTranslation } from 'react-i18next';
import CartDetail from './CartDetail';
import OrderContext from '../../context/order/OrderContext';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function Checkout() {
    let { step } = useParams()
    const [activeStep, setActiveStep] = React.useState(step && step !== undefined ? Number(step) : 0);

    const orderContext = useContext(OrderContext);
    const { last_order_number, setCurrentOrderItems, saveOrder, current_order, cart } = orderContext;

    const navigate = useNavigate();


    React.useEffect(() => {
      if(activeStep === 3){
        setCurrentOrderItems(cart);
        saveOrder(current_order);
      }
    }, [activeStep])
    
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <CartDetail next={handleNext} />;
            case 1:
                return <AddressForm next={handleNext} back={handleBack} />;
            case 2:
                return <Review back={handleBack} next={handleNext} />;
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
    const retry = () => {
        navigate("/checkout/0")
        setActiveStep(0);
    };

    const goHome = () => {
        navigate("/")
    }

    const { t } = useTranslation();

    const steps = [t('checkout.cartDetail'), t('checkout.shippingAddress'), t('checkout.orderConfirmation')];

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
                                {t('checkout.orderNumber')} {last_order_number? last_order_number : ""}. {t('checkout.resumeByEmail')}
                            </Typography>
                            <Button onClick={goHome} sx={{ mt: 3, ml: 1 }}>
                                {t('checkout.goBackHome')}
                            </Button>
                        </React.Fragment>
                    ) : activeStep === steps.length+1 ?(
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                {t('checkout.failOrder')}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t('checkout.failOrderText')}
                            </Typography>
                            <Button onClick={retry} sx={{ mt: 3, ml: 1 }}>
                                {t('checkout.retry')}
                            </Button>
                            <Button onClick={goHome} sx={{ mt: 3, ml: 1 }}>
                                {t('checkout.goBackHome')}
                            </Button>
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