import { useEffect,useState } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect
    (() => {
      window.addEventListener('mousemove', (e) =>
        setPosition({ x: e.clientX, y: e.clientY })
      );
      return () => {
        window.removeEventListener('mousemove', (e) =>
          setPosition({ x: e.clientX, y: e.clientY })
        );
      };
    },
    []);
  return position;
};

export default useMousePosition;
