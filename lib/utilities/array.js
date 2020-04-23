"use strict";

var _necessary = require("necessary");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function permute(array, places) {
  var length = array.length,
      cut = length - places,
      leadingElements = array.slice(0, cut),
      trailingElements = array.slice(cut);
  array = [].concat(_toConsumableArray(trailingElements), _toConsumableArray(leadingElements));
  return array;
}

function flatten(arrays) {
  return arrays.reduce(function (elements, array) {
    return elements.concat(array);
  }, []);
}

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

module.exports = Object.assign(_necessary.arrayUtilities, {
  permute: permute,
  flatten: flatten,
  guarantee: guarantee
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbInBlcm11dGUiLCJhcnJheSIsInBsYWNlcyIsImxlbmd0aCIsImN1dCIsImxlYWRpbmdFbGVtZW50cyIsInNsaWNlIiwidHJhaWxpbmdFbGVtZW50cyIsImZsYXR0ZW4iLCJhcnJheXMiLCJyZWR1Y2UiLCJlbGVtZW50cyIsImNvbmNhdCIsImd1YXJhbnRlZSIsImFycmF5T3JFbGVtZW50IiwiQXJyYXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJyYXlVdGlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM5QixNQUFNQyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0UsTUFBckI7QUFBQSxNQUNNQyxHQUFHLEdBQUdELE1BQU0sR0FBR0QsTUFEckI7QUFBQSxNQUVNRyxlQUFlLEdBQUdKLEtBQUssQ0FBQ0ssS0FBTixDQUFZLENBQVosRUFBZUYsR0FBZixDQUZ4QjtBQUFBLE1BR01HLGdCQUFnQixHQUFHTixLQUFLLENBQUNLLEtBQU4sQ0FBWUYsR0FBWixDQUh6QjtBQUtBSCxFQUFBQSxLQUFLLGdDQUFRTSxnQkFBUixzQkFBNkJGLGVBQTdCLEVBQUw7QUFFQSxTQUFPSixLQUFQO0FBQ0Q7O0FBRUQsU0FBU08sT0FBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0EsTUFBTSxDQUFDQyxNQUFQLENBQWMsVUFBQ0MsUUFBRCxFQUFXVixLQUFYO0FBQUEsV0FBcUJVLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQlgsS0FBaEIsQ0FBckI7QUFBQSxHQUFkLEVBQTJELEVBQTNELENBQVA7QUFDRDs7QUFFRCxTQUFTWSxTQUFULENBQW1CQyxjQUFuQixFQUFtQztBQUNqQ0EsRUFBQUEsY0FBYyxHQUFHQSxjQUFjLElBQUksRUFBbkM7QUFFQSxTQUFRQSxjQUFjLFlBQVlDLEtBQTNCLEdBQ0VELGNBREYsR0FFRyxDQUFDQSxjQUFELENBRlY7QUFHRDs7QUFFREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MseUJBQWQsRUFBOEI7QUFDN0NwQixFQUFBQSxPQUFPLEVBQVBBLE9BRDZDO0FBRTdDUSxFQUFBQSxPQUFPLEVBQVBBLE9BRjZDO0FBRzdDSyxFQUFBQSxTQUFTLEVBQVRBO0FBSDZDLENBQTlCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5mdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbihhcnJheVV0aWxpdGllcywge1xuICBwZXJtdXRlLFxuICBmbGF0dGVuLFxuICBndWFyYW50ZWVcbn0pO1xuIl19