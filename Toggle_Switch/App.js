import { useState } from "react"; 

function App() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <h1>Hello there!</h1>
            <button
                id="toggle"
                onClick={handleToggle}
                style={{
                    backgroundColor: toggle ? 'lightgray' : 'black',
                    color: toggle ? 'black' : 'white',
                }}
            >
                {toggle ? 'Off' : 'On'}
            </button>
        </>
    );
}
export default App;
