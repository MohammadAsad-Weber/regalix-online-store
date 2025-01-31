import React from "react";
import { useSelector } from "react-redux";

// Component
import Card from "./Reusable/Card";
import Footer from "./Reusable/Footer";

function Wishlist() {
  const array = useSelector((state) => state.wishlist); // Data

  return (
    <>
      <header className="h-20 w-full px-7.5 relative z-10 flex items-center justify-center shadow-md">
        <div className="h-full max-w-screen-lg w-full flex items-center justify-between">
          <h2 className="uppercase font-['Marcellus',_'serif'] text-3xl">
            Wishlist
          </h2>
          <p className="text-gray-500">{array.length} Items</p>
        </div>
      </header>
      <main className="p-5 pb-15 flex items-center justify-center">
        {array.length === 0 ? (
          <h1 className="my-[20dvh] uppercase text-5xl text-center font-semibold">
            WishList is empty
          </h1>
        ) : (
          <div className="max-w-fit w-full grid grid-cols-2 gap-2.5 min-[500px]:grid-cols-3 min-[500px]:gap-5 md:grid-cols-4">
            {array.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  isWish={item.isWish}
                  object={item}
                />
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Wishlist;
