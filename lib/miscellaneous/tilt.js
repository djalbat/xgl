"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _vector = require("../maths/vector");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Tilt = /*#__PURE__*/ function() {
    function Tilt(angles, clockwise) {
        _classCallCheck(this, Tilt);
        this.angles = angles;
        this.clockwise = clockwise;
    }
    _createClass(Tilt, [
        {
            key: "getAngles",
            value: function getAngles() {
                return this.angles;
            }
        },
        {
            key: "isClockwise",
            value: function isClockwise() {
                return this.clockwise;
            }
        },
        {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
                relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER); ///
                var multiplier = this.clockwise ? +1 : -1, matrix = [
                    0,
                    +multiplier,
                    -multiplier,
                    0, 
                ], relativeAngles = (0, _vector).transform2(relativeMouseCoordinates, matrix);
                this.angles = (0, _vector).add2(this.angles, relativeAngles);
            }
        }
    ], [
        {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
                var angles = initialAngles, clockwise = false, tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        },
        {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
                var angles = initialAngles, tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        }
    ]);
    return Tilt;
}();
exports.default = Tilt;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiQU5HTEVTX01VTFRJUExJRVIiLCJhZGQyIiwic2NhbGUyIiwidHJhbnNmb3JtMiIsIlRpbHQiLCJjb25zdHJ1Y3RvciIsImFuZ2xlcyIsImNsb2Nrd2lzZSIsImdldEFuZ2xlcyIsImlzQ2xvY2t3aXNlIiwidXBkYXRlQW5nbGVzIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibXVsdGlwbGllciIsIm1hdHJpeCIsInJlbGF0aXZlQW5nbGVzIiwiZnJvbUluaXRpYWxBbmdsZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVzQixHQUFjLENBQWQsVUFBYztBQUNQLEdBQWlCLENBQWpCLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQyxJQUFJLGlCQUFWLFFBQVE7YUFBRixJQUFJLENBQ1gsTUFBTSxFQUFFLFNBQVM7OEJBRFYsSUFBSTtRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTOztpQkFIVCxJQUFJOztZQU12QixHQUFTLEVBQVQsQ0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3BCLENBQUM7OztZQUVELEdBQVcsRUFBWCxDQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdkIsQ0FBQzs7O1lBRUQsR0FBWSxFQUFaLENBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUN0Qyx3QkFBd0IsT0FqQmEsT0FBaUIsU0FpQnBCLHdCQUF3QixFQWxCNUIsVUFBYyxvQkFrQm9DLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFbkYsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUNaLENBQUMsSUFDQyxDQUFDLEVBQ2xCLE1BQU0sR0FBRyxDQUFDO29CQUVSLENBQUM7cUJBQWEsVUFBVTtxQkFDdkIsVUFBVTtvQkFBWSxDQUFDO2dCQUUxQixDQUFDLEVBQ0QsY0FBYyxPQTVCaUIsT0FBaUIsYUE0QnBCLHdCQUF3QixFQUFFLE1BQU07Z0JBRWxFLElBQUksQ0FBQyxNQUFNLE9BOUIwQixPQUFpQixPQThCbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjO1lBQ2hELENBQUM7Ozs7WUFFTSxHQUFpQixFQUFqQixDQUFpQjttQkFBeEIsUUFBUSxDQUFELGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN2QyxHQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFDdEIsU0FBUyxHQUFHLEtBQUssRUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVM7Z0JBRXZDLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7O1lBRU0sR0FBNkIsRUFBN0IsQ0FBNkI7bUJBQXBDLFFBQVEsQ0FBRCw2QkFBNkIsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQzlELEdBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUztnQkFFdkMsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7V0E1Q2tCLElBQUk7O2tCQUFKLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQU5HTEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhZGQyLCBzY2FsZTIsIHRyYW5zZm9ybTIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihhbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMuY2xvY2t3aXNlID0gY2xvY2t3aXNlO1xuICB9XG5cbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIGlzQ2xvY2t3aXNlKCkge1xuICAgIHJldHVybiB0aGlzLmNsb2Nrd2lzZTtcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBBTkdMRVNfTVVMVElQTElFUik7IC8vL1xuXG4gICAgY29uc3QgbXVsdGlwbGllciA9IHRoaXMuY2xvY2t3aXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICsxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAwLCAgICAgICAgICAgK211bHRpcGxpZXIsXG4gICAgICAgICAgICAtbXVsdGlwbGllciwgICAgICAgICAgIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1hdHJpeCk7XG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDIodGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKSB7XG4gICAgY29uc3QgYW5nbGVzID0gaW5pdGlhbEFuZ2xlcywgLy8vXG4gICAgICAgICAgY2xvY2t3aXNlID0gZmFsc2UsXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IGluaXRpYWxBbmdsZXMsIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuIl19