import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

function AddProducts() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const id = nanoid()
    const navigator = useNavigate()
    const [products, setProducts] = useContext(ProductContext)

    const submitHandler = (e) =>{
        e.preventDefault()
        if(title.trim().length < 3 || image.trim().length < 3 || category.trim().length < 3 || price.trim().length < 2 || description.trim().length < 3){
          // alert("Every Field have at least 3 character!")
          toast.error("Every Field have at least 3 character!")
            return
        }
        const product = {
            title,
            image,
            category,
            price,
            description,
            id
        }
        setProducts([...products, product])
        // console.log(product)
      localStorage.setItem('products', JSON.stringify([...products, product]))
      toast.success("Product added Successfully", {
        position: "bottom-right",
      })
        navigator('/')
    }

  return (
    <div className='p-12 flex justify-center items-center w-full flex-col'>
      <h1 className='text-2xl font-semibold'>Add New Product</h1>
      <form className='px-5 py-8 mt-8 w-[45%] flex flex-col gap-4' onSubmit={submitHandler}> 
        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Title' className='p-3 w-full outline-none bg-zinc-100'/>
        <input onChange={(e)=>setImage(e.target.value)} value={image} type="url" placeholder='Image Link' className='p-3 w-full outline-none bg-zinc-100' />
        <div className='w-full flex justify-between'>
            <input onChange={(e)=> setCategory(e.target.value)} value={category} type="text" placeholder='Category' className='p-3 w-[54%] outline-none bg-zinc-100' />
            <input onChange={(e)=> setPrice(e.target.value)} value={price} type="number" placeholder='Price' className='p-3 w-[44%] outline-none bg-zinc-100' />
        </div>
        <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='p-3 w-full outline-none bg-zinc-100' rows="4"></textarea>
        <button className='mt-2 px-4 py-2 w-fit bg-blue-400 text-white'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProducts
