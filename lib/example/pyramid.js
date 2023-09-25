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
var _pyramid = /*#__PURE__*/ _interop_require_default(require("./element/pyramid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImageMap = _index.preloadUtilities.preloadImageMap, host = globalThis.host, imageMapURI = globalThis.imageMapURI, imageMapJSON = globalThis.imageMapJSON;
var pyramidExample = function() {
    preloadImageMap(host, imageMapURI, imageMapJSON, function(imageMap, imageMapJSON) {
        var canvas = new _index.Canvas();
        return /*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            imageMap: imageMap,
            imageMapJSON: imageMapJSON
        }, /*#__PURE__*/ React.createElement(_pyramid.default, null)), /*#__PURE__*/ React.createElement(_index.GamingCamera, {
            mouseSensitivity: 10
        }));
    });
};
var _default = pyramidExample;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnQsIFNjZW5lLCBDYW52YXMsIEdhbWluZ0NhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gcHJlbG9hZFV0aWxpdGllcyxcbiAgICAgIHsgaG9zdCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiB9ID0gZ2xvYmFsVGhpcztcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCAoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTikgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhIG1vdXNlU2Vuc2l0aXZpdHk9ezEwfSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG4iXSwibmFtZXMiOlsicHJlbG9hZEltYWdlTWFwIiwicHJlbG9hZFV0aWxpdGllcyIsImhvc3QiLCJnbG9iYWxUaGlzIiwiaW1hZ2VNYXBVUkkiLCJpbWFnZU1hcEpTT04iLCJweXJhbWlkRXhhbXBsZSIsImltYWdlTWFwIiwiY2FudmFzIiwiQ2FudmFzIiwiU2NlbmUiLCJQYXJ0IiwiUHlyYW1pZCIsIkdhbWluZ0NhbWVyYSIsIm1vdXNlU2Vuc2l0aXZpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBCQTs7O2VBQUE7OztxQkF4Qm9FOzhEQUVoRDs7Ozs7O0FBRXBCLElBQU0sQUFBRUEsa0JBQW9CQyx1QkFBZ0IsQ0FBcENELGlCQUNBRSxPQUFvQ0MsV0FBcENELE1BQU1FLGNBQThCRCxXQUE5QkMsYUFBYUMsZUFBaUJGLFdBQWpCRTtBQUUzQixJQUFNQyxpQkFBaUI7SUFDckJOLGdCQUFnQkUsTUFBTUUsYUFBYUMsY0FBYyxTQUFDRSxVQUFVRjtRQUMxRCxJQUFNRyxTQUFTLElBQUlDLGFBQU07UUFFekIscUJBRUUsb0JBQUNDLFlBQUs7WUFBQ0YsUUFBUUE7eUJBQ2Isb0JBQUNHLFdBQUk7WUFBQ0osVUFBVUE7WUFBVUYsY0FBY0E7eUJBQ3RDLG9CQUFDTyxnQkFBTyx3QkFFVixvQkFBQ0MsbUJBQVk7WUFBQ0Msa0JBQWtCOztJQUl0QztBQUNGO0lBRUEsV0FBZVIifQ==