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

var IconSkypeSolid = function (_Component) {
  _inherits(IconSkypeSolid, _Component);

  function IconSkypeSolid() {
    _classCallCheck(this, IconSkypeSolid);

    return _possibleConstructorReturn(this, (IconSkypeSolid.__proto__ || Object.getPrototypeOf(IconSkypeSolid)).apply(this, arguments));
  }

  _createClass(IconSkypeSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconSkypeSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1364.668 1315.426c-33.543 47.774-83.124 85.722-147.275 112.715-63.812 26.541-140.16 40.094-227.012 40.094-104.132 0-191.548-18.41-259.652-54.89-48.79-26.427-88.997-62.456-119.604-106.841-30.833-44.725-46.42-89.224-46.42-132.029 0-26.767 10.166-49.92 30.382-69.12 19.765-18.748 45.177-28.348 75.558-28.348 24.96 0 46.531 7.68 64.037 22.475 16.603 14.344 30.946 35.35 42.58 62.683 12.762 29.59 26.766 54.55 41.562 74.428 14.343 18.974 34.898 34.899 60.988 47.435 26.315 12.424 61.666 18.861 105.374 18.861 59.972 0 109.214-12.875 146.146-38.287 36.14-24.96 53.76-54.776 53.76-91.256 0-28.913-9.148-51.501-28.01-69.459-19.877-18.522-45.967-33.092-77.477-42.918-32.98-10.277-77.817-21.458-133.158-33.204-75.332-16.264-139.37-35.577-190.306-57.374-51.953-22.25-93.967-53.083-124.574-91.935-31.172-39.303-46.983-88.545-46.983-146.484 0-55.228 16.602-104.923 49.355-147.84 32.414-42.692 79.736-75.784 140.725-98.598 60.31-22.25 131.915-33.77 213.007-33.77 64.715 0 121.863 7.455 169.411 22.476 47.774 15.021 88.094 35.238 119.83 60.198 31.963 25.073 55.68 51.953 70.59 79.85 14.907 28.234 22.7 56.357 22.7 83.35 0 26.202-10.164 49.92-29.816 70.588-19.878 20.781-44.95 31.398-74.541 31.398-26.767 0-47.887-6.551-62.57-19.652-13.553-12.085-27.67-30.946-43.256-58.052-18.184-34.673-40.094-61.892-65.167-81.205-24.396-18.635-65.054-28.122-121.073-28.122-52.066 0-94.306 10.503-125.704 31.285-30.38 19.99-45.063 42.917-45.063 70.023 0 16.715 4.743 30.607 14.57 42.579 10.277 12.762 24.846 23.83 43.143 32.979 19.087 9.826 38.739 17.393 58.39 22.927 20.217 5.647 54.1 13.892 100.405 24.734 58.73 12.762 112.715 26.88 160.49 42.353 48.338 15.586 90.24 34.786 124.235 57.148 34.56 22.701 62.23 51.953 81.656 86.965 19.652 35.012 29.59 78.381 29.59 128.753 0 60.085-17.053 114.974-50.823 163.087m500.104-151.68c13.779-62.344 21.233-127.059 21.233-193.807 0-498.635-409.977-902.852-915.84-902.852-53.309 0-105.713 4.518-156.537 13.214C731.746 29.365 634.955 0 531.05 0 237.854 0 0 234.353 0 523.595c0 96.678 26.767 187.144 72.96 264.96-12.085 58.617-18.41 119.266-18.41 181.384 0 498.748 409.864 903.077 915.615 903.077 57.374 0 113.28-5.308 167.717-15.134 74.767 39.53 160.264 62.118 251.182 62.118 293.308 0 530.936-234.353 530.936-523.595 0-83.577-19.99-162.523-55.228-232.66', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconSkypeSolid;
}(_react.Component);

exports.default = IconSkypeSolid;