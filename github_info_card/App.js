import React,{ useState } from 'react'
import './App.css'

function App() {
  const[username,setUsername]=useState("");//fetch username
  const[userData,setUserData]=useState(null);//fetch github data
  const[error,setError]=useState(""); //error message
  const fetchGithubUser= async()=>
  {
 try{
   setError("");
   setUserData(null);
   const response=await fetch(`https://api.github.com/users/${username}`);
   if(!response.ok)
   {
     throw new Error("user not found");
   }
   const data= await response.json();
   setUserData(data);
   console.log(data);
 }
 catch(err)
 {
   setError(err.message);
 }
 };

 
  return (
    <>
     <h1>github info card</h1>
     <input 
     type="text"
     placeholder="enter github profile"
     value={username}
     onChange={(e)=>setUsername(e.target.value)}/>

       <button onClick={fetchGithubUser}>Get Username</button>
       {error && <p style={{color:"red",marginTop:"20px"}}>{error}</p>}
       {userData && (
         <div style={{
           border:"1px solid black",
           borderRadius:"10px",
           padding:"20px",
           marginTop:"20px",
           margin:"0 auto"   
         }}>
    <img
    src={userData.avatar_url}
    style={{width:"100px", borderRadius:"50%"}}
    />
           <h3>{userData.name}</h3>
           <p>{userData.bio || " no bio available"}</p>
           <p>Followers :{userData.followers}</p>
           <p>Public Repos :{userData.public_repos}</p>


         </div>
       )}
    </>
  )
}

export default App
