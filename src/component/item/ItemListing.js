import React, { useContext } from "react";
import { useParams } from "react-router-dom";

//MUI
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//child components
import ItemCard from "./ItemCard";

//context
import CategoryContext from "../../context/category/CategoryContext";

//customhooks
import { useCurrentCategory } from "../../customhooks/category/useCurrentCategory";

const ItemListing = () => {

  const categoryContext = useContext(CategoryContext);
  const { current_category } = categoryContext;

  let { category_id } = useParams()

  useCurrentCategory(category_id && Number(category_id))

  return (
    <>
      {current_category && (
 
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
                {current_category.title}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                {current_category.description}
              </Typography>
            </Container>
          </Box>

          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {current_category.items && current_category.items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </Grid>
          </Container>
        </main>
      )}
    </>
  );
};

export default ItemListing;
