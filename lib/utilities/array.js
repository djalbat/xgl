"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get add () {
        return add;
    },
    get first () {
        return first;
    },
    get flatten () {
        return flatten;
    },
    get fourth () {
        return fourth;
    },
    get guarantee () {
        return guarantee;
    },
    get permute () {
        return permute;
    },
    get push () {
        return push;
    },
    get second () {
        return second;
    },
    get separate () {
        return separate;
    },
    get third () {
        return third;
    }
});
const _necessary = require("necessary");
const { first, second, third, fourth, push, separate } = _necessary.arrayUtilities;
function add(arrayA, arrayB) {
    const length = arrayB.length;
    for(let index = 0; index < length; index++){
        const elementB = arrayB[index];
        arrayA.push(elementB);
    }
}
function permute(array, places) {
    const length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
    array = [
        ...trailingElements,
        ...leadingElements
    ];
    return array;
}
function flatten(arrays) {
    return arrays.reduce((elements, array)=>{
        elements = elements.concat(array);
        return elements;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return Array.isArray(arrayOrElement) ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdO1xuXG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiB7XG4gICAgZWxlbWVudHMgPSBlbGVtZW50cy5jb25jYXQoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheU9yRWxlbWVudCkgP1xuICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iXSwibmFtZXMiOlsiYWRkIiwiZmlyc3QiLCJmbGF0dGVuIiwiZm91cnRoIiwiZ3VhcmFudGVlIiwicGVybXV0ZSIsInB1c2giLCJzZWNvbmQiLCJzZXBhcmF0ZSIsInRoaXJkIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheUEiLCJhcnJheUIiLCJsZW5ndGgiLCJpbmRleCIsImVsZW1lbnRCIiwiYXJyYXkiLCJwbGFjZXMiLCJjdXQiLCJsZWFkaW5nRWxlbWVudHMiLCJzbGljZSIsInRyYWlsaW5nRWxlbWVudHMiLCJhcnJheXMiLCJyZWR1Y2UiLCJlbGVtZW50cyIsImNvbmNhdCIsImFycmF5T3JFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFNZ0JBO2VBQUFBOztRQUZEQztlQUFBQTs7UUF1QkNDO2VBQUFBOztRQXZCcUJDO2VBQUFBOztRQStCckJDO2VBQUFBOztRQW5CQUM7ZUFBQUE7O1FBWjZCQztlQUFBQTs7UUFBdkJDO2VBQUFBOztRQUE2QkM7ZUFBQUE7O1FBQXJCQztlQUFBQTs7OzJCQUZDO0FBRXhCLE1BQU0sRUFBRVIsS0FBSyxFQUFFTSxNQUFNLEVBQUVFLEtBQUssRUFBRU4sTUFBTSxFQUFFRyxJQUFJLEVBQUVFLFFBQVEsRUFBRSxHQUFHRSx5QkFBYztBQUV2RSxTQUFTVixJQUFJVyxNQUFNLEVBQUVDLE1BQU07SUFDaEMsTUFBTUMsU0FBU0QsT0FBT0MsTUFBTTtJQUU1QixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUQsUUFBUUMsUUFBUztRQUMzQyxNQUFNQyxXQUFXSCxNQUFNLENBQUNFLE1BQU07UUFFOUJILE9BQU9MLElBQUksQ0FBQ1M7SUFDZDtBQUNGO0FBRU8sU0FBU1YsUUFBUVcsS0FBSyxFQUFFQyxNQUFNO0lBQ25DLE1BQU1KLFNBQVNHLE1BQU1ILE1BQU0sRUFDckJLLE1BQU1MLFNBQVNJLFFBQ2ZFLGtCQUFrQkgsTUFBTUksS0FBSyxDQUFDLEdBQUdGLE1BQ2pDRyxtQkFBbUJMLE1BQU1JLEtBQUssQ0FBQ0Y7SUFFckNGLFFBQVE7V0FBS0s7V0FBcUJGO0tBQWlCO0lBRW5ELE9BQU9IO0FBQ1Q7QUFFTyxTQUFTZCxRQUFRb0IsTUFBTTtJQUM1QixPQUFPQSxPQUFPQyxNQUFNLENBQUMsQ0FBQ0MsVUFBVVI7UUFDOUJRLFdBQVdBLFNBQVNDLE1BQU0sQ0FBQ1Q7UUFFM0IsT0FBT1E7SUFDVCxHQUFHLEVBQUU7QUFDUDtBQUVPLFNBQVNwQixVQUFVc0IsY0FBYztJQUN0Q0EsaUJBQWlCQSxrQkFBa0IsRUFBRTtJQUVyQyxPQUFPQyxNQUFNQyxPQUFPLENBQUNGLGtCQUNaQSxpQkFDQztRQUFFQTtLQUFnQjtBQUM5QiJ9