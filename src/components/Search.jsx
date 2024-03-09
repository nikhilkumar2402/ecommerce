import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'
import { SearchC } from '../utils/SearchContext'

function Search() {

    const [products, setProducts] = useContext(ProductContext)
    const [searchItem, setSearchItem] = useContext(SearchC)
    const [filterProduct, setFilterProduct] = useState(products)
    // console.log(searchItem)
    // console.log(filterProduct)
    useEffect(() => {
        setFilterProduct(products.filter(item => item.title.toLowerCase().startsWith(searchItem)))
    },[searchItem])

  return (
      <div className="px-10 mt-5 py-[4%] h-full w-[85%] flex flex-wrap justify-center gap-5 overflow-y-auto overflow-x-hidden">
          {filterProduct.map(item => (
              <Link
                  to={`/detail/${item.id}`}
                  key={item.id}
                  className="border border-zinc-400 flex flex-col items-center justify-center w-[16%] h-[35vh] shadow p-5 hover:cursor-pointer"
              >
                  <div
                      className="h-[80%] w-full bg-contain bg-center bg-no-repeat hover:scale-105 transition-all duration-500 mb-4"
                      style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <h1 className="leading-none hover:text-blue-600 transition-all duration-200">
                      {item.title}
                  </h1>
              </Link>
          ))}

          {}
      </div>
  )
}

export default Search
