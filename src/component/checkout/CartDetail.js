import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import OrderContext from '../../context/order/OrderContext';
import { Box, Button } from '@mui/material';

const products = [
    {
        name: 'Product 1',
        desc: 'A nice thing',
        price: '$9.99',
    },
    {
        name: 'Product 2',
        desc: 'Another thing',
        price: '$3.45',
    },
    {
        name: 'Product 3',
        desc: 'Something else',
        price: '$6.51',
    },
    {
        name: 'Product 4',
        desc: 'Best thing of all',
        price: '$14.11',
    },
    { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

export default function CartDetail({ next = null }) {
    const { t } = useTranslation();

    const orderContext = React.useContext(OrderContext);
    const { cart, total_order } = orderContext;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {t('checkout.cartDetail')}
            </Typography>
            <List disablePadding>
                {cart.map((item, id) => (
                    <ListItem key={id} sx={{ py: 1, px: 0 }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    onClick={next}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {t('generic.next')}
                </Button>
            </Box>
        </React.Fragment>
    );
}