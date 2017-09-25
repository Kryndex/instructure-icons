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

var IconLinkSolid = function (_Component) {
  _inherits(IconLinkSolid, _Component);

  function IconLinkSolid() {
    _classCallCheck(this, IconLinkSolid);

    return _possibleConstructorReturn(this, (IconLinkSolid.__proto__ || Object.getPrototypeOf(IconLinkSolid)).apply(this, arguments));
  }

  _createClass(IconLinkSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconLinkSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1311.326 891.546l-61.666-61.666 107.294-107.407-159.698-159.698-107.52 107.633-61.553-60.311 384.338-384.904 282.127 281.45-383.322 384.903zM891.863 1309.43L508.54 1694.332l-283.143-281.45 384.339-384.903 61.214 61.214-110.005 109.892 159.699 159.699 110.117-110.005 61.102 60.65zm962.484-961.92l-283.03-283.03c-88.546-86.288-231.19-85.95-317.93 1.016L868.484 450.398c-87.53 87.642-87.53 230.061 0 317.704l61.666 61.778-99.502 99.502-60.31-60.198c-42.127-43.144-98.372-67.087-158.57-67.426h-1.355c-60.197 0-116.894 23.605-159.812 66.41L65.698 1253.184c-87.642 87.642-87.642 230.061 0 317.704L348.84 1854.03c43.822 43.821 101.309 65.732 158.909 65.732 57.487 0 115.087-21.91 158.908-65.732l384.903-384.903c43.257-43.257 66.862-100.518 66.523-161.168-.452-60.197-24.396-116.442-66.523-157.665l-61.214-61.102 99.614-99.614 61.666 61.78c43.821 43.707 101.309 65.618 158.909 65.618 57.487 0 115.087-21.91 158.795-65.732l385.016-384.903c86.852-86.852 87.304-229.497 0-318.833z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconLinkSolid;
}(_react.Component);

exports.default = IconLinkSolid;