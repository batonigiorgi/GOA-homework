import { useState, useEffect } from 'react';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // ქვემოთ არ ჩაწერისას – კომპონენტის დაშლისას listener რჩება და memory leak ხდება
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Width: {width}px</p>;
}

export default WindowWidth;
