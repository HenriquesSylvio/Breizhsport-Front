import React, { useContext, useState } from "react";
import { RemoveRounded } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AddRounded } from "@mui/icons-material";
import { IconButton, Typography, Button, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProductContext from "../../context/product/ProductContext";
import { useCurrentProduct } from "../../customhooks/product/useCurrentProduct";
import { useParams } from "react-router-dom";
import OrderContext from "../../context/order/OrderContext";



//Voir le reducer pour la modification du panier

const ItemInfos = () => {

  const productContext = useContext(ProductContext);
  const { current_product } = productContext;

  const orderContext = useContext(OrderContext);
  const { cart, addToCart, modifyCart } = orderContext;

  const { t } = useTranslation();

  let { product_id } = useParams()

  useCurrentProduct(product_id && Number(product_id))

  const [count, setCount] = useState(product_id
    && cart
    && cart.length
    && cart.filter((item) => item.product !== undefined && item.product.id !== undefined && item.product.id === Number(product_id)).length
    ? cart.filter((item) => item.product.id === Number(product_id))[0].quantity
    : 1
  );

  const [selectedSize, setSelectedSize] = useState('')


  const countIncrease = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const countDecrease = () => {
    setCount((prevValue) => prevValue - 1);
  };

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const isInCart = product_id
    && cart
    && cart.length
    && cart.filter((item) => item.product !== undefined && item.product.id !== undefined && item.size !== undefined && item.product.id === Number(product_id) && item.size === selectedSize).length
    ? true
    : false


  const image = current_product && current_product.image !== undefined ? require(`../../images/${current_product.image}`) : null

  return (
    <>
      {current_product && (
        <>
          <img
            key={image}
            src={image}
            style={{maxWidth: 400}}
            alt={current_product.title}
          />
          <article className="info">
            <Typography variant="h4">
              {current_product.title}
            </Typography>

            <Typography variant="body1">
              {current_product.description}
            </Typography>

            <div className="price">
              <Typography variant="h5">
                {current_product.price} €
              </Typography>
            </div>
            <div className="cart">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Taille</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedSize}
                  label="Taille"
                  onChange={handleChange}
                >{current_product.availableSizes !== undefined && current_product.availableSizes.map((size,id) =>
                  <MenuItem key={id} value={size}>{size}</MenuItem>
                )}
                </Select>
              </FormControl>
              <div>
                <IconButton aria-label="countDecrease" onClick={countDecrease} disabled={(isInCart && count === 0) || (!isInCart && count === 1)}>
                  <RemoveRounded />
                </IconButton>
                {` ${count} `}
                <IconButton aria-label="countIncrease" onClick={countIncrease}>
                  <AddRounded />
                </IconButton>
              </div>

              <Button
                component="label"
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon />}
                disabled={selectedSize === ''}
                onClick={isInCart
                  ? () => modifyCart(current_product.id, count, selectedSize)
                  : () => addToCart({ product: current_product, quantity: count, size: selectedSize })
                }
              >
                {isInCart
                  ? t('item.modifyCart')
                  : t('item.addToCart')
                }

              </Button>
            </div>

        </article>
          </>

      )}
    </>

  );
};

export default ItemInfos;
