import { loading } from "../../lib/Loading";

export const load = async ({fetch}) => {
    try {
      loading.update(state => state = true);
      const res1 = await fetch('https://fakestoreapi.com/products');

      if (!res1.ok) {
          throw new Error(`HTTP error: ${res1.status}`)
        }
         const products = await res1.json();  
         const res2 = await fetch('https://fakestoreapi.com/products/categories');
       
      if (!res2.ok) {
           throw new Error(`HTTP error: ${res2.status}`)
          }
          
          const categories = await res2.json();  
          return {products, categories}
      } catch (error) {
          return { error: 'Unable to fetch products' } 
      }
  }