import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

function Details() {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useContext(ProductContext)
  const navigate = useNavigate()
  const { id } = useParams();
  const getproduct = () => {
    // const { data } = await axios.get(`/products/${id}`);
    const data = products.filter(item => item.id == id )
    setProduct(data);
  };
  useEffect(() => {
    getproduct();
    // console.log(product)
  }, [id]);

  
  const deleteHandler = async (id) => {
    console.log(id)
    setProducts(products.filter(item => item.id != id))
    console.log(products)
    toast.success("Product Deleted", {
      position: "bottom-right",
    })
    navigate(-1)
  } 
  localStorage.setItem('products', JSON.stringify([...products]))

  return product ? (
    <>
    {product.map(item => <div key={item.id} className="p-12 flex justify-center items-center w-[85%] h-full">
      <div
        className="h-96 w-96 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="w-[30%] ml-10">
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <h4 className="opacity-80 mt-2 mb-3">{item.category}</h4>
        <h2 className="text-xl">${item.price}</h2>
        <p className="mt-4 mb-12">{item.description}</p>
        <div className="flex gap-4">
          <Link to={`/edit/${item.id}`} className="px-5 py-2 border text-green-500 border-green-500">
            Edit
          </Link>
          <button onClick={() => deleteHandler(item.id)} className="px-5 py-2 border text-red-500 border-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>)}
    </>
  ) : (
    <Loading />
  );
}

export default Details;
