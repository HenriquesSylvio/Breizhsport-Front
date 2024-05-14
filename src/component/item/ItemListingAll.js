import React, { useContext } from "react";

//MUI
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//child components
import ItemCard from "./ItemCard";

//context
import ProductContext from "../../context/product/ProductContext";

//translation
import { useTranslation } from "react-i18next";

//customhooks
import { useAllProducts } from "../../customhooks/product/useAllProducts";



const ItemListingAll = () => {

  const productContext = useContext(ProductContext);
  const { products } = productContext;

  const { t } = useTranslation();

  useAllProducts()

  return (
    <>
      {products && (

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {t('item.allProducts')}
              </Typography>
            </Container>
          </Box>

          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {products.map((item) => (
                  <ItemCard key={item.id} item={item}/>
              ))}
            </Grid>
          </Container>
        </main>
      )}
    </>
  );
};

export default ItemListingAll;
