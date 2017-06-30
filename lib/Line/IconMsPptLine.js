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

var IconMsPptLine = function (_Component) {
  _inherits(IconMsPptLine, _Component);

  function IconMsPptLine() {
    _classCallCheck(this, IconMsPptLine);

    return _possibleConstructorReturn(this, (IconMsPptLine.__proto__ || Object.getPrototypeOf(IconMsPptLine)).apply(this, arguments));
  }

  _createClass(IconMsPptLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMsPptLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1420.811 1342.116c29.93-44.724 47.436-98.484 47.436-156.197 0-136.32-97.13-250.391-225.883-276.593v260.668l178.447 172.122zm-517.27-156.197c0 155.745 126.607 282.353 282.353 282.353 57.148 0 110.23-17.28 154.73-46.645l-211.2-203.633V909.326c-128.754 26.202-225.883 140.273-225.883 276.593zm282.353-395.295c217.976 0 395.294 177.318 395.294 395.295 0 217.976-177.318 395.294-395.294 395.294-217.977 0-395.294-177.318-395.294-395.294 0-217.977 177.317-395.295 395.294-395.295zM112.94 1694.176V225.941h1242.353v451.765h451.765v1016.47H112.94zm225.883-903.529h338.823V677.706H338.824v112.941zm0-225.882V451.824h677.647v112.94H338.824zM1468.235 249.32l315.445 315.445h-315.445V249.32zm402.184 242.485L1541.195 162.58c-31.51-31.51-75.219-49.581-119.717-49.581H0v1694.118h1920V611.522c0-45.176-17.619-87.755-49.581-119.717z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMsPptLine;
}(_react.Component);

exports.default = IconMsPptLine;