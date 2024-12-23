// create a search bar for a user name and email address on below array
// [{ "name":"Ritik" ,email:"ritik@gmail.com"},
// {"name":"karan",email:"karan@gmail.com"}]
// if a user found show the user name and adresss if not found show user not found

import React, { useState } from 'react';

const data=[
  { name:"Ritik" ,email:"ritik@gmail.com"},
{name:"karan",email:"karan@gmail.com"},
];
const SearchBar=()=>
{
  const[inputValue,setInputValue]=useState("");
  const[result,setResult]=useState(null);

  const handleChange=(e)=>
  {
 setInputValue(e.target.value);
 //setResult(null);
  }
const handleSearch=()=>
{
  const user=data.find((item)=>
  item.name.toLowerCase()===inputValue.toLowerCase()
  ||
  item.email.toLowerCase()===inputValue.toLowerCase()
  );
  setResult(user || "user not found");

};
  return(
    <div>
      <input type="text"
      placeholder="enter the name"
      value={inputValue}
      // onChange={(e)=>setInputValue(e.target.value)}

      //when you want user data also remove as soon as you  enter the diff. name
      onChange={handleChange}
      />
      <button onClick={handleSearch}>search</button>
      <div>
      { result ? (
        typeof result==="string"?
        (
          <p>{result}</p>
        ):(
          <div>
            <p>NAME:{result.name}</p>
            <p>email:{result.email}</p>
          </div>
        )
      )
      :(
        <p>{result}</p>
      )
      }
      </div>
   
    </div>
  )
}
export default SearchBar;