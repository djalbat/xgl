"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColourRendererData;
    }
});
const _data = /*#__PURE__*/ _interop_require_default(require("../../renderer/data"));
const _array = require("../../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ColourRendererData extends _data.default {
    constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData){
        super(vertexPositionsData, vertexNormalsData, vertexIndexesData);
        this.vertexColoursData = vertexColoursData;
    }
    getVertexColoursData() {
        return this.vertexColoursData;
    }
    addVertexColours(vertexColours) {
        const vertexColoursData = (0, _array.flatten)(vertexColours);
        (0, _array.add)(this.vertexColoursData, vertexColoursData);
    }
    static fromNothing() {
        const vertexColoursData = [], colourRendererData = _data.default.fromNothing(ColourRendererData, vertexColoursData);
        return colourRendererData;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBhZGQsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xvdXJSZW5kZXJlckRhdGEiLCJSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsInZlcnRleENvbG91cnNEYXRhIiwiZ2V0VmVydGV4Q29sb3Vyc0RhdGEiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwidmVydGV4Q29sb3VycyIsImZsYXR0ZW4iLCJhZGQiLCJmcm9tTm90aGluZyIsImNvbG91clJlbmRlcmVyRGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2REFKSTt1QkFFSTs7Ozs7O0FBRWQsTUFBTUEsMkJBQTJCQyxhQUFZO0lBQzFELFlBQVlDLG1CQUFtQixFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixDQUFFO1FBQ3hGLEtBQUssQ0FBQ0gscUJBQXFCQyxtQkFBbUJDO1FBRTlDLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO0lBQzNCO0lBRUFDLHVCQUF1QjtRQUNyQixPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO0lBQy9CO0lBRUFFLGlCQUFpQkMsYUFBYSxFQUFFO1FBQzlCLE1BQU1ILG9CQUFvQkksSUFBQUEsY0FBTyxFQUFDRDtRQUVsQ0UsSUFBQUEsVUFBRyxFQUFDLElBQUksQ0FBQ0wsaUJBQWlCLEVBQUVBO0lBQzlCO0lBRUEsT0FBT00sY0FBYztRQUNuQixNQUFNTixvQkFBb0IsRUFBRSxFQUN0Qk8scUJBQXFCWCxhQUFZLENBQUNVLFdBQVcsQ0FBQ1gsb0JBQW9CSztRQUV4RSxPQUFPTztJQUNUO0FBQ0YifQ==