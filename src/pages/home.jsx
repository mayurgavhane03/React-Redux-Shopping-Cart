import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import Products from "../components/products";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (data) {
        setIsLoading(false);
        setProducts(data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);


 

  return (
    <div>
      <h1 className="ml-[100px] font-weight ">Home</h1>
      {isloading ? (
        <div className="min-h-screen w-full flex justify-center items-center ">
          <Circles type="Bars" color="#00BFFF" height={120} width={120} />;
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5  lg:grid-cols-4 max-w-6xl mx-auto ">
          {products &&
            products.length > 0 &&
            products.map((productItem) => (
              <Products key={productItem.id} product={productItem} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
