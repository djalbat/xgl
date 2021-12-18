"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _pyramid = _interopRequireDefault(require("./element/pyramid"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImageMap = _index.preloadUtilities.preloadImageMap;
var pyramidExample = function() {
    preloadImageMap(function(imageMap, imageMapJSON) {
        var canvas = new _index.Canvas();
        return(/*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            imageMap: imageMap,
            imageMapJSON: imageMapJSON
        }, /*#__PURE__*/ React.createElement(_pyramid.default, null)), /*#__PURE__*/ React.createElement(_index.GamingCamera, {
            mouseSensitivity: 10
        })));
    });
};
var _default = pyramidExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnQsIFNjZW5lLCBDYW52YXMsIEdhbWluZ0NhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gcHJlbG9hZFV0aWxpdGllcztcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTikgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhIG1vdXNlU2Vuc2l0aXZpdHk9ezEwfSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG4iXSwibmFtZXMiOlsicHJlbG9hZEltYWdlTWFwIiwicHlyYW1pZEV4YW1wbGUiLCJpbWFnZU1hcCIsImltYWdlTWFwSlNPTiIsImNhbnZhcyIsIm1vdXNlU2Vuc2l0aXZpdHkiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXdELEdBQVUsQ0FBVixNQUFVO0FBRTFELEdBQW1CLENBQW5CLFFBQW1COzs7Ozs7QUFFdkMsR0FBSyxDQUFHQSxlQUFlLEdBSjZDLE1BQVUsa0JBSXRFQSxlQUFlO0FBRXZCLEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7SUFDNUJELGVBQWUsQ0FBQyxRQUFRLENBQVBFLFFBQVEsRUFBRUMsWUFBWSxFQUFLLENBQUM7UUFDM0MsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQVI4QyxNQUFVO1FBVTFFLE1BQU0sbUNBVjBELE1BQVU7WUFZakVBLE1BQU0sRUFBRUEsTUFBTTs2Q0FaeUMsTUFBVTtZQWFoRUYsUUFBUSxFQUFFQSxRQUFRO1lBQUVDLFlBQVksRUFBRUEsWUFBWTs2Q0FYeEMsUUFBbUIsb0RBRjZCLE1BQVU7WUFnQnhERSxnQkFBZ0IsRUFBRSxFQUFFOztJQUl4QyxDQUFDO0FBQ0gsQ0FBQztlQUVjSixjQUFjIn0=