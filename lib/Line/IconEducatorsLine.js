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

var IconEducatorsLine = function (_Component) {
  _inherits(IconEducatorsLine, _Component);

  function IconEducatorsLine() {
    _classCallCheck(this, IconEducatorsLine);

    return _possibleConstructorReturn(this, (IconEducatorsLine.__proto__ || Object.getPrototypeOf(IconEducatorsLine)).apply(this, arguments));
  }

  _createClass(IconEducatorsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconEducatorsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M0-.011h1920V1129.4h-338.824v-112.94h225.883V112.93H112.94v903.53h112.941v112.94H0V-.01zm734.118 451.776c148.404 0 269.138 115.539 280.207 261.233-17.393 11.633-32.753 24.17-45.967 36.367-27.784 25.75-44.386 41.223-82.9 41.223-39.642 0-56.696-15.699-84.93-41.675-32.528-30.042-77.253-71.266-160.152-71.266-83.689 0-128.64 41.45-161.505 71.605-9.94 9.148-18.523 16.49-27.106 22.814v-37.948c0-155.633 126.607-282.353 282.353-282.353zm0 677.647c-139.483 0-255.022-101.986-277.61-235.144 45.403-13.666 75.67-40.433 98.937-62.004 28.235-25.977 45.29-41.676 84.931-41.676 38.852 0 55.68 15.586 83.577 41.337 32.866 30.155 77.816 71.604 161.506 71.604 60.31 0 100.066-22.023 129.882-45.628-5.873 150.55-129.205 271.51-281.223 271.51zm737.731-415.172l-310.136 826.955c-217.412 22.589-482.598 24.621-638.57-32.3l-38.851 106.164c232.659 84.932 614.852 48.339 747.332 39.755l7.115 2.71 1.242-3.275c.678 0 1.92-.113 2.71-.113l-31.849 87.078c-4.404 12.31-14.57 21.12-27.67 24.057-117.46 26.993-277.045 41.788-449.054 41.788-171.784 0-346.617-32.64-508.236-94.645V1459.2c0-75.67 50.598-142.758 123.22-163.426 123.896-35.35 251.406-53.76 382.192-53.647.904 0 1.807.226 2.824.226.564 0 1.016-.113 1.58-.113 126.27.452 255.474 17.958 387.502 54.664l37.045-106.617-14.683-4.63c-53.534-14.796-107.746-25.638-161.844-34.673 88.094-72.509 145.694-181.045 145.694-303.925V734.118c0-217.977-177.318-395.294-395.294-395.294-217.977 0-395.294 177.317-395.294 395.294v112.94c0 122.655 57.374 231.078 145.355 303.7-56.019 9.26-111.586 20.894-166.024 36.367-120.847 34.334-205.214 146.259-205.214 272.075v328.998l34.899 14.57C332.386 1879.453 535.228 1920 734.118 1920c180.367 0 348.762-15.812 474.24-44.612 50.371-11.633 90.917-47.096 108.536-95.322l31.85-87.078c14.343-39.303 7.567-82.22-18.41-114.748-12.988-16.376-29.59-28.687-48.226-36.254l295.454-787.99-105.713-39.756z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconEducatorsLine;
}(_react.Component);

exports.default = IconEducatorsLine;