"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VolumeIndicator = _ref => {
  let {
    volume = 50,
    backgroundColor = '#e3e2ba',
    indicatorColor = '#2d578a'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px',
      height: '40px',
      background: backgroundColor,
      display: 'flex',
      borderRadius: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 'auto',
      padding: '20dp',
      width: '80%',
      height: "5px",
      background: '#fff',
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 'auto',
      transition: 'width 200ms',
      padding: '20dp',
      width: "".concat(volume, "%"),
      height: "5px",
      background: indicatorColor,
      position: 'absolute'
    }
  })));
};

var _default = VolumeIndicator;
exports.default = _default;