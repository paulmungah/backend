import axios from 'axios';
import React, { useState } from 'react'
import { Await } from 'react-router-dom';


const Signin = () => {
  // define the two hooks for capturing/storing the users input
  const[email, setEmail] = useState("");
  const[password, setPassword]= useState("");

  // declare the three additional hooks
  const [loading, setLoading] = useState("");
  const [success , setSuccess]=useState("");
  const [error, setError] = useState("");

  // below is the function to handle the signin action
  const handlesubmit = async (e) => {
    // prevent site from reloading
    e.preventDefault()

    // update the loading hook with a message
    setLoading("Please wait while we authenticat yoyr account...")
  }

  try{ 
    // create a formData object that will hold the email and the password
    const formdata = new FormData()
    // 10. Insert/append the email and the password on the formData created.
    formdata.append("email",email);
     formdata.append("password",password);

    //  interact woth axios for the response
    const response =  axios





  }
  catch(error){

  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 shadow p-4'>
        <h1 className='text-primary'>Sign In</h1>
        <form onSubmit={handlesubmit}>
          <input type="email" 
          placeholder='Enter the email address here....'className='form-control'
          required 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/> <br />

          {/* {email} */}

          <input type="password" 
          placeholder='Enter the password here....'className='form-control'
          required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/> <br />

          <input type="submit"
          value="Signin"
         className='btn btn-primary'
          required /> <br />



        </form>
      </div>
    </div>
  )
}

export default Signin 