import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import axios from "../utils/Axios";

function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filterProducts, setFilterProducts] = useState([]);
  const handleCategory =  () => {
    // const { data } = await axios.get(`/products/category/${category}`);
    const data = products.filter(item => item.category === category)
    setFilterProducts(data);
  };
  useEffect(() => {
    handleCategory();
    if ( category == 'undefined') setFilterProducts(products)
  }, [category, products]);

  return (
    <div className="px-10 mt-5 py-[4%] h-full w-[85%] flex flex-wrap justify-center gap-5 overflow-y-auto overflow-x-hidden">
      {filterProducts && filterProducts.length > 0 ? (
        filterProducts.map((item) => (
          <Link
            to={`/detail/${item.id}`}
            key={item.id}
            className="border border-zinc-400 flex flex-col items-center justify-center w-[16%] h-[35vh] shadow p-5 hover:cursor-pointer"
          >
            <div
              className="h-[80%] w-full bg-contain bg-center bg-no-repeat hover:scale-105 transition-all duration-500 mb-4"
              style={{ backgroundImage: `url(${item.image})`}}
            ></div>
            <h1 className="leading-none hover:text-blue-600 transition-all duration-200">
              {item.title}
            </h1>
          </Link>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
