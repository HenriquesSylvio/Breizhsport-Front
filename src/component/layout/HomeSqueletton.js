import React, { useState } from "react";

import Navbar from "../layout/Navbar";

import Cart from "../cart/Cart";

import image from "./logo-breizhsports.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomeSqueletton = ({ childrenElement = null }) => {
  const { t } = useTranslation();
  const [cart, setCart] = useState(false);
  const Displaycart = () => {
    setCart((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <>
      <header>

        <img
          src={image}
          className="logo"
          alt={`logo breizhsports`}
          height={150}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        <Navbar />

        <div className="avater-cart">
          <Button variant="contained" style={{top: -12}} onClick={() => {navigate("/follow-order")}} sx={{ mt: 3, ml: 1 }}>
            {t("navbar.followOrder")}
          </Button>
          <div className="avater-pos">
            <ShoppingCartIcon
              onClick={Displaycart}
              fontSize="large"
              style={{ color: "#dea142", cursor: "pointer" }}
            />
          </div>
          {cart && <Cart/>}
        </div>
      </header>
      <div className="Main-hero">
        <>{childrenElement}</>
      </div>
    </>
  );
};

export default HomeSqueletton;
