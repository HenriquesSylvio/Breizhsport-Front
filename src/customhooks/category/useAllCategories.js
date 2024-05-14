import { useEffect, useContext } from 'react';

//context
import CategoryContext from '../../context/category/CategoryContext';

//fake data to delete
import { Categories } from '../../component/FakeData';

export function useAllCategories() {

  const categoryContext = useContext(CategoryContext);
  const { getAllCategories, setCategories, clearCategories } = categoryContext;

  //provisoire
  const categories = Categories;

  useEffect(() => {
    //traitement provisoire
    setCategories(categories)

    //futur traitement 
    //getAllCategories()

    return () => {  
      clearCategories();
    }

  }, []);
}

