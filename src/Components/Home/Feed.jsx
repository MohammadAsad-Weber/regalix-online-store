import React from "react";
import { useSelector } from "react-redux";

// Component
import Card from "../Reusable/Card";

function Feed() {
  const array = useSelector((state) => state.feed);
  return (
    <section className="py-10 px-5 flex flex-col items-center justify-center gap-7.5 bg-white">
      {/* Heading */}
      <h2 className="uppercase font-['Marcellus',_'serif'] text-3xl">
        Our Products
      </h2>
      {/* Items */}
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
    </section>
  );
}

export default Feed;
