import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import OrderContext from '../../context/order/OrderContext';
import { Box, Button } from '@mui/material';

export default function Review({ back = null, next = null }) {
    const { t } = useTranslation();
    const orderContext = useContext(OrderContext);
    const { cart, total_order, current_order, setCurrentOrderItems, saveOrder, clearCurrentOrder, clearCart } = orderContext;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {t('checkout.cartDetail')}
            </Typography>
            <List disablePadding>
                {cart.map((item, id) => (
                    <ListItem key={item.product.title} sx={{ py: 1, px: 0 }}>
                        <img src={require(`../../images/${item.product.image}`)} key={id} style={{ maxWidth: 150 }} />
                        <ListItemText primary={item.product.title} secondary={`Taille : ${item.size}`} style={{ marginLeft: 20 }} />
                        <Typography variant="body2">{item.quantity}x{item.product.price}€</Typography>
                    </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {total_order}€
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        {t('checkout.shipping')}
                    </Typography>
                    {current_order && current_order.current_order_address !== undefined && (
                        <>
                            <Typography gutterBottom>{current_order.current_order_address.lastname} {current_order.current_order_address.firstname}</Typography>
                            <Typography gutterBottom>{current_order.current_order_address.address1}</Typography>
                            <Typography gutterBottom>{current_order.current_order_address.address2}</Typography>
                            <Typography gutterBottom>{current_order.current_order_address.zipcode} {current_order.current_order_address.city}</Typography>
                            <Typography gutterBottom>{current_order.current_order_address.department} {current_order.current_order_address.country}</Typography>
                        </>
                    )}
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        {t('checkout.payment')}
                    </Typography>
                    <Grid container>
                        <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{t('checkout.nameOnCard')}</Typography>
                            </Grid>
                            {current_order && current_order.current_order_address !== undefined && (
                                <>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{current_order.current_order_payment.cardTitulaire}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{t('checkout.cardNumber')}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{current_order.current_order_payment.cardNumber}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{t('checkout.expiryDate')}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{current_order.current_order_payment.cardDate}</Typography>
                                    </Grid>
                                </>
                            )}
                        </React.Fragment>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={back} sx={{ mt: 3, ml: 1 }}>
                    {t('generic.back')}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setCurrentOrderItems(cart)
                        saveOrder(current_order)                        
                        next()
                    }}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {t('checkout.confirmOrder')}
                </Button>
            </Box>
        </React.Fragment>
    );
}