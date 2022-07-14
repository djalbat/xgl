"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../index");
var _colouredSquare = /*#__PURE__*/ _interopRequireDefault(require("./element/colouredSquare"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var simpleExample = function() {
    var canvas = new _index.Canvas();
    return /*#__PURE__*/ React.createElement(_index.Scene, {
        canvas: canvas
    }, /*#__PURE__*/ React.createElement(_index.Part, null, /*#__PURE__*/ React.createElement(_colouredSquare.default, {
        colour: [
            0,
            0,
            1
        ]
    })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null));
};
var _default = simpleExample;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3NpbXBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMCwgMSBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJzaW1wbGVFeGFtcGxlIiwiY2FudmFzIiwiQ2FudmFzIiwiU2NlbmUiLCJQYXJ0IiwiQ29sb3VyZWRTcXVhcmUiLCJjb2xvdXIiLCJEZXNpZ25DYW1lcmEiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFxQmIsU0FBNkI7OztlQUE3QixRQUE2Qjs7O3FCQW5CcUIsVUFBVTttRUFFakMsMEJBQTBCOzs7Ozs7QUFFckQsSUFBTUEsYUFBYSxHQUFHLFdBQU07SUFDMUIsSUFBTUMsTUFBTSxHQUFHLElBQUlDLE1BQU0sT0FBQSxFQUFFLEFBQUM7SUFFNUIscUJBRUUsb0JBQUNDLE1BQUssTUFBQTtRQUFDRixNQUFNLEVBQUVBLE1BQU07cUJBQ25CLG9CQUFDRyxNQUFJLEtBQUEsc0JBQ0gsb0JBQUNDLGVBQWMsUUFBQTtRQUFDQyxNQUFNLEVBQUU7QUFBRSxhQUFDO0FBQUUsYUFBQztBQUFFLGFBQUM7U0FBRTtNQUFJLENBQ2xDLGdCQUNQLG9CQUFDQyxNQUFZLGFBQUEsT0FBRSxDQUNULENBRVI7Q0FDSCxBQUFDO0lBRUYsUUFBNkIsR0FBZFAsYUFBYSJ9