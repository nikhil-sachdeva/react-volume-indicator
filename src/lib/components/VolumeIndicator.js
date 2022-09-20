import React from "react";

const VolumeIndicator = ({ volume = 50, backgroundColor = '#e3e2ba', indicatorColor = '#2d578a' }) => (
  <div style={{width: '200px', height: '40px', background: backgroundColor, display: 'flex', borderRadius: '20px'}}>
    <div style={{margin:'auto',padding: '20dp', width: '80%', height: "5px", background:'#fff', position: 'relative'}}>
    <div style={{margin:'auto', transition: 'width 200ms' ,padding: '20dp', width: `${volume}%`, height: "5px", background: indicatorColor, position: 'absolute'}}/>
    </div>
  </div>
);

export default VolumeIndicator;