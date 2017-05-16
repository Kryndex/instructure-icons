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

var IconWordpressSolid = function (_Component) {
  _inherits(IconWordpressSolid, _Component);

  function IconWordpressSolid() {
    _classCallCheck(this, IconWordpressSolid);

    return _possibleConstructorReturn(this, (IconWordpressSolid.__proto__ || Object.getPrototypeOf(IconWordpressSolid)).apply(this, arguments));
  }

  _createClass(IconWordpressSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconWordpressSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M975.798 1265.589l-225.007 543.55c66.47 15.743 135.814 24.311 207.211 24.311 73.94 0 145.67-9.051 214.27-25.916l-196.474-541.945zm739.493-735.66c16.72 78.464 13.259 173.66-19.36 278.35-85.067 272.452-295.72 762.564-377.266 949.259 306.103-135.153 519.337-436.886 519.337-787.706 0-160.683-44.86-311.056-122.711-439.904zM280.93 668.155s-42.71-53.98-88.04-53.98h-45.994c-44.371 96.704-68.894 226.576-68.894 345.599 0 358.072 222.014 665.183 538.345 796.08L280.93 668.156zM177.422 536.814C324.206 266.044 618.557 89 958.002 89c219.726 0 420.484 92.603 574.699 223.307-44.059-8.432-92.166 1.045-140.624 28.45-113.403 64.327-150.48 246.4-3.442 337.824 91.872 56.764 124.55 198.899 121.46 285.7-3.032 86.936-213.508 486.185-213.508 486.185L1091.684 754.59s-7.04-48.815-7.04-62.895c0-17.755 5.906-39.494 16.994-51.891 7.607-8.259 19.262-25.627 33.029-25.627h97.113v-77.362h-528v77.362h16.387c17.287 0 34.183 23.016 50.493 39.513 19.282 19.689 43.55 93.764 72.942 170.624l76.775 250.113-165.46 378.149L573.384 696.8s5.378-51.795 16.349-60.595c7.138-6.053 18.147-22.029 30.839-22.029h4.987v-77.362H177.422z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconWordpressSolid;
}(_react.Component);

exports.default = IconWordpressSolid;