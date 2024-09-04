import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"



export function Sendmoney() {

    const navigate = useNavigate();

    const [amount , setamount] = useState("")

    const {username} = useParams();
    return (
        <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Money</h1>
    
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700">Recipient: {username}</h3>
                </div>
    
                <div className="mb-6">
                    <p className="text-gray-700 mb-2">Enter the amount you want to send</p>
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        onChange={(e) => setamount(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
    
                <button 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" 
                    onClick={async () => {
                        const response = await fetch(`http://localhost:3098/trynew/account/sendmoney/${username}`, {
                            method: 'POST',
                            body: JSON.stringify({
                                amount: Number(amount),
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${localStorage.getItem('token')}`
                            }
                        });
    
                        const data = await response.json(); 
                        console.log(data.msg);
                        alert(`Amount of ${amount} has been sent to ${username} and ${data.msg} is your new balance`);
                        navigate('/dashboard');
                        
                    }}
                >
                    Initiate transfer
                </button>
            </div>
        </div>
    );
                }    