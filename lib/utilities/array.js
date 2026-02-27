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
    arrayB.forEach((elementB)=>{
        arrayA.push(elementB);
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnRCKSA9PiB7XG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IHtcbiAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmNvbmNhdChhcnJheSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiJdLCJuYW1lcyI6WyJhZGQiLCJmaXJzdCIsImZsYXR0ZW4iLCJmb3VydGgiLCJndWFyYW50ZWUiLCJwZXJtdXRlIiwicHVzaCIsInNlY29uZCIsInNlcGFyYXRlIiwidGhpcmQiLCJhcnJheVV0aWxpdGllcyIsImFycmF5QSIsImFycmF5QiIsImZvckVhY2giLCJlbGVtZW50QiIsImFycmF5IiwicGxhY2VzIiwibGVuZ3RoIiwiY3V0IiwibGVhZGluZ0VsZW1lbnRzIiwic2xpY2UiLCJ0cmFpbGluZ0VsZW1lbnRzIiwiYXJyYXlzIiwicmVkdWNlIiwiZWxlbWVudHMiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCIsIkFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFNZ0JBO2VBQUFBOztRQUZEQztlQUFBQTs7UUFtQkNDO2VBQUFBOztRQW5CcUJDO2VBQUFBOztRQTJCckJDO2VBQUFBOztRQW5CQUM7ZUFBQUE7O1FBUjZCQztlQUFBQTs7UUFBdkJDO2VBQUFBOztRQUE2QkM7ZUFBQUE7O1FBQXJCQztlQUFBQTs7OzJCQUZDO0FBRXhCLE1BQU0sRUFBRVIsS0FBSyxFQUFFTSxNQUFNLEVBQUVFLEtBQUssRUFBRU4sTUFBTSxFQUFFRyxJQUFJLEVBQUVFLFFBQVEsRUFBRSxHQUFHRSx5QkFBYztBQUV2RSxTQUFTVixJQUFJVyxNQUFNLEVBQUVDLE1BQU07SUFDaENBLE9BQU9DLE9BQU8sQ0FBQyxDQUFDQztRQUNkSCxPQUFPTCxJQUFJLENBQUNRO0lBQ2Q7QUFDRjtBQUVPLFNBQVNULFFBQVFVLEtBQUssRUFBRUMsTUFBTTtJQUNuQyxNQUFNQyxTQUFTRixNQUFNRSxNQUFNLEVBQ3JCQyxNQUFNRCxTQUFTRCxRQUNmRyxrQkFBa0JKLE1BQU1LLEtBQUssQ0FBQyxHQUFHRixNQUNqQ0csbUJBQW1CTixNQUFNSyxLQUFLLENBQUNGO0lBRXJDSCxRQUFRO1dBQUtNO1dBQXFCRjtLQUFpQjtJQUVuRCxPQUFPSjtBQUNUO0FBRU8sU0FBU2IsUUFBUW9CLE1BQU07SUFDNUIsT0FBT0EsT0FBT0MsTUFBTSxDQUFDLENBQUNDLFVBQVVUO1FBQzlCUyxXQUFXQSxTQUFTQyxNQUFNLENBQUNWO1FBRTNCLE9BQU9TO0lBQ1QsR0FBRyxFQUFFO0FBQ1A7QUFFTyxTQUFTcEIsVUFBVXNCLGNBQWM7SUFDdENBLGlCQUFpQkEsa0JBQWtCLEVBQUU7SUFFckMsT0FBTyxBQUFDQSwwQkFBMEJDLFFBQ3hCRCxpQkFDQztRQUFFQTtLQUFnQjtBQUMvQiJ9