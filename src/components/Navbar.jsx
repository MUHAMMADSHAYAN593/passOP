import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full z-10 bg-black/30 backdrop-blur-sm shadow-md text-white">
      <div className="max-w-7xl mx-auto px-3 py-3 flex flex-row flex-wrap items-center justify-between">
        <h1 className="text-lg font-bold tracking-wide text-purple-400">
            &lt;
            PassOP
            / &gt;
            </h1>
        <ul className="flex flex-row space-x-4 text-sm font-medium mt-2 sm:mt-0">
          <li>
            <a href="#" className="hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-0.5">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-0.5">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-0.5">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
