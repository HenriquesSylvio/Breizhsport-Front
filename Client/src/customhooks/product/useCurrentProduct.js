import { useEffect, useContext } from 'react';

//context
import ProductContext from '../../context/product/ProductContext';

//fake data to delete
import { Items } from '../../component/FakeData';

export function useCurrentProduct(product_id = null) {

  const productContext = useContext(ProductContext);
  const { getProductById, setCurrentProduct, clearCurrentProduct } = productContext;

  //provisoire
  const item = Items.filter((item) => item.id === product_id)[0]; 
   
  useEffect(() => {
    if(product_id > 0){
        //traitement provisoire
        setCurrentProduct(item)

        //futur traitement 
        //getProductById(product_id)
    }

    return () => {
        clearCurrentProduct();
    }
    
  }, [product_id]);
}

