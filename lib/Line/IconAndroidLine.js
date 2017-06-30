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

var IconAndroidLine = function (_Component) {
  _inherits(IconAndroidLine, _Component);

  function IconAndroidLine() {
    _classCallCheck(this, IconAndroidLine);

    return _possibleConstructorReturn(this, (IconAndroidLine.__proto__ || Object.getPrototypeOf(IconAndroidLine)).apply(this, arguments));
  }

  _createClass(IconAndroidLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAndroidLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1314.34 216.418c29.251 18.86 57.373 39.415 83.123 63.02 118.474 108.535 183.753 253.324 183.753 407.6v734.107c0 88.206-76.008 160.036-169.41 160.036h-169.409V1920h-112.94v-338.82H790.638V1920h-112.94v-338.82H508.29c-93.401 0-169.41-71.829-169.41-160.035V709.286c0-200.468 107.293-380.268 269.249-488.916L519.583 87.892c-17.393-25.863-10.39-60.987 15.473-78.38 25.75-17.28 60.987-10.39 78.38 15.586l94.304 141.061c59.859-25.976 123.782-44.61 191.885-50.597a671.282 671.282 0 0 1 314.085 48.226l92.385-138.577c17.167-26.09 52.178-32.979 78.267-15.699 25.976 17.28 32.979 52.404 15.699 78.267l-85.721 128.639zm153.936 1204.727V687.037c0-122.313-52.178-237.512-147.16-324.363-96.112-88.205-225.766-136.77-361.633-136.77-16.602 0-33.317.791-50.032 2.26-256.6 22.474-457.632 233.784-457.632 481.122v711.86c0 25.863 25.299 47.095 56.47 47.095h903.518c31.17 0 56.47-21.232 56.47-47.096zM113 1298.832h112.94V734.133H113v564.699zm1581.156 0h112.94V734.133h-112.94v564.699zM734.168 474.394c-49.919 0-90.351 40.433-90.351 90.352 0 49.807 40.432 90.352 90.351 90.352 49.92 0 90.352-40.545 90.352-90.352 0-49.92-40.432-90.352-90.352-90.352m451.76 0c-49.92 0-90.353 40.433-90.353 90.352 0 49.807 40.433 90.352 90.352 90.352 49.92 0 90.352-40.545 90.352-90.352 0-49.92-40.432-90.352-90.352-90.352', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconAndroidLine;
}(_react.Component);

exports.default = IconAndroidLine;