'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconFilesFairUseLine = function (_Component) {
  _inherits(IconFilesFairUseLine, _Component);

  function IconFilesFairUseLine() {
    _classCallCheck(this, IconFilesFairUseLine);

    return _possibleConstructorReturn(this, (IconFilesFairUseLine.__proto__ || Object.getPrototypeOf(IconFilesFairUseLine)).apply(this, arguments));
  }

  _createClass(IconFilesFairUseLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFilesFairUseLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797' }),
          _react2.default.createElement('path', { d: 'M773.947 1204h112V993h213v-87h-213V788h246v-94h-358z' })
        )
      );
    }
  }]);

  return IconFilesFairUseLine;
}(_react.Component);

exports.default = IconFilesFairUseLine;