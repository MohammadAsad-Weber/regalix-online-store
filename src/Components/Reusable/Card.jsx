import React from "react";
import { useDispatch } from "react-redux";
import { toggleWishlist } from "../../Slices/wishlistSlice";
import { toggleIsWish } from "../../Slices/feedSlice";
import { addToCart } from "../../Slices/cartSlice";

function Card(props) {
  const dispatch = useDispatch();

  return (
    <div className="group p-5 relative flex flex-col justify-between gap-2.5 transition-transform duration-300 bg-white shadow-[0_0_10px_rgba(0,0,0,0.25)] hover:scale-95">
      {/* WishList Button */}
      <button
        onClick={() => {
          dispatch(toggleWishlist(props.object));
          dispatch(toggleIsWish(props.object));
        }}
        className="cursor-pointer absolute z-1 top-2.5 right-2.5 p-2 px-3 bg-white rounded-full shadow-[0_0_5px_rgba(0,0,0,0.5)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        {props.isWish ? (
          <i className="fa-solid fa-heart text-rose-500"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </button>
      {/* Item Image */}
      <img
        className="aspect-square max-w-50 w-full object-contain transition-transform duration-300 group-hover:scale-110"
        src={props.image}
        alt=""
      />
      {/* Item Heading */}
      <h3 className="uppercase font-['Marcellus',_'serif']">
        {props.title.length > 20
          ? props.title.substring(0, 20) + "..."
          : props.title}
      </h3>
      {/* Item Price with Add to Cart Button */}
      <div className="max-h-7 h-full min-h-7 overflow-y-hidden">
        <div className="h-full transition-transform duration-500 group-hover:-translate-y-7">
          {/* Item Price */}
          <p className="text-xl">
            {props.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          {/* Add to cart Button */}
          <button
            onClick={() => dispatch(addToCart(props.object))}
            className="cursor-pointer uppercase"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
