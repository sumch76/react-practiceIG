import { useEffect, useState } from "react"

const Dimensions=()=>
{
    const[dimensions,setDimensions]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

    useEffect(()=>{
        window.addEventListener("resize",()=>
        {
            setDimensions({
                width:window.innerWidth,
                height:window.innerHeight,
            })
        })
        return()=>
        {
            window.removeEventListener("resize",()=>
            {
                setDimensions({
                    width:window.innerWidth,
                    height:window.innerHeight,
                })
            })
        }
    },[]);
    return dimensions;
}

///else you can make a proper function


///
// const updateDimensions = () => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };
//   window.addEventListener("resize", updateDimensions);