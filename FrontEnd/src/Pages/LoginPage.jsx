import {useState} from 'react'


const LoginPage = () =>{

    const[formData,setData]=useState({
    email:"",
    password:"",
    });

    const handleChange=(e)=>{
        setData({
            ...formData,
            [e.target.name]:e.target.value,
        })

    }
    const handleSubmit =(e)=>{
       
      

        if(validate()){
            console.log("Form Submitted",formData)

        }

    }

    const [errors,setErrors]=useState({})

    const validate=()=>{

        let newErrors={}

        if(!formData.email){
            newErrors.email="Email is Required";
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)) {
           newErrors.email="Enter a Vaild Email";
            
        }


        if(!formData.password){
            newErrors.password="Password Required"
        }
        else if(formData.password.length<6){
            newErrors.password="Password must be at least 6 character"
        }


        setErrors(newErrors);

        return Object.keys(newErrors).length===0;



    }


    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="mx-auto w-full max-w-sm rounded-md border-blue-300 p-4 outline focus:outline-none focus:ring-2 focus:ring-blue-500"
          onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4">Login Form</h1>

            <div className="flex  space-x-4">
            <label className="block text-sm font-medium mb-2">User Gmail </label>

            <input 
            type="email" 
            id ="email"
            name="email" 
            placeholder="Enter Your Gmail" 
            value={formData.email}
            onChange={handleChange}
            htmlFor="email"
          
 className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
      errors.email
        ? "border-red-500 focus:ring-red-500"
        : "focus:ring-blue-500"
    }`}
          />

            </div>

            <div className="flex  space-x-4 py-7">
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input 
            type="password" 
            id ="password" 
            name="password" 
            placeholder="Enter Your Password" 
            value={formData.password}
            onChange={handleChange}
             className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
      errors.email
        ? "border-red-500 focus:ring-red-500"
        : "focus:ring-blue-500"
    }`} />
            </div>

            <div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
            </div>
            <p className="text-sm text-center mt-4 text-gray-600">Forgot your Password?</p>
        </form>
        </div>
        </>
    )

}
export default LoginPage;