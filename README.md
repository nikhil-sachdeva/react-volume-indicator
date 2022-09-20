## React Volume Indicator


### Get your mic's volume (via webRTC) in normalized 0-100 range!
[react-volume-indicator](https://www.npmjs.com/package/react-volume-indicator)

## Install

```
npm install react-volume-indicator
```

## Usage
1. `useVolumeLevel` hook

```js
  const [startRecording, stopRecording, volume] = useVolumeLevel();
  ```
  
- `startRecording` : Function called to start mic's recording; after calling this function value of `volume` will start changing
- `stopRecording` : Function called to stop mic's recording; after calling this function value of `volume` will remain 0
- `volume` : The value of mic's input volume in a 0-100 range, changing every 50ms

2. `VolumeIndicator` component
<img width="215" alt="Screenshot 2022-09-20 at 10 16 42 PM" src="https://user-images.githubusercontent.com/34986121/191317702-91d53c53-234e-4a89-8e34-03884f9d0f4b.png">

```html
 <VolumeIndicator backgroundColor="blue" indicatorColor="grey" volume={volume} />
 ```
 
 - `backgroundColor` : Color of the container's background
 - `indicatorColor` : Color of the volume value display within the container
 - `volume` : A state variable between 0-100 that determines its value (similar to progress % in a progress bar)
 
 
 
 Together they can be used like this - 
 
 ```js
 import {useVolumeLevel, VolumeIndicator} from 'react-volume-indicator'

function App() {
  const [startRecording, stopRecording, volume] = useVolumeLevel();
    return (
      <div>
        <div style={{margin: 10}}>
       <VolumeIndicator backgroundColor="blue" indicatorColor="grey" volume={volume} />
       </div>
       <button onClick={startRecording} style={{backgroundColor: 'red', padding: 10, margin: 10}}>
        Record
       </button>
       <button onClick={stopRecording} style={{backgroundColor: 'green', padding: 10, }}>
        Stop
       </button>
      </div>
    );
}

export default App;
```

Looking forward to pushing improvements iteratively and make it better!
