import { useEffect, useState } from "react";
import { Render } from "../Components/Render";



export function Dashboard() {

    const [count , setcount] = useState(0)
    const [users , setusers] = useState([])
    const [name , setname] = useState("")
    const [currentUser, setCurrentUser] = useState("");  

    useEffect (() => { fetch('http://localhost:3098/trynew/account/balance' , {

    method : 'GET', 
    headers : {
        'Content-Type' : 'application/json' , 
        'Authorization' : ` ${localStorage.getItem('token')}`
    }
    })
    .then(response => response.json())
    .then(data => {
      setcount(data.balance);
      setCurrentUser(data.username) ;  
      console.log(data.username);

    });},[])

    useEffect (() => { fetch('http://localhost:3098/trynew/user/searchuser' , {

    method : 'POST', 
    headers : {
        'Content-Type' : 'application/json' , 
        'Authorization' : ` ${localStorage.getItem('token')}`
    } , 
    body : JSON.stringify(
        
        {filter : name } 
        ) 
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);
      setusers(data.filtered || []); 
    });},[name])


    // const username = localStorage.getItem('username');

    const filtered = users.filter((user) => user.username !== currentUser);
    return (
        <div>
          <div> 
            
          <div className="p-8 bg-gray-100 min-h-screen">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Payment App</h3>

        <p className="text-lg text-gray-600 mb-6">Hello Users</p>

        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg mb-8">
            <p className="text-xl font-medium text-gray-800">Your Balance</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">${count}</p>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Users</h3>
        </div>
    </div>

    <div> 


        <input type="text" placeholder="Search Users" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setname(e.target.value)} />
    </div>


  {filtered.map((user , index) => <Render key = {index} allusers = {user} />)} 




</div>
      
       
        
          

            </div>


        </div>
    )
}

