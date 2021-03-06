"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearColour = clearColour;
exports.clearColourBuffer = clearColourBuffer;
var defaultR = 0, defaultG = 0, defaultB = 0, defaultA = 1;
function clearColour(param, param1, param2, param3) {
    var r = param === void 0 ? defaultR : param, g = param1 === void 0 ? defaultG : param1, b = param2 === void 0 ? defaultB : param2, a = param3 === void 0 ? defaultA : param3;
    this.context.clearColor(r, g, b, a);
}
function clearColourBuffer() {
    var _context = this.context, COLOR_BUFFER_BIT = _context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
    this.context.clear(mask);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbi9jb2xvdXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGRlZmF1bHRSID0gMC4wLFxuICAgICAgZGVmYXVsdEcgPSAwLjAsXG4gICAgICBkZWZhdWx0QiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBID0gMS4wO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBT0ksV0FBVyxHQUFYLFdBQVc7UUFFWCxpQkFBaUIsR0FBakIsaUJBQWlCO0FBUGpDLEdBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBRyxFQUNkLFFBQVEsR0FBRyxDQUFHLEVBQ2QsUUFBUSxHQUFHLENBQUcsRUFDZCxRQUFRLEdBQUcsQ0FBRztTQUVKLFdBQVcsQ0FBQyxLQUFZLEVBQUUsTUFBWSxFQUFFLE1BQVksRUFBRSxNQUFZLEVBQUUsQ0FBQztRQUF6RCxDQUFDLEdBQUQsS0FBWSxjQUFSLFFBQVEsR0FBWixLQUFZLEVBQUUsQ0FBQyxHQUFELE1BQVksY0FBUixRQUFRLEdBQVosTUFBWSxFQUFFLENBQUMsR0FBRCxNQUFZLGNBQVIsUUFBUSxHQUFaLE1BQVksRUFBRSxDQUFDLEdBQUQsTUFBWSxjQUFSLFFBQVEsR0FBWixNQUFZO1NBQVMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQUcsQ0FBQztTQUU1RyxpQkFBaUIsR0FBRyxDQUFDO0lBQ25DLEdBQUssQ0FBd0IsUUFBWSxRQUFQLE9BQU8sRUFBakMsZ0JBQWdCLEdBQUssUUFBWSxDQUFqQyxnQkFBZ0IsRUFDbEIsSUFBSSxHQUFHLGdCQUFnQjtTQUV4QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUk7QUFDekIsQ0FBQyJ9