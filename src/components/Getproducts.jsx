import axios from 'axios';
import React , {use, useEffect, useState}from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {

  // initialize hook to help the state of your application
  const [products , setProducts] = useState([]); 
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState("");

// below we have the useNavigate hook hook to redirect us to another page on success login/signin
  const navigate = useNavigate()

  const img_url = "https://paul-mungah001.alwaysdata.net/static/images/"





  // create a function to help you fetch the products from API
  const fetchProducts = async() =>{
    setLoading(true);
    try{
      // 4. interact with your endpoint for fetching the products 
      const response = await axios.get("https://paul-mungah001.alwaysdata.net/api/get_product")

      // update the products hook with the response from the APi
      setProducts(response.data)

      // 7. set the loading hook back to default
      setLoading(false)

    }
    catch(error){
      // if there is an error
      // set the loading back to default
      setLoading(false)

      // update the error to default
      setError(error.message)

    }
  }
  // we shall use the useEffect hook. This hook enables use to automatically re-render new features incase of  changes.
  useEffect(()=> {
    fetchProducts()
  },[])
  console.log(products)
  return (
    <div className='row'>
      <h3 className="text-primary">
        Available products
      </h3>
      {loading&& <Loader/>}
      <h4 className="text-danger">{error}</h4>

      {/* {map the products fetched from the Api to the user interface} */}
      {products.map((product) =>(
            <div className="col-md-3 justify-content-center mb-3">
        <div className="card shadow">
          <img src={img_url + product.product_photo} alt="product name" 
          className='product_img mt-3'/>

          <div className="card body">
            <h5 className="text-primary">{product.product_name}</h5>
            <p className="text-dark">{product.product_description?.slice(0,100)}....</p> 
            <h3 className="text-info">Ksh {product.product_cost}</h3>
            <button className="btn btn-outline-info" onClick={()=>navigate("/makepayment", {state :{product}})}>Purchase Now</button> 
          </div>
        </div>
      </div>
      ))}

  
    </div>
  )
}

export default Getproducts 