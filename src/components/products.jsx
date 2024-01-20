import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

const Products = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = () => {
    console.log('remove')
    dispatch(removeFromCart(product.id));
  };

  const { cart } = useSelector((state) => state);

  return (
    <div className="group flex flex-col items-center border-2 border-blue-500 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
      <div className="flex flex-col items-center h-[180px]">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover h-full"
        />
        <div className="px-6 py-4 text-center flex-grow">
          <h1 className="font-bold text-xl mb-2 line-clamp-2">
            {product.title}
          </h1>
          <p className="text-gray-700 text-base">
            Price: ${product.price.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() =>
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart()
              : handleAddToCart()
          }
          className="bg-red-500 h-20 w-[150px] rounded-lg mt-auto"
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Products;
