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

var IconUploadLine = function (_Component) {
  _inherits(IconUploadLine, _Component);

  function IconUploadLine() {
    _classCallCheck(this, IconUploadLine);

    return _possibleConstructorReturn(this, (IconUploadLine.__proto__ || Object.getPrototypeOf(IconUploadLine)).apply(this, arguments));
  }

  _createClass(IconUploadLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconUploadLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1286.622 1677.766l-847.062-.754c-204.957-29.46-359.543-208.937-359.543-417.455 0-144.069 75.805-277.703 196.952-353.509 4.777-199.425 168.96-360.171 370.02-360.171a354.31 354.31 0 0 1 55.565 4.4c69.1-176.126 241.79-297.273 436.564-297.273 258.468 0 468.746 209.566 468.746 467.196 0 11.692-.544 23.635-1.634 35.913 125.128 97.638 198.461 245.897 198.461 405.386 0 284.66-232.404 516.267-518.069 516.267zM455.944 1527.79h830.678c202.945 0 368.092-164.309 368.092-366.29 0-124.499-63.36-239.443-169.421-307.455l-42.366-27.196 9.135-49.531c3.94-21.54 5.825-39.684 5.825-57.117 0-174.91-142.979-317.219-318.77-317.219-150.815 0-282.102 106.564-312.19 253.44l-17.81 86.953-82.72-32.057c-26.441-10.267-53.135-15.463-79.409-15.463-121.398 0-220.167 98.35-220.167 219.204 0 5.154.921 10.099 1.592 15.043l7.962 63.863-49.7 22.922c-95.207 43.874-156.681 139.166-156.681 242.67 0 132.713 96.758 247.155 225.95 268.233zm818.363-448.272l-309.97-309.97-309.97 309.97 93.113 93.112 151.025-150.983v433.84h131.706v-433.84l150.983 150.983 93.113-93.112z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconUploadLine;
}(_react.Component);

exports.default = IconUploadLine;