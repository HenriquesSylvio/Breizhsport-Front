import React, { useContext, useState } from "react";

//context
import OrderContext from '../../context/order/OrderContext';

//translation
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Cart = ({ bgimage, count }) => {

  const orderContext = useContext(OrderContext);
  const { cart } = orderContext;

  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="cart-card">
      <h3>{t("cart.cartTitle")}</h3>
      <hr />
      <div>
        {cart.length > 0 ? (
          <div className="ctcheck">
            {cart.map((cartItem) => {
              return (
                <>
                  <div className="ctinfo-flex">
                    {bgimage.map(({ image, id }) => (
                      <img src={image} key={id} alt="bg-img" />
                    ))}
                    <div>
                      <p>{cartItem.product.title}</p>
                      <p>
                        {`${cartItem.product.price}€ x ${cartItem.quantity}   `}<span>{cartItem.product.price * cartItem.quantity}</span> €
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
            <button
              onClick={() => navigate(`/checkout`)}
            >
              {t("cart.goCheckout")}
            </button>
          </div>
        ) : (
          <p className="p-empty">{t("cart.emptyCart")}</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
