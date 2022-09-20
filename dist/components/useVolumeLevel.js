"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _Soundmeter = require("./Soundmeter");

function handleSuccess(stream) {
  window.stream = stream;
  const soundMeter = window.soundMeter = new _Soundmeter.SoundMeter(window.audioContext);
  soundMeter.connectToSource(stream, function (e) {
    if (e) {
      alert(e);
      return;
    }
  });
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

function useVolumeLevel() {
  const [level, setLevel] = (0, _react.useState)(0);
  const [isRecording, setIsRecording] = (0, _react.useState)(false);
  const [max, setMax] = (0, _react.useState)(0);

  const stopRecording = () => {
    setLevel(0);
    window.soundMeter.stop();
    setIsRecording(false);
  };

  const startRecording = () => {
    const constraints = window.constraints = {
      audio: true,
      video: false
    };

    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      window.audioContext = new AudioContext();
    } catch (e) {
      alert('Web Audio API not supported.');
    }

    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
    setIsRecording(true);
  };

  const updateVolume = () => {
    if (window.soundMeter && isRecording) {
      let v = window.soundMeter.instant * 200;
      setLevel(Math.min(v, 100));
      setMax(Math.max(max, level));
      console.log(level, max);
    }
  };

  (0, _react.useEffect)(() => {
    let intervalId;
    intervalId = setInterval(updateVolume, 50);
    return () => clearInterval(intervalId);
  });
  return [startRecording, stopRecording, level];
}

var _default = useVolumeLevel;
exports.default = _default;