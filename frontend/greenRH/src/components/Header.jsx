import React from "react";

const Header = () => {
  return (
    <section className=" border-b border-gray-200 py-5 px-5  sm:px-3 md:px-20 text-2xl font-bold text-green-500 flex justify-between bg-greenrh-50  ">
      <div>
        <div className="bg-green-500 sm:flex items-center gap-2 text-black border-1 border-black px-6 py-1 m-0.5  rounded-full shadow-md ">
          <p className="text-lg font-mono">Candidatos</p>
        </div>
      </div>
      <div className=" hidden bg-green-500 sm:flex items-center gap-2 text-black border-1 border-black px-6 py-1 m-0.5  rounded-full shadow-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sm:size-8  md:inline w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        <p className=" text-lg font-mono w-20 truncate">Usuario</p>
      </div>
    </section>
  );
};

export default Header;
