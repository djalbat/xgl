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
    var elements = childElements.reduce(function(elements1, childElement) {
        if (_instanceof(childElement, Class)) {
            var element = childElement; ///
            elements1.push(element);
        }
        return elements1;
    }, []);
    return elements;
}
function elementFromChildElements(childElements, Class) {
    var element = childElements.reduce(function(element1, childElement) {
        if (element1 === null) {
            if (_instanceof(childElement, Class)) {
                element1 = childElement; ///
            }
        }
        return element1;
    }, null);
    return element;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50LCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLHlCQUF5QixHQUF6Qix5QkFBeUI7UUFhekIsd0JBQXdCLEdBQXhCLHdCQUF3Qjs7Ozs7Ozs7U0FieEIseUJBQXlCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQy9ELEdBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLE1BQU0sVUFBRSxTQUFRLEVBQUUsWUFBWSxFQUFLLENBQUM7UUFDakUsRUFBRSxFQUFFLFdBQTZCLENBQTdCLFlBQVksRUFBWSxLQUFLLEdBQUUsQ0FBQztZQUNsQyxHQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFFbEMsU0FBUSxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3ZCLENBQUM7ZUFDTSxTQUFRO0lBQ2pCLENBQUM7V0FFTSxRQUFRO0FBQ2pCLENBQUM7U0FFZSx3QkFBd0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDOUQsR0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTSxVQUFFLFFBQU8sRUFBRSxZQUFZLEVBQUssQ0FBQztRQUMvRCxFQUFFLEVBQUUsUUFBTyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3JCLEVBQUUsRUFBRSxXQUE2QixDQUE3QixZQUFZLEVBQVksS0FBSyxHQUFFLENBQUM7Z0JBQ2xDLFFBQU8sR0FBRyxZQUFZLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBQzlCLENBQUM7UUFDSCxDQUFDO2VBRU0sUUFBTztJQUNoQixDQUFDLEVBQUUsSUFBSTtXQUVBLE9BQU87QUFDaEIsQ0FBQyJ9