import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Slices/cartSlice"; // Action Creators

// Component
import Footer from "./Reusable/Footer";

// Sub-Components
function CartItem(props) {
  const dispatch = useDispatch();
  const totalPrice = props.price * props.object.quantity;

  return (
    <div className="max-w-screen-md w-full p-3 flex flex-col items-center justify-center gap-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)] min-[680px]:flex-row min-[680px]:justify-between">
      {/* LEFT/UPPER Container */}
      <div className="w-full flex items-center justify-between gap-2.5 min-[680px]:w-[65%]">
        {/* Image & Detail */}
        <div className="w-7/10 flex items-start gap-2.5">
          <img
            className="aspect-square max-w-30 w-2/5 min-w-20 object-contain"
            src={props.image}
            alt=""
          />
          <div className="mt-1.5">
            <h2 className="capitalize font-medium min-[540px]:text-lg">
              {props.category}
            </h2>
            <p className="text-xs text-gray-500 min-[540px]:text-sm">
              {props.title}
            </p>
          </div>
        </div>
        {/* Quantity */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => dispatch(decreaseQuantity(props.object))}
            disabled={props.object.quantity < 1 + 1}
            className="h-7.5 w-7.5 text-lg text-white font-medium flex items-center justify-center bg-[#252525] rounded-md cursor-pointer disabled:bg-[#555] disabled:cursor-not-allowed"
          >
            -
          </button>
          <p>{props.object.quantity}</p>
          <button
            onClick={() => dispatch(increaseQuantity(props.object))}
            disabled={props.object.quantity > 7 + 1}
            className="h-7.5 w-7.5 text-lg text-white font-medium flex items-center justify-center bg-[#252525] rounded-md cursor-pointer disabled:bg-[#555] disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </div>
      {/* RIGHT/LOWER Container */}
      <div className="w-full flex items-center justify-between min-[445px]:px-[3%] min-[680px]:w-[35%] min-[680px]:flex-row-reverse">
        <button
          onClick={() => {
            dispatch(removeFromCart(props.object));
          }}
          className="cursor-pointer p-1.5 px-5 uppercase text-xs font-medium text-white bg-[#252525] rounded-lg"
        >
          Remove
        </button>
        <h4 className="text-lg font-semibold">
          {totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h4>
      </div>
    </div>
  );
}

function Cart() {
  const array = useSelector((state) => state.cart); // Data
  const total = useRef(0); // Total Price

  // Calculate the Total Amount if array isn't empty
  if (array.length !== 0) {
    const amount = array
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr);

    total.current = amount;
  }

  return (
    <>
      <header className="h-20 w-full px-7.5 relative z-10 flex items-center justify-center shadow-md">
        <div className="h-full max-w-screen-lg w-full flex items-center justify-between">
          <h2 className="uppercase font-['Marcellus',_'serif'] text-3xl">
            Cart
          </h2>
          <p className="text-gray-500">{array.length} Items</p>
        </div>
      </header>
      {array.length === 0 ? (
        <h1 className="my-[20dvh] uppercase text-center text-5xl font-semibold">
          Cart is empty
        </h1>
      ) : (
        <>
          <main className="py-5 px-2.5 flex flex-col gap-2.5 items-center">
            {array.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  object={item}
                />
              );
            })}
          </main>
          <section className="w-full p-5 flex items-center justify-center">
            <div className="max-w-screen-md w-full flex items-center justify-between">
              <button className="py-2.5 px-5 uppercase font-medium text-white bg-[#252525] rounded-xl">
                Check Out
              </button>
              <p className="font-medium text-gray-600 flex flex-col items-center justify-center">
                Total Price:
                <span className="text-lg text-black">
                  {total.current.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </p>
            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default Cart;
