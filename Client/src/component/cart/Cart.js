import React, { useContext } from "react";

//context
import OrderContext from "../../context/order/OrderContext";

//translation
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const orderContext = useContext(OrderContext);
  const { cart, total_order } = orderContext;

  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="cart-card">
      <h3>{t("cart.cartTitle")}</h3>
      <hr />
      <div>
        {cart.length > 0 ? (
          <div className="ctcheck">
            {cart.map((cartItem, id) => {
              return (
                <>
                  <div key={id} className="ctinfo-flex">
                    <img
                      src={require(`../../images/${cartItem.product.image}`)}
                      key={id}
                      alt="bg-img"
                    />
                    <div>
                      <p>{cartItem.product.title}</p>
                      <p>Taille : {cartItem.size}</p>
                      <p>{`Quantité : ${cartItem.quantity} `}</p>
                    </div>
                  </div>
                </>
              );
            })}
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>
              {`Total : ${total_order} € `}
            </p>
            <button onClick={() => navigate(`/checkout/0`)}>
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
