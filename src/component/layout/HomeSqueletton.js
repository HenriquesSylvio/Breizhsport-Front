import React, { useState } from "react";

import Navbar from "../layout/Navbar";

import Cart from "../cart/Cart";

import image from "./logo-breizhsports.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { FirstProductImage } from "../FakeData";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomeSqueletton = ({ childrenElement = null }) => {
  const { t } = useTranslation();

  const [cart, setCart] = useState(false);
  const [bgimage, setBgimage] = useState(FirstProductImage);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [draw, setDraw] = useState(false);
  const Displaycart = () => {
    setCart((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <>
      <header>
        <img
          src="./images/icon-menu.svg"
          className="hamburger"
          alt=""
          onClick={() => setDraw(true)}
        />

        <img
          src={image}
          className="logo"
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
            {count > 0 && <p className="alert-count">{count}</p>}
          </div>
          {cart && <Cart bgimage={bgimage} count={count} />}
        </div>
      </header>
      <div className="Main-hero">
        <>{childrenElement}</>
      </div>
    </>
  );
};

export default HomeSqueletton;
