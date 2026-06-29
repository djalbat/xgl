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
    return arrayOrElement instanceof Array ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdO1xuXG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiB7XG4gICAgZWxlbWVudHMgPSBlbGVtZW50cy5jb25jYXQoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iXSwibmFtZXMiOlsiYWRkIiwiZmlyc3QiLCJmbGF0dGVuIiwiZm91cnRoIiwiZ3VhcmFudGVlIiwicGVybXV0ZSIsInB1c2giLCJzZWNvbmQiLCJzZXBhcmF0ZSIsInRoaXJkIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheUEiLCJhcnJheUIiLCJsZW5ndGgiLCJpbmRleCIsImVsZW1lbnRCIiwiYXJyYXkiLCJwbGFjZXMiLCJjdXQiLCJsZWFkaW5nRWxlbWVudHMiLCJzbGljZSIsInRyYWlsaW5nRWxlbWVudHMiLCJhcnJheXMiLCJyZWR1Y2UiLCJlbGVtZW50cyIsImNvbmNhdCIsImFycmF5T3JFbGVtZW50IiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQU1nQkE7ZUFBQUE7O1FBRkRDO2VBQUFBOztRQXVCQ0M7ZUFBQUE7O1FBdkJxQkM7ZUFBQUE7O1FBK0JyQkM7ZUFBQUE7O1FBbkJBQztlQUFBQTs7UUFaNkJDO2VBQUFBOztRQUF2QkM7ZUFBQUE7O1FBQTZCQztlQUFBQTs7UUFBckJDO2VBQUFBOzs7MkJBRkM7QUFFeEIsTUFBTSxFQUFFUixLQUFLLEVBQUVNLE1BQU0sRUFBRUUsS0FBSyxFQUFFTixNQUFNLEVBQUVHLElBQUksRUFBRUUsUUFBUSxFQUFFLEdBQUdFLHlCQUFjO0FBRXZFLFNBQVNWLElBQUlXLE1BQU0sRUFBRUMsTUFBTTtJQUNoQyxNQUFNQyxTQUFTRCxPQUFPQyxNQUFNO0lBRTVCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRCxRQUFRQyxRQUFTO1FBQzNDLE1BQU1DLFdBQVdILE1BQU0sQ0FBQ0UsTUFBTTtRQUU5QkgsT0FBT0wsSUFBSSxDQUFDUztJQUNkO0FBQ0Y7QUFFTyxTQUFTVixRQUFRVyxLQUFLLEVBQUVDLE1BQU07SUFDbkMsTUFBTUosU0FBU0csTUFBTUgsTUFBTSxFQUNyQkssTUFBTUwsU0FBU0ksUUFDZkUsa0JBQWtCSCxNQUFNSSxLQUFLLENBQUMsR0FBR0YsTUFDakNHLG1CQUFtQkwsTUFBTUksS0FBSyxDQUFDRjtJQUVyQ0YsUUFBUTtXQUFLSztXQUFxQkY7S0FBaUI7SUFFbkQsT0FBT0g7QUFDVDtBQUVPLFNBQVNkLFFBQVFvQixNQUFNO0lBQzVCLE9BQU9BLE9BQU9DLE1BQU0sQ0FBQyxDQUFDQyxVQUFVUjtRQUM5QlEsV0FBV0EsU0FBU0MsTUFBTSxDQUFDVDtRQUUzQixPQUFPUTtJQUNULEdBQUcsRUFBRTtBQUNQO0FBRU8sU0FBU3BCLFVBQVVzQixjQUFjO0lBQ3RDQSxpQkFBaUJBLGtCQUFrQixFQUFFO0lBRXJDLE9BQU8sQUFBQ0EsMEJBQTBCQyxRQUN4QkQsaUJBQ0M7UUFBRUE7S0FBZ0I7QUFDL0IifQ==