import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img
          src={cartItem?.image}
          className="h-28 rounded-lg"
          alt={cartItem?.title}
        />
        <div className="ml-6 self-start space-y-2">
          <h1 className="text-xl text-white font-bold line-clamp-1">{cartItem?.title}</h1>
          <p className="text-white font-extrabold">${cartItem?.price.toFixed(2)}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-700 text-white border-2 rounded-lg font-bold p-2"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
