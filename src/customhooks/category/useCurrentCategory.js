import { useEffect, useContext } from 'react';

//context 
import CategoryContext from '../../context/category/CategoryContext';

//fake data to delete
import { Categories } from '../../component/FakeData';

export function useCurrentCategory(category_id = null) {

  const categoryContext = useContext(CategoryContext);
  const { getCategoryById, setCurrentCategory, clearCurrentCategory } = categoryContext;

  //provisoire
  const category = Categories.filter((item) => item.id === category_id)[0]; 
   
  useEffect(() => {
    if(category_id > 0){
        //traitement provisoire
        setCurrentCategory(category)

        //futur traitement 
        //getCategoryById(category_id)
    }

    return () => {
        clearCurrentCategory();
    }
    
  }, [category_id]);
}

