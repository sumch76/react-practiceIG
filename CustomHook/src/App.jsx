import useMousePosition from './components/useMousePosition';
import useOnlineHook from '/src/components/useOnlineHook';
import useDimensions from './components/useDimensions';
import "./index.css"
const App = () => {
  const online = useOnlineHook();
  const mouse=useMousePosition();
  const dimensions = useDimensions();
  return (
    <div>
      {online ? (
        <h1>yayy you are online👨‍💻!</h1>
      ) : (
        <h1>you are offline buddy</h1>
      )}
      <p className="text-center mt-4">your mouse position is  x: {mouse.x}  y: {mouse.y}</p>
      <div className="absolute w-5 h-5 bg-red-500 rounded-full pointer-events-none"
      style={{
        top:`${mouse.y}px`,
         left:`${mouse.x}px`,
        transform:'translate(-50% ,-50%',
      }}></div>
       <p>
        Width: {dimensions.width}px, Height: {dimensions.height}px
      </p>
    </div>
  );
};

export default App;
