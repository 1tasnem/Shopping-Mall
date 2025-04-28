import { useEffect, useState } from 'react';
import './AllProducts.css';
import SingleProduct from '../singleProduct/singleProduct';

const AllProducts = ({handleSelectedProduct}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./Fake.json")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then(data => {
        setProducts(data || []); 
      })
      .catch(error => {
        console.error(error);
        setProducts([]);
      });
  }, []);

  return (
    <div>
    <h1 className='font-bold text-2xl text-center my-4'>AllProducts</h1>
      {
        products.map((p) => (
          <SingleProduct handleSelectedProduct={handleSelectedProduct}
           key={p.id} product={p} ></SingleProduct>
        ))
      }
    </div>
  );
};

export default AllProducts;
