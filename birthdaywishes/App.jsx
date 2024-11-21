import React ,{useState} from "react";
import NameForm from "./NameForm";
import BirthdayCard from "./BirthdayCard";
const App=()=>
{
    const[name,setName]=useState("");
    return(
        <>
        <div className="App">
            {!name ?(<NameForm setName={setName}/>):
            (<BirthdayCard name={name}/>)}
        </div>
        </>
    )
};
export default App;