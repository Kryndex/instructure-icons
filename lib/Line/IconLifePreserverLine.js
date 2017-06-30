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

var IconLifePreserverLine = function (_Component) {
  _inherits(IconLifePreserverLine, _Component);

  function IconLifePreserverLine() {
    _classCallCheck(this, IconLifePreserverLine);

    return _possibleConstructorReturn(this, (IconLifePreserverLine.__proto__ || Object.getPrototypeOf(IconLifePreserverLine)).apply(this, arguments));
  }

  _createClass(IconLifePreserverLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconLifePreserverLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1758.177 1230.505l-334.522-140.56c23.483-83.885 23.596-173.188 2.145-261.363l337.909-133.447c57.804 174.204 57.804 358.005.113 531.531l-5.645 3.839zm-444.148 439.405L1214 1427.176c90.546-48.998 163.705-121.706 212.929-212.025l241.831 100.48c-77.223 154.221-200.284 277.282-354.73 354.28zm-620.722 93.82l-3.952-5.645 140.673-334.409c84.337 23.596 173.414 23.596 261.25 2.032l133.448 337.91c-174.317 57.804-358.005 57.917-531.419.112zm-89.078-95.061c-154.108-77.11-277.281-200.397-354.166-354.618l242.621-100.03c49.112 90.546 121.706 163.592 212.026 212.816L604.23 1668.67zM161.775 689.377l334.522 140.56c-23.596 84.11-23.596 173.414-2.145 261.363l-337.796 133.447c-57.804-174.204-57.804-358.005-.113-531.532l5.532-3.838zM605.81 249.858l100.255 242.735C615.406 541.59 542.247 614.41 493.023 704.73l-241.831-100.48c77.11-154.109 200.397-277.282 354.618-354.393zm620.835-93.706l3.839 5.645-140.56 334.408c-43.128-11.967-87.498-17.838-132.432-17.838-42.789 0-86.03 5.307-128.705 15.806L695.113 156.265c174.205-57.692 358.005-58.03 531.532-.113zm-73.95 1176.414c-27.208-18.628-61.078-26.87-94.835-17.725-64.804 18.064-132.996 17.951-197.349.113-33.192-9.37-66.95-1.242-94.27 17.386-77.224-39.966-138.867-101.948-178.834-179.397 18.741-27.435 26.983-61.305 17.612-95.062-17.95-64.917-18.064-133.108 0-197.574 9.258-33.418 1.13-67.062-17.386-94.158 39.853-76.772 101.158-138.077 178.043-178.043 19.193 13.435 42.111 21.112 65.933 21.112 10.048 0 20.322-1.355 30.483-4.177 64.804-18.064 133.109-17.951 197.349-.113 33.192 9.258 66.95 1.242 94.27-17.387 77.111 39.967 138.755 101.949 178.834 179.624-18.741 27.321-27.096 61.078-17.612 94.835 17.95 65.03 17.95 133.335 0 197.349-9.371 33.531-1.242 67.175 17.499 94.384-40.192 77.336-102.174 138.867-179.736 178.833zM1315.61 251.1c154.22 77.224 277.282 200.51 354.392 354.731l-242.847 100.142c-48.999-90.771-121.706-163.817-212.026-212.929L1315.61 251.1zm555.24 408.358c-10.5-31.16-33.418-56.901-63.223-70.562-7.452-3.387-15.58-3.613-23.483-5.306-90.772-198.478-246.912-355.07-445.164-446.293-1.806-8.241-1.92-16.709-5.645-24.612-13.66-30.031-39.402-53.175-71.127-63.675-196.67-65.482-404.97-65.256-602.545.113-31.273 10.387-57.014 33.305-70.562 63.11-3.5 7.34-3.726 15.468-5.42 23.484C384.978 226.488 228.5 382.74 137.501 580.993c-8.467 1.807-16.934 2.145-24.95 5.758-29.918 13.66-53.063 39.402-63.562 71.014-65.37 196.784-65.37 405.197.112 602.433 10.274 31.273 33.306 57.014 62.998 70.675 7.452 3.387 15.694 3.387 23.597 5.193 90.77 198.59 246.911 355.295 445.276 446.518 1.806 8.242 2.145 16.822 5.758 24.725 13.548 29.919 39.515 53.063 71.014 63.563 98.335 32.74 199.606 48.998 300.877 48.998 101.384 0 202.88-16.37 301.555-49.111 31.273-10.274 57.015-33.193 70.675-62.998 3.387-7.451 3.613-15.58 5.42-23.596 198.59-90.771 355.295-247.137 446.405-445.615 8.354-1.806 16.822-1.806 24.838-5.42 29.805-13.66 52.95-39.401 63.45-71.013 65.368-196.784 65.368-405.197-.113-602.659z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconLifePreserverLine;
}(_react.Component);

exports.default = IconLifePreserverLine;