import React from "react";
import { useVolumeLevel, VolumeIndicator } from "./lib";
function App() {

  const [startRecording, stopRecording, volume] = useVolumeLevel();
    return (
      <div>
       <VolumeIndicator backgroundColor="#321199" indicatorColor="#989876" volume={volume} />
       <button onClick={startRecording} id="test" style={{backgroundColor: '#2ECC71', padding: 10, margin: 10}}>
        Record
       </button>
       <button onClick={stopRecording} id="test" style={{backgroundColor: '#CB4335', padding: 10, }}>
        Stop
       </button>
      </div>
    );
    }
    export default App;