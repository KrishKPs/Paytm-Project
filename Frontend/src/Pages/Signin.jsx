import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Signin() {

    const navigate = useNavigate();
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    return (
        <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h1>
    
                <p className="text-gray-600 mb-6 text-center">Login with your username and password</p>
    
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">UserName</label>
                    <input 
                        type="text" 
                        placeholder="UserName" 
                        onChange={(e) => setemail(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
    
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input 
                        type="text" 
                        placeholder="Password" 
                        onChange={(e) => setpassword(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
    
                <button 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" 
                    onClick={async () => {
                        const response = await fetch('http://localhost:3098/trynew/user/signin', {
                            method: 'POST',
                            body: JSON.stringify({
                                username: email,
                                password: password
                            }), 
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        const data = await response.json();
    
                        if (data.jwt) {
                            localStorage.setItem('token', data.jwt);
                            alert("User Logged In Successfully");
                            navigate('/dashboard');
                        } else {
                            alert('Invalid Username or Password');
                        }
                    }}
                > 
                    Sign In 
                </button>
    
                <p className="mt-6 text-center text-gray-600">
                    Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
    
}