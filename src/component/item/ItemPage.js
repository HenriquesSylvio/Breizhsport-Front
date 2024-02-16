import React, { useState } from "react";
import ItemPhotoGallery from "./ItemPhotoGallery";
import ItemInfos from "./ItemInfos";
import { FirstProductImage } from "../FakeData";

const ItemPage = () => {
    const [open, setOpen] = useState(false);
    const [bgimage, setBgimage] = useState(FirstProductImage);
    const handleOpen = () => setOpen(true);
    const [cart, setCart] = useState(false);
    const [count, setCount] = useState(0);

    const Displaycart = () => {
      setCart((prev) => !prev);
    };

  return (
    <section className="flexHero">
      <ItemPhotoGallery
        bgimage={bgimage}
        handleOpen={handleOpen}
        setBgimage={(word) => setBgimage(word)}
      />
      <ItemInfos
        Displaycart={Displaycart}
      />
    </section>
  );
};

export default ItemPage;
