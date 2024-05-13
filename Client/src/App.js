import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/Theme";

//Context
import OrderState from "./context/order/OrderState";
import UserState from "./context/user/UserState";
import ProductState from "./context/product/ProductState";
import CategoryState from "./context/category/CategoryState";

//squeletton layout
import HomeSqueletton from "./component/layout/HomeSqueletton";

//Pages content
import ItemListing from "./component/item/ItemListing";
import ItemPage from "./component/item/ItemPage";
import ItemListingAll from "./component/item/ItemListingAll";
import Checkout from "./component/checkout/Checkout";
import FollowOrder from "./component/checkout/FollowOrder";

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CategoryState>
        <OrderState>
          <ProductState>
            <UserState>
              <ScrollReveal
                ref={childRef}
                children={() => (
                  <Routes>
                    <Route path="/" element={<HomeSqueletton childrenElement={<ItemListingAll />} />} />
                    <Route path="/category/:category_id" element={<HomeSqueletton childrenElement={<ItemListing />} />} />
                    <Route path="/product/:product_id" element={<HomeSqueletton childrenElement={<ItemPage />} />} />
                    <Route path="/checkout/:step" element={<HomeSqueletton childrenElement={<Checkout />} />} />
                    <Route path="/follow-order" element={<HomeSqueletton childrenElement={<FollowOrder/>} />} />
                  </Routes>
                )} />
            </UserState>
          </ProductState>
        </OrderState>
      </CategoryState>
    </ThemeProvider>
  );
};

export default App;
