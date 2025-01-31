import React from "react";

function Hero() {
  return (
    <section className="p-5 pt-15 text-center flex flex-col items-center justify-center gap-10">
      {/* Heading */}
      <h1 className="font-['Marcellus',_'serif'] text-7xl">New Collections</h1>
      {/* Paragraph */}
      <p className="max-w-screen-md w-full text-gray-500">
        Discover our latest collections, where style meets innovation. Each item
        is crafted with quality and care, ensuring that you not only look your
        best but feel your best too. Whether you're searching for everyday
        essentials, statement accessories, or exclusive designs, our new
        arrivals cater to every taste and occasion. Explore the fresh styles now
        and be the first to shop the season’s most coveted pieces—because you
        deserve nothing less than exceptional.
      </p>
    </section>
  );
}

export default Hero;
