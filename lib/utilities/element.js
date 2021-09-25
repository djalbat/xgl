"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementsFromChildElements = elementsFromChildElements;
exports.elementFromChildElements = elementFromChildElements;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function elementsFromChildElements(childElements, Class) {
    var elements = childElements.reduce(function(elements, childElement) {
        if (_instanceof(childElement, Class)) {
            var element = childElement; ///
            elements.push(element);
        }
        return elements;
    }, []);
    return elements;
}
function elementFromChildElements(childElements, Class) {
    var element = childElements.reduce(function(element, childElement) {
        if (element === null) {
            if (_instanceof(childElement, Class)) {
                element = childElement; ///
            }
        }
        return element;
    }, null);
    return element;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJuYW1lcyI6WyJlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsIkNsYXNzIiwiZWxlbWVudHMiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJlbGVtZW50IiwicHVzaCIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUVJLHlCQUF5QixHQUF6Qix5QkFBeUI7UUFhekIsd0JBQXdCLEdBQXhCLHdCQUF3Qjs7Ozs7Ozs7U0FieEIseUJBQXlCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQy9ELEdBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsUUFBUSxFQUFFLFlBQVksRUFBSyxDQUFDO1FBQ2pFLEVBQUUsRUFBRSxXQUE2QixDQUE3QixZQUFZLEVBQVksS0FBSyxHQUFFLENBQUM7WUFDbEMsR0FBSyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBRWxDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTztRQUN2QixDQUFDO1FBQ0QsTUFBTSxDQUFDLFFBQVE7SUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sQ0FBQyxRQUFRO0FBQ2pCLENBQUM7U0FFZSx3QkFBd0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDOUQsR0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUCxPQUFPLEVBQUUsWUFBWSxFQUFLLENBQUM7UUFDL0QsRUFBRSxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNyQixFQUFFLEVBQUUsV0FBNkIsQ0FBN0IsWUFBWSxFQUFZLEtBQUssR0FBRSxDQUFDO2dCQUNsQyxPQUFPLEdBQUcsWUFBWSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztZQUM5QixDQUFDO1FBQ0gsQ0FBQztRQUVELE1BQU0sQ0FBQyxPQUFPO0lBQ2hCLENBQUMsRUFBRSxJQUFJO0lBRVAsTUFBTSxDQUFDLE9BQU87QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiJdfQ==