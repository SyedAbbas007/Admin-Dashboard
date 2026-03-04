
import {useNavigate} from 'react-router-dom'
const LandingPage =()=>{
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-blue-600 to-indigo-700 text-white text-center p-6">
      <nav></nav>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Welcome to E-Commerce Admin Panel
      </h1>

      <p className="max-w-xl text-lg mb-8 text-gray-200">
        Manage products, customers, orders, payments and analytics
        all in one powerful dashboard.
      </p>

      <button
        onClick={() => navigate("/Login")}
        className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Login to Dashboard
      </button>

    </div>
  );
};




export default LandingPage;