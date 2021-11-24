import { useState } from 'react';

const useMousePosition = () => {
  const [state, setState] = useState({ x: null, y: null });

  const mouseClickHandler = (event) => {
    const { pageX, pageY } = event;
    setState({ x: pageX, y: pageY });
  };

  return { x: state.x, y: state.y, mouseClickHandler };
};

export default useMousePosition;
