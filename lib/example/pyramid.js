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
const _index = require("../index");
const _pyramid = /*#__PURE__*/ _interop_require_default(require("./element/pyramid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { preloadImageMap } = _index.preloadUtilities, { host, imageMapURI, imageMapJSON } = globalThis;
const pyramidExample = ()=>{
    preloadImageMap(host, imageMapURI, imageMapJSON, (imageMap, imageMapJSON)=>{
        const canvas = new _index.Canvas();
        return /*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            imageMap: imageMap,
            imageMapJSON: imageMapJSON
        }, /*#__PURE__*/ React.createElement(_pyramid.default, null)), /*#__PURE__*/ React.createElement(_index.GamingCamera, null));
    });
};
const _default = pyramidExample;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnQsIFNjZW5lLCBDYW52YXMsIEdhbWluZ0NhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gcHJlbG9hZFV0aWxpdGllcyxcbiAgICAgIHsgaG9zdCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiB9ID0gZ2xvYmFsVGhpcztcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCAoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTikgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuIl0sIm5hbWVzIjpbInByZWxvYWRJbWFnZU1hcCIsInByZWxvYWRVdGlsaXRpZXMiLCJob3N0IiwiaW1hZ2VNYXBVUkkiLCJpbWFnZU1hcEpTT04iLCJnbG9iYWxUaGlzIiwicHlyYW1pZEV4YW1wbGUiLCJpbWFnZU1hcCIsImNhbnZhcyIsIkNhbnZhcyIsIlNjZW5lIiwiUGFydCIsIlB5cmFtaWQiLCJHYW1pbmdDYW1lcmEiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBCQTs7O2VBQUE7Ozt1QkF4Qm9FO2dFQUVoRDs7Ozs7O0FBRXBCLE1BQU0sRUFBRUEsZUFBZSxFQUFFLEdBQUdDLHVCQUFnQixFQUN0QyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEdBQUdDO0FBRTVDLE1BQU1DLGlCQUFpQjtJQUNyQk4sZ0JBQWdCRSxNQUFNQyxhQUFhQyxjQUFjLENBQUNHLFVBQVVIO1FBQzFELE1BQU1JLFNBQVMsSUFBSUMsYUFBTTtRQUV6QixxQkFFRSxvQkFBQ0MsWUFBSztZQUFDRixRQUFRQTt5QkFDYixvQkFBQ0csV0FBSTtZQUFDSixVQUFVQTtZQUFVSCxjQUFjQTt5QkFDdEMsb0JBQUNRLGdCQUFPLHdCQUVWLG9CQUFDQyxtQkFBWTtJQUluQjtBQUNGO01BRUEsV0FBZVAifQ==