"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enableBlending = enableBlending;
function enableBlending() {
    var _context = this.context, BLEND = _context.BLEND, SRC_ALPHA = _context.SRC_ALPHA, ONE = _context.ONE, capacity = BLEND, sourceFactor = SRC_ALPHA, destinationFactor = ONE;
    this.context.enable(capacity);
    this.context.blendFunc(sourceFactor, destinationFactor);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbi9ibGVuZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJsZW5kaW5nKCkge1xuICBjb25zdCB7IEJMRU5ELCBTUkNfQUxQSEEsIE9ORSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IEJMRU5ELFxuICAgICAgICBzb3VyY2VGYWN0b3IgPSBTUkNfQUxQSEEsXG4gICAgICAgIGRlc3RpbmF0aW9uRmFjdG9yID0gT05FO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5ibGVuZEZ1bmMoc291cmNlRmFjdG9yLCBkZXN0aW5hdGlvbkZhY3Rvcik7XG59XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksY0FBYyxHQUFkLGNBQWM7U0FBZCxjQUFjLEdBQUcsQ0FBQztJQUNoQyxHQUFLLENBQTZCLFFBQVksUUFBUCxPQUFPLEVBQXRDLEtBQUssR0FBcUIsUUFBWSxDQUF0QyxLQUFLLEVBQUUsU0FBUyxHQUFVLFFBQVksQ0FBL0IsU0FBUyxFQUFFLEdBQUcsR0FBSyxRQUFZLENBQXBCLEdBQUcsRUFDdkIsUUFBUSxHQUFHLEtBQUssRUFDaEIsWUFBWSxHQUFHLFNBQVMsRUFDeEIsaUJBQWlCLEdBQUcsR0FBRztTQUV4QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVE7U0FFdkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCO0FBQ3hELENBQUMifQ==