'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var objectUtilities = function () {
  function objectUtilities() {
    _classCallCheck(this, objectUtilities);
  }

  _createClass(objectUtilities, null, [{
    key: 'combine',
    value: function combine(targetObject) {
      var sourceObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var sourceKeys = Object.keys(sourceObject);

      sourceKeys.forEach(function (sourceKey) {
        var targetProperty = targetObject[sourceKey],
            sourceProperty = sourceObject[sourceKey];

        targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? targetProperty + ' ' + sourceProperty : sourceProperty;
      });
    }
  }, {
    key: 'prune',
    value: function prune(targetObject, sourceKeys) {
      sourceKeys.forEach(function (sourceKey) {
        if (targetObject.hasOwnProperty(sourceKey)) {
          delete targetObject[sourceKey];
        }
      });
    }
  }]);

  return objectUtilities;
}();

module.exports = objectUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvb2JqZWN0LmpzIl0sIm5hbWVzIjpbIm9iamVjdFV0aWxpdGllcyIsInRhcmdldE9iamVjdCIsInNvdXJjZU9iamVjdCIsInNvdXJjZUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNvdXJjZUtleSIsInRhcmdldFByb3BlcnR5Iiwic291cmNlUHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsZTs7Ozs7Ozs0QkFDV0MsWSxFQUFpQztBQUFBLFVBQW5CQyxZQUFtQix1RUFBSixFQUFJOztBQUM5QyxVQUFNQyxhQUFhQyxPQUFPQyxJQUFQLENBQVlILFlBQVosQ0FBbkI7O0FBRUFDLGlCQUFXRyxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckMsWUFBTUMsaUJBQWlCUCxhQUFhTSxTQUFiLENBQXZCO0FBQUEsWUFDTUUsaUJBQWlCUCxhQUFhSyxTQUFiLENBRHZCOztBQUdBTixxQkFBYU0sU0FBYixJQUEwQk4sYUFBYVMsY0FBYixDQUE0QkgsU0FBNUIsSUFDSUMsY0FESixTQUNzQkMsY0FEdEIsR0FFSUEsY0FGOUI7QUFHRCxPQVBEO0FBUUQ7OzswQkFFWVIsWSxFQUFjRSxVLEVBQVk7QUFDckNBLGlCQUFXRyxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckMsWUFBSU4sYUFBYVMsY0FBYixDQUE0QkgsU0FBNUIsQ0FBSixFQUE0QztBQUMxQyxpQkFBT04sYUFBYU0sU0FBYixDQUFQO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCWixlQUFqQiIsImZpbGUiOiJvYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIG9iamVjdFV0aWxpdGllcyB7XG4gIHN0YXRpYyBjb21iaW5lKHRhcmdldE9iamVjdCwgc291cmNlT2JqZWN0ID0ge30pIHtcbiAgICBjb25zdCBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlT2JqZWN0KTtcblxuICAgIHNvdXJjZUtleXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2VLZXkpIHtcbiAgICAgIGNvbnN0IHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0sXG4gICAgICAgICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZU9iamVjdFtzb3VyY2VLZXldO1xuXG4gICAgICB0YXJnZXRPYmplY3Rbc291cmNlS2V5XSA9IHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFByb3BlcnR5fSAke3NvdXJjZVByb3BlcnR5fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUHJvcGVydHk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gICAgc291cmNlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZUtleSkge1xuICAgICAgaWYgKHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpKSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFV0aWxpdGllcztcbiJdfQ==