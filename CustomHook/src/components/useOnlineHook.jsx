import { useState ,useEffect} from 'react';

// window.navigator.onLine returns true or false based on weather the user is online or not.
// Then, set up the event listeners for online status and offline status with the help of useEffect.
// When the online event fires, it sets isOnline state to true, and when the offline event fires, it sets isOnline state to false.
// Finally, return the isOnline state variable, which indicates whether the browser is currently online or offline.
const useOnlineHook = () => {
  const [isOnline, setOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));
  }, []);

  return isOnline;
};
export default useOnlineHook;
