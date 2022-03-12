import { useState, useEffect } from 'react';

function useVolumeLevel() {
  const [level, setLevel] = useState(0);


    const increase = ()=>{
        setLevel((level+10)%100)
    }
  useEffect(() => {
    let intervalId = setInterval(increase, 1000)

      navigator.mediaDevices
          .getUserMedia({audio:true, video:false});

   return () => clearInterval(intervalId);
  });

  return level;
}

export default useVolumeLevel;