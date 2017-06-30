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

var IconUnpublishedLine = function (_Component) {
  _inherits(IconUnpublishedLine, _Component);

  function IconUnpublishedLine() {
    _classCallCheck(this, IconUnpublishedLine);

    return _possibleConstructorReturn(this, (IconUnpublishedLine.__proto__ || Object.getPrototypeOf(IconUnpublishedLine)).apply(this, arguments));
  }

  _createClass(IconUnpublishedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconUnpublishedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1642.831 585.828l-43.708 104.132c126.268 52.97 207.925 175.624 207.925 312.621 0 186.805-152.02 338.824-338.824 338.824H790.577v112.94h677.647c249.148 0 451.765-202.616 451.765-451.764 0-182.626-108.763-346.165-277.158-416.753m183.54-472.783l-419.124 366.72C1319.831 316.904 1148.951 211.982 960 211.982c-262.927 0-477.402 201.487-503.153 457.75-20.33-3.275-40.659-5.986-61.553-5.986C177.318 663.746 0 841.064 0 1059.04c0 187.144 131.125 343.568 306.07 384.226L19.314 1694.222l74.315 84.931 1807.06-1581.176-74.316-84.932zM395.295 1341.393c-155.746 0-282.353-126.607-282.353-282.353 0-155.745 126.607-282.352 282.353-282.352 74.315 0 144.452 28.574 197.534 80.64l78.946-80.753c-31.172-30.495-67.2-53.873-105.374-72.283 8.47-210.41 181.158-379.37 393.6-379.37 155.859 0 294.89 92.387 358.588 232.434l-896.075 784.037h-27.219z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconUnpublishedLine;
}(_react.Component);

exports.default = IconUnpublishedLine;