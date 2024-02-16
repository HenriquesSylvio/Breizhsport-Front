import React, { useContext, useState } from "react";
import { RemoveRounded } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AddRounded } from "@mui/icons-material";
import { IconButton, Typography, Button } from "@mui/material";
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

  const countIncrease = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const countDecrease = () => {
    setCount((prevValue) => prevValue - 1);
  };


  const isInCart = product_id
    && cart
    && cart.length
    && cart.filter((item) => item.product !== undefined && item.product.id !== undefined && item.product.id === Number(product_id)).length
    ? true
    : false


  return (
    <>
      {current_product && (
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
            <div>
              <IconButton aria-label="countDecrease" onClick={countDecrease} disabled={isInCart && count === 0 || !isInCart && count === 1}>
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
              onClick={isInCart 
                ? () => modifyCart(current_product.id, count)
                : () => addToCart({ product: current_product, quantity: count })
              }
            >
              {isInCart
                ? t('item.modifyCart')
                : t('item.addToCart')
              }

            </Button>
          </div>
        </article>
      )}
    </>

  );
};

export default ItemInfos;
