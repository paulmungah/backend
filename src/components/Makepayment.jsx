import React from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {

    // destruture the details passed from the Getproducts component
    // Thd useLocation hook allows us to get/destructure the properties passed from the previous component.
    const{product} = useLocation().state || {}
    // console.log("The details passed from getproducts are :",product) 
  return (
    <div className='row justify-content-center'>
        <button className='btn btn-outline-primary'>Back to Product</button>
        
        <h1 className='text-info'>Make Payment - Lipa na M-Pesa</h1>

        <div className=' col-md-6 card-shadow p-4'>
            <img src="logo192.png" alt="Product Name" className='product_img' />

            <div className="card body">
                <h2 className='text-info'>{product.product_name}</h2>
                <p className='text-dark'>{product.product_description}</p>
                <b className='text-warning'>Kesh 1000</b>

                <form >
                    <input type="number"className='form-control'
                    placeholder='Enter the Phone number 254XXXXXXX'
                    required />
                </form>
            </div>
        </div>
        
        </div>
  )
}

export default Makepayment 