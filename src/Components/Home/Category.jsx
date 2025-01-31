import React from "react";

// Images
import MensClothing from "../../assets/Categories/mens-clothing.jpg";
import WomensClothing from "../../assets/Categories/womens-clothing.jpg";
import Electronics from "../../assets/Categories/electronics.jpg";
import Jewels from "../../assets/Categories/jewels.jpeg";

// Sub-Component
function CategoryCard(props) {
  return (
    <div className="max-w-80 w-full min-w-80 flex flex-col gap-2.5">
      {/* Category Image */}
      <img
        className="aspect-[4/5] object-top object-cover w-full"
        src={props.image}
        alt=""
      />
      {/* Category Heading */}
      <h3 className="mt-2.5 font-['Marcellus',_'serif'] uppercase tracking-wider text-2xl">
        {props.title}
      </h3>
      {/* Some Description */}
      <p className="text-gray-500 tracking-wider">{props.description}</p>
      {/* Discover Button */}
      <button className="w-fit uppercase tracking-widest font-light border-b-2 border-gray-400">
        Discover Now
      </button>
    </div>
  );
}

// Category Data
const categories = [
  {
    imgage: MensClothing,
    title: "Men's Clothing",
    description:
      "Stylish, comfortable apparel for every occasion, from casual wear to formal suits and accessories.",
  },
  {
    imgage: WomensClothing,
    title: "Women's Clothing",
    description:
      "Chic, versatile outfits, from trendy casual pieces to elegant dresses for any event or season.",
  },
  {
    imgage: Jewels,
    title: "Jewelery",
    description:
      "Elegant, timeless jewelry pieces crafted with precious metals and stones, perfect for any occasion.",
  },
  {
    imgage: Electronics,
    title: "Electronics",
    description:
      "Cutting-edge technology, including smartphones, laptops, and gadgets, designed to enhance your life.",
  },
];

function Category() {
  return (
    <section className="py-10 px-5 flex items-center justify-center">
      {/* Categories container */}
      <div className="max-w-fit w-full overflow-x-auto no-bars grid grid-cols-[repeat(4,_auto)] gap-5">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.imgage}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Category;
