import React, { useEffect } from "react";
import { useVolumeLevel, VolumeIndicator } from "./lib";
function App() {
    const volume = useVolumeLevel();
    return (
      <div>
       <VolumeIndicator backgroundColor="#454545" indicatorColor="#000000" volume={volume} />
      </div>
    );
    }
    export default App;