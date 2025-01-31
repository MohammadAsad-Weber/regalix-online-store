import React from "react";

function Signup() {
  return (
    <section className="py-15 px-2.5 flex flex-col items-center justify-center gap-10">
      {/* Heading */}
      <h1 className="uppercase font-['Marcellus',_'serif'] text-5xl leading-15 text-center">
        Sign Up for our newsletter
      </h1>
      {/* Signup Form */}
      <form action="" className="max-w-screen-sm w-full flex flex-col gap-2.5">
        <input
          type="text"
          placeholder="Your Email Address"
          required
          className="w-full py-2.5 px-5 text-xl bg-white border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-2.5 uppercase text-xl text-white bg-[#252525] rounded-md"
        >
          Sign up
        </button>
      </form>
    </section>
  );
}

export default Signup;
