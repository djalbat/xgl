"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lightingSource = require("../source/lighting"),
    positionSource = require("../source/position");

var normalsMatrixName = lightingSource.normalsMatrixName,
    offsetsMatrixName = positionSource.offsetsMatrixName,
    rotationsMatrixName = positionSource.rotationsMatrixName,
    positionMatrixName = positionSource.positionMatrixName,
    projectionMatrixName = positionSource.projectionMatrixName;

var UniformLocations = /*#__PURE__*/function () {
  function UniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
    _classCallCheck(this, UniformLocations);

    this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
    this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
  }

  _createClass(UniformLocations, [{
    key: "getOffsetsMatrixUniformLocation",
    value: function getOffsetsMatrixUniformLocation() {
      return this.offsetsMatrixUniformLocation;
    }
  }, {
    key: "getNormalsMatrixUniformLocation",
    value: function getNormalsMatrixUniformLocation() {
      return this.normalsMatrixUniformLocation;
    }
  }, {
    key: "getPositionMatrixUniformLocation",
    value: function getPositionMatrixUniformLocation() {
      return this.positionMatrixUniformLocation;
    }
  }, {
    key: "getRotationsMatrixUniformLocation",
    value: function getRotationsMatrixUniformLocation() {
      return this.rotationsMatrixUniformLocation;
    }
  }, {
    key: "getProjectionMatrixUniformLocation",
    value: function getProjectionMatrixUniformLocation() {
      return this.projectionMatrixUniformLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, offsetsMatrixName),
          normalsMatrixUniformLocation = canvas.getUniformLocation(program, normalsMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          rotationsMatrixUniformLocation = canvas.getUniformLocation(program, rotationsMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          uniformLocations = _construct(Class, [offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation].concat(remainingArguments));

      return uniformLocations;
    }
  }]);

  return UniformLocations;
}();

module.exports = UniformLocations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaWZvcm0uanMiXSwibmFtZXMiOlsibGlnaHRpbmdTb3VyY2UiLCJyZXF1aXJlIiwicG9zaXRpb25Tb3VyY2UiLCJub3JtYWxzTWF0cml4TmFtZSIsIm9mZnNldHNNYXRyaXhOYW1lIiwicm90YXRpb25zTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInByb2plY3Rpb25NYXRyaXhOYW1lIiwiVW5pZm9ybUxvY2F0aW9ucyIsIm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiQ2xhc3MiLCJwcm9ncmFtIiwiY2FudmFzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybUxvY2F0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLG9CQUFELENBQTlCO0FBQUEsSUFDTUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEOUI7O0FBR00sSUFBRUUsaUJBQUYsR0FBd0JILGNBQXhCLENBQUVHLGlCQUFGO0FBQUEsSUFDRUMsaUJBREYsR0FDdUZGLGNBRHZGLENBQ0VFLGlCQURGO0FBQUEsSUFDcUJDLG1CQURyQixHQUN1RkgsY0FEdkYsQ0FDcUJHLG1CQURyQjtBQUFBLElBQzBDQyxrQkFEMUMsR0FDdUZKLGNBRHZGLENBQzBDSSxrQkFEMUM7QUFBQSxJQUM4REMsb0JBRDlELEdBQ3VGTCxjQUR2RixDQUM4REssb0JBRDlEOztJQUdBQyxnQjtBQUNKLDRCQUFZQyw0QkFBWixFQUEwQ0MsNEJBQTFDLEVBQXdFQyw2QkFBeEUsRUFBdUdDLDhCQUF2RyxFQUF1SUMsK0JBQXZJLEVBQXdLO0FBQUE7O0FBQ3RLLFNBQUtKLDRCQUFMLEdBQW9DQSw0QkFBcEM7QUFDQSxTQUFLQyw0QkFBTCxHQUFvQ0EsNEJBQXBDO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUNBLDZCQUFyQztBQUNBLFNBQUtDLDhCQUFMLEdBQXNDQSw4QkFBdEM7QUFDQSxTQUFLQywrQkFBTCxHQUF1Q0EsK0JBQXZDO0FBQ0Q7Ozs7c0RBRWlDO0FBQ2hDLGFBQU8sS0FBS0osNEJBQVo7QUFDRDs7O3NEQUVpQztBQUNoQyxhQUFPLEtBQUtDLDRCQUFaO0FBQ0Q7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLQyw2QkFBWjtBQUNEOzs7d0RBRW1DO0FBQ2xDLGFBQU8sS0FBS0MsOEJBQVo7QUFDRDs7O3lEQUVvQztBQUNuQyxhQUFPLEtBQUtDLCtCQUFaO0FBQ0Q7OztnQ0FFa0JDLEssRUFBT0MsTyxFQUFTQyxNLEVBQStCO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUNoRSxVQUFNUiw0QkFBNEIsR0FBR08sTUFBTSxDQUFDRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNYLGlCQUFuQyxDQUFyQztBQUFBLFVBQ01NLDRCQUE0QixHQUFHTSxNQUFNLENBQUNFLGtCQUFQLENBQTBCSCxPQUExQixFQUFtQ1osaUJBQW5DLENBRHJDO0FBQUEsVUFFTVEsNkJBQTZCLEdBQUdLLE1BQU0sQ0FBQ0Usa0JBQVAsQ0FBMEJILE9BQTFCLEVBQW1DVCxrQkFBbkMsQ0FGdEM7QUFBQSxVQUdNTSw4QkFBOEIsR0FBR0ksTUFBTSxDQUFDRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNWLG1CQUFuQyxDQUh2QztBQUFBLFVBSU1RLCtCQUErQixHQUFHRyxNQUFNLENBQUNFLGtCQUFQLENBQTBCSCxPQUExQixFQUFtQ1Isb0JBQW5DLENBSnhDO0FBQUEsVUFLTVksZ0JBQWdCLGNBQU9MLEtBQVAsR0FBYUwsNEJBQWIsRUFBMkNDLDRCQUEzQyxFQUF5RUMsNkJBQXpFLEVBQXdHQyw4QkFBeEcsRUFBd0lDLCtCQUF4SSxTQUE0S0ksa0JBQTVLLEVBTHRCOztBQU9BLGFBQU9FLGdCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLGdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoXCIuLi9zb3VyY2UvbGlnaHRpbmdcIiksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoXCIuLi9zb3VyY2UvcG9zaXRpb25cIik7XG5cbmNvbnN0IHsgbm9ybWFsc01hdHJpeE5hbWUgfSA9IGxpZ2h0aW5nU291cmNlLFxuICAgICAgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxzTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbnNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwcm9qZWN0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBDbGFzcyhvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB1bmlmb3JtTG9jYXRpb25zOyAgICAgICBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaWZvcm1Mb2NhdGlvbnM7XG4iXX0=