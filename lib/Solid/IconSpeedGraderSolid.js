'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconSpeedGraderSolid = function (_Component) {
  _inherits(IconSpeedGraderSolid, _Component);

  function IconSpeedGraderSolid() {
    _classCallCheck(this, IconSpeedGraderSolid);

    return _possibleConstructorReturn(this, (IconSpeedGraderSolid.__proto__ || Object.getPrototypeOf(IconSpeedGraderSolid)).apply(this, arguments));
  }

  _createClass(IconSpeedGraderSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconSpeedGraderSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 160c-441.8 0-800 358.2-800 800s358.2 800 800 800c441.85 0 800-358.2 800-800s-358.15-800-800-800zm0 1400c-314.5 0-572-242.1-597.5-550H560V910H362.5A596.35 596.35 0 0 1 489 589l152.8 152.85 70.7-70.7-155-155.1A596.5 596.5 0 0 1 910 362.5V560h100V362.5a597 597 0 0 1 358.25 158.7l-515.2 336.5-114.6 328.9 319.2-124.4 342-509.5A596.7 596.7 0 0 1 1557.5 910H1360v100h197.5c-25.5 307.9-283 550-597.5 550z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconSpeedGraderSolid;
}(_react.Component);

exports.default = IconSpeedGraderSolid;