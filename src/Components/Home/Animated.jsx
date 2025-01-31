import React from "react";

// Circular Text
import TextPattern from "../../assets/text-pattern.png";

function Animated() {
  return (
    <section className="p-5 pt-0 bg-white">
      {/* Girl's Image Background container */}
      <div className="aspect-video w-full flex items-center justify-center bg-[url('/src/assets/background.jpg')] bg-cover bg-center">
        {/* Animated Text */}
        <img
          className="aspect-square max-h-lg h-[75%] animate-[spin_35s_linear_infinite]"
          src={TextPattern}
          alt=""
        />
      </div>
    </section>
  );
}

export default Animated;
