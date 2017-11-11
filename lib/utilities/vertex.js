'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function projectOntoXYPlane(vertex) {
  vertex = [].concat(_toConsumableArray(vertex.slice(0, 2)), [0]); ///

  return vertex;
}

module.exports = {
  projectOntoXYPlane: projectOntoXYPlane
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvdmVydGV4LmpzIl0sIm5hbWVzIjpbInByb2plY3RPbnRvWFlQbGFuZSIsInZlcnRleCIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxTQUFTQSxrQkFBVCxDQUE0QkMsTUFBNUIsRUFBb0M7QUFDbENBLHdDQUFhQSxPQUFPQyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFiLElBQWlDLENBQWpDLEdBRGtDLENBQ0k7O0FBRXRDLFNBQU9ELE1BQVA7QUFDRDs7QUFFREUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmSixzQkFBb0JBO0FBREwsQ0FBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBwcm9qZWN0T250b1hZUGxhbmUodmVydGV4KSB7XG4gIHZlcnRleCA9IFsuLi52ZXJ0ZXguc2xpY2UoMCwgMiksIDBdOyAgLy8vXG4gIFxuICByZXR1cm4gdmVydGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvamVjdE9udG9YWVBsYW5lOiBwcm9qZWN0T250b1hZUGxhbmVcbn07XG4iXX0=