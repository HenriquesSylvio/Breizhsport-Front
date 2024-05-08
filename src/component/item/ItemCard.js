import { useNavigate } from "react-router-dom";

//MUI
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

//translation
import { useTranslation } from "react-i18next";

const ItemCard = ({ item }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const image = `../../images/${item.image}`

    return (
        <>
            <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardMedia
                        component="div"
                        sx={{
                            // 16:9
                            pt: "56.25%",
                        }}
                        image={image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography>
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                        size="small"
                        onClick={() => navigate(`/product/${item.id}`)}
                        >
                            {t('item.viewDetail')}
                            </Button>
                        <Button
                            startIcon={<ShoppingCartOutlinedIcon />}
                        >
                            {t('item.addToCart')}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default ItemCard;
