"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useVolumeLevel() {
  const [level, setLevel] = (0, _react.useState)(0);

  const increase = () => {
    setLevel((level + 10) % 100);
  };

  (0, _react.useEffect)(() => {
    let intervalId = setInterval(increase, 1000);
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    return () => clearInterval(intervalId);
  });
  return level;
}

var _default = useVolumeLevel;
exports.default = _default;