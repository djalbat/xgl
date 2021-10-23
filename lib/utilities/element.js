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
    var elements1 = childElements.reduce(function(elements, childElement) {
        if (_instanceof(childElement, Class)) {
            var element = childElement; ///
            elements.push(element);
        }
        return elements;
    }, []);
    return elements1;
}
function elementFromChildElements(childElements, Class) {
    var element1 = childElements.reduce(function(element, childElement) {
        if (element === null) {
            if (_instanceof(childElement, Class)) {
                element = childElement; ///
            }
        }
        return element;
    }, null);
    return element1;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50LCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJDbGFzcyIsImVsZW1lbnRzIiwicmVkdWNlIiwiY2hpbGRFbGVtZW50IiwiZWxlbWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFFSUEseUJBQXlCLEdBQXpCQSx5QkFBeUI7UUFhekJDLHdCQUF3QixHQUF4QkEsd0JBQXdCOzs7Ozs7OztTQWJ4QkQseUJBQXlCLENBQUNFLGFBQWEsRUFBRUMsS0FBSyxFQUFFLENBQUM7SUFDL0QsR0FBSyxDQUFDQyxTQUFRLEdBQUdGLGFBQWEsQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBUEQsUUFBUSxFQUFFRSxZQUFZLEVBQUssQ0FBQztRQUNqRSxFQUFFLEVBQUVBLFdBQTZCLENBQTdCQSxZQUFZLEVBQVlILEtBQUssR0FBRSxDQUFDO1lBQ2xDLEdBQUssQ0FBQ0ksT0FBTyxHQUFHRCxZQUFZLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBRWxDRixRQUFRLENBQUNJLElBQUksQ0FBQ0QsT0FBTztRQUN2QixDQUFDO1FBQ0QsTUFBTSxDQUFDSCxRQUFRO0lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLENBQUNBLFNBQVE7QUFDakIsQ0FBQztTQUVlSCx3QkFBd0IsQ0FBQ0MsYUFBYSxFQUFFQyxLQUFLLEVBQUUsQ0FBQztJQUM5RCxHQUFLLENBQUNJLFFBQU8sR0FBR0wsYUFBYSxDQUFDRyxNQUFNLENBQUMsUUFBUSxDQUFQRSxPQUFPLEVBQUVELFlBQVksRUFBSyxDQUFDO1FBQy9ELEVBQUUsRUFBRUMsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3JCLEVBQUUsRUFBRUQsV0FBNkIsQ0FBN0JBLFlBQVksRUFBWUgsS0FBSyxHQUFFLENBQUM7Z0JBQ2xDSSxPQUFPLEdBQUdELFlBQVksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFDOUIsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUNDLE9BQU87SUFDaEIsQ0FBQyxFQUFFLElBQUk7SUFFUCxNQUFNLENBQUNBLFFBQU87QUFDaEIsQ0FBQyJ9