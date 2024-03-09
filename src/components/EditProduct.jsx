import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


function EditProduct() {

    const [products, setProducts] = useContext(ProductContext)
    const {id} = useParams()
    const [product, setProduct] = useState(products.filter(item => item.id == id)[0])
    const navigator = useNavigate()
    
    const submitHandler = (e) => {
        e.preventDefault()
        setProduct({...product, id: id})
        const p = products.filter(item => item.id != id)
        setProducts([...p, product])
      localStorage.setItem('products', JSON.stringify([...p, product]))
      toast.success("Product edited Successfully", {
        position: "bottom-right",
      })
        navigator('/')
    }
    

  return (
    <div className='p-12 flex justify-center items-center w-full flex-col'>
      <h1 className='text-2xl font-semibold'>Edit Product</h1>
      <form className='px-5 py-8 mt-8 w-[45%] flex flex-col gap-4' onSubmit={submitHandler}> 
        <input onChange={e => setProduct({...product, title: e.target.value})} value={product.title} type="text" placeholder='Title' className='p-3 w-full outline-none bg-zinc-100'/>
        <input onChange={e => setProduct({...product, image: e.target.value})} value={product.image} type="url" placeholder='Image Link' className='p-3 w-full outline-none bg-zinc-100' />
        <div className='w-full flex justify-between'>
            <input onChange={e => setProduct({...product, category: e.target.value})} value={product.category} type="text" placeholder='Category' className='p-3 w-[54%] outline-none bg-zinc-100' />
            <input onChange={e => setProduct({...product, price: e.target.value})} value={product.price} type="number" placeholder='Price' className='p-3 w-[44%] outline-none bg-zinc-100' />
        </div>
        <textarea onChange={e => setProduct({...product, description: e.target.value})} value={product.description} className='p-3 w-full outline-none bg-zinc-100' rows="4"></textarea>
        <button className='mt-2 px-4 py-2 w-fit bg-blue-400 text-white'>Edit Product</button>
      </form>
    </div>
  )
}

export default EditProduct
