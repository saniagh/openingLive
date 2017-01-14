'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Middle = require('./Middle');

var _Middle2 = _interopRequireDefault(_Middle);

var _TopBarNotLogged = require('./TopBarNotLogged');

var _TopBarNotLogged2 = _interopRequireDefault(_TopBarNotLogged);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var FAQNotLogged = function (_React$Component) {
    _inherits(FAQNotLogged, _React$Component);

    function FAQNotLogged() {
        _classCallCheck(this, FAQNotLogged);

        return _possibleConstructorReturn(this, (FAQNotLogged.__proto__ || Object.getPrototypeOf(FAQNotLogged)).apply(this, arguments));
    }

    _createClass(FAQNotLogged, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'DOM' }, _react2.default.createElement(_TopBarNotLogged2.default, null), _react2.default.createElement(_Middle2.default, null));
        }
    }]);

    return FAQNotLogged;
}(_react2.default.Component);

exports.default = FAQNotLogged;

//# sourceMappingURL=FAQNotLogged-compiled.js.map

//# sourceMappingURL=FAQNotLogged-compiled-compiled.js.map