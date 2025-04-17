import React ,{useContext, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/Context';

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const Navigate = useNavigate()
    const {Role , login }=useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/v1/Sign-in", formData);
            setMessage("Login successful!");
            setError(null);
            // console.log('Form submitted:', formData);
            // console.log('Server response:', response.data); 
            localStorage.setItem("id",response.data.id);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("role",response.data.role);

            Role(response.data.role)
            login(true);

            Navigate("/profile");
        } catch (error) {
            setMessage(null);
            setError(error.response ? error.response.data.message : "Network Error");
            console.error("Error submitting form: ", error);}
        }
        
  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-5">Login</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
            Login
        </button>
    </form>
    {message && <p className="text-green-500 mt-4">{message}</p>}
    {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
  )
}

export default Login
