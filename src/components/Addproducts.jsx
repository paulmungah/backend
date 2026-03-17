import React, { useState } from 'react'

const Addproducts = () => {

  // introducing hooks
  const [product_name,setProductName ]= useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost , setProductCost] = useState("");
  const[ product_photo, setProductPhoto] = useState("");
  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>
        <h3 className='text-primary'>Welcome to Add Product</h3>
        <form >
          <input type="text"
          placeholder='Enter the product name'
          className='form-control'
          required /> <br />

          <input type="text"
          placeholder='Enter the Product Description'
          className='form-control'
          required /> <br />

           <input type="number"
          placeholder='Enter the price of the product'
          className='form-control'
          required /> <br />

          <label>Product Photo</label>
          <input type="file" 
          className='form-control'
          required/> <br />

          <input type="submit" 
          value="Add Product"
          className='btn btn-outline-primary'/>
        </form>
      </div>
        
    </div>
  )
}

export default Addproducts