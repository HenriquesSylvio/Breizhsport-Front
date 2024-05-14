import { useEffect, useContext } from 'react';

//context
import ProductContext from '../../context/product/ProductContext';

//fake data to delete
import { Items } from '../../component/FakeData';

export function useAllProducts() {

  const productContext = useContext(ProductContext);
  const { getAllProducts, setProducts, clearProducts } = productContext;

  //provisoire
  const items = Items;

  useEffect(() => {
    //traitement provisoire
    setProducts(items)

    //futur traitement 
    //getAllProducts()

    return () => {  
      clearProducts();
    }

  }, []);
}

