import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { TiHome } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { SearchC } from "../utils/SearchContext";

function Navbar() {
  const [products] = useContext(ProductContext);
  const [searchItem, setSearchItem] = useContext(SearchC);

  let category =
    products && products.reduce((acc, curr) => [...acc, curr.category], []);
  category = [...new Set(category)];
  const color = () => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.4)`;
  };
  const { search, pathname } = useLocation();

  return (
    <nav className="py-[4%] pl-10 w-[15%] h-full bg-zinc-50 flex flex-col">
      {(search.length > 0 || pathname !== "/") && (
        <Link
          to={"/"}
          className={`px-3 py-1 w-fit text-3xl text-blue-400 absolute top-[7%] left-[16%] hover:text-blue-500 transition-all duration-200 `}
        >
          <TiHome />
        </Link>
      )}
      <Link
        to={"/add"}
        className="px-5 py-2 border w-fit text-blue-500 border-blue-500"
      >
        Add New Product
      </Link>

      {(pathname == "/" || pathname == "/search") && (<Link
        to={"/search"}
      >
        <input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder="Search Your Product Here..." className="px-4 py-2 border absolute top-[1%] left-[50%] -translate-x-[35%] -translate-y-0 w-[50vw] outline-none border-zinc-900" />
      </Link>) }
      
      


      <h1 className="text-2xl w-[85%] mt-6 mb-2">Category Filter</h1>

      {category.map((item, index) => (
        <Link
          to={`/?category=${item}`}
          key={index}
          className="w-[85%] mt-2 flex items-center gap-2"
        >
          <div
            style={{ backgroundColor: color() }}
            className="h-[15px] w-[15px] rounded-full"
          ></div>
          <h3>{item}</h3>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
