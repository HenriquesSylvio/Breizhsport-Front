import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

//context
import CategoryContext from "../../context/category/CategoryContext";

//translation
import { useTranslation } from "react-i18next";

//customhooks
import { useAllCategories } from "../../customhooks/category/useAllCategories";

const Navbar = () => {
  const categoryContext = useContext(CategoryContext);
  const { categories } = categoryContext;

  const navigate = useNavigate();

  const { t } = useTranslation();

  useAllCategories()
  return (
    <>
      {categories && (
        <nav>
          <ul>
            <li key={'seeAll'} onClick={() => navigate(`/`)}>{t('navbar.seeAll')}</li>
            {categories.map((category => {
              return (<li key={category.id} onClick={() => navigate(`/category/${category.id}`)}>{category.title}</li>);
            }))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
