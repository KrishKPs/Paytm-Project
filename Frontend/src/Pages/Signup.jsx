

import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Signup() {

    const navigate = useNavigate(); 
    const [fs , setfs] = useState("")
    const [ls , setls] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>
    
                <p className="text-gray-600 mb-6 text-center">Enter Your Basic Information</p>
    
                <div className="mb-4">
                    <p className="block text-gray-700 font-medium mb-2">First Name</p>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        onChange={(e) => setfs(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
    
                <div className="mb-4">
                    <p className="block text-gray-700 font-medium mb-2">Last Name</p>
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        onChange={(e) => setls(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
    
                <div className="mb-4">
                    <p className="block text-gray-700 font-medium mb-2">UserName</p>
                    <input 
                        type="text" 
                        placeholder="UserName" 
                        onChange={(e) => setemail(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
    
                <div className="mb-6">
                    <p className="block text-gray-700 font-medium mb-2">Password</p>
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
                        const response = await fetch('http://localhost:3098/trynew/user/signup', {
                            method: "POST",
                            body: JSON.stringify({
                                firstname: fs,
                                lastname: ls,
                                username: email,
                                password: password
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
    
                        if (!response.ok) {
                            alert("Invalid Input");
                            return;
                        }
    
                        const data = await response.json();
    
                        localStorage.setItem('token', data.jwt);
                        alert("User Created");
                        navigate('/dashboard');
                    }}
                > 
                    Sign up 
                </button>
            </div>  
        </div>
    ) ; 
                }