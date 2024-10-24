import  { useState ,useEffect} from 'react'

function useOnOff() {
    const [isOn,setIsOn] =useState(true);
    console.log("render");
    useEffect(()=>
    {
        function handleOnline()
        {
            setIsOn(true)
        }

        function handleOffline()
        {
            setIsOn(false)
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
        };
       
    },[])
  return isOn;
}

export default useOnOff;
