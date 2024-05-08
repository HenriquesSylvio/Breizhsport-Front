import React, { useState } from "react";

import Navbar from "../layout/Navbar";

import Cart from "../cart/Cart";

import image from "./logo-breizhsports.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { FirstProductImage } from "../FakeData";

const HomeSqueletton = ({childrenElement = null}) => {

    const [cart, setCart] = useState(false);
    const [bgimage, setBgimage] = useState(FirstProductImage);
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const [draw, setDraw] = useState(false);
    const Displaycart = () => {
        setCart((prev) => !prev);
    };


    return (
        <>
            <header>
                <img
                    src="./images/icon-menu.svg"
                    className="hamburger"
                    alt=""
                    onClick={() => setDraw(true)}
                />

                <img src={image} className="logo" height={150} />

                <Navbar />

                <div className="avater-cart">
                    <div className="avater-pos">
                        <ShoppingCartIcon onClick={Displaycart} fontSize="large" style={{color:"#dea142", cursor: "pointer"}}/>
                        {count > 0 && <p className="alert-count">{count}</p>}
                    </div>

                    <img
                        src="./images/image-avatar.png"
                        alt="avatar"
                        className="avatar"
                    />
                    {cart && <Cart bgimage={bgimage} count={count} />}
                </div>
            </header>
            <div className="Main-hero">
               <>
               {childrenElement}
               </>
            </div>
        </>
    );
};

export default HomeSqueletton;
