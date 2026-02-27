"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Tilt;
    }
});
const _constants = require("../constants");
const _vector = require("../maths/vector");
class Tilt {
    constructor(angles, clockwise){
        this.angles = angles;
        this.clockwise = clockwise;
    }
    getAngles() {
        return this.angles;
    }
    isClockwise() {
        return this.clockwise;
    }
    updateAngles(relativeMouseCoordinates) {
        relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER); ///
        const multiplier = this.clockwise ? +1 : -1, matrix = [
            0,
            +multiplier,
            0,
            -multiplier,
            0,
            0,
            0,
            0,
            0
        ], relativeAngles = (0, _vector.transform3)([
            ...relativeMouseCoordinates,
            0
        ], matrix);
        this.angles = (0, _vector.add3)(this.angles, relativeAngles);
    }
    static fromInitialAngles(initialAngles) {
        const angles = [
            ...initialAngles,
            0
        ], clockwise = false, tilt = new Tilt(angles, clockwise);
        return tilt;
    }
    static fromInitialAnglesAndClockwise(initialAngles, clockwise) {
        const angles = [
            ...initialAngles,
            0
        ], tilt = new Tilt(angles, clockwise);
        return tilt;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgIDAsICttdWx0aXBsaWVyLCAwLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsICAgICAgICAgICAwLCAwXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUaWx0IiwiYW5nbGVzIiwiY2xvY2t3aXNlIiwiZ2V0QW5nbGVzIiwiaXNDbG9ja3dpc2UiLCJ1cGRhdGVBbmdsZXMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJzY2FsZTIiLCJBTkdMRVNfTVVMVElQTElFUiIsIm11bHRpcGxpZXIiLCJtYXRyaXgiLCJyZWxhdGl2ZUFuZ2xlcyIsInRyYW5zZm9ybTMiLCJhZGQzIiwiZnJvbUluaXRpYWxBbmdsZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7OzJCQUhhO3dCQUNPO0FBRTFCLE1BQU1BO0lBQ25CLFlBQVlDLE1BQU0sRUFBRUMsU0FBUyxDQUFFO1FBQzdCLElBQUksQ0FBQ0QsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNGLE1BQU07SUFDcEI7SUFFQUcsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGFBQWFDLHdCQUF3QixFQUFFO1FBQ3JDQSwyQkFBMkJDLElBQUFBLGNBQU0sRUFBQ0QsMEJBQTBCRSw0QkFBaUIsR0FBRyxHQUFHO1FBRW5GLE1BQU1DLGFBQWEsSUFBSSxDQUFDUCxTQUFTLEdBQ2IsQ0FBQyxJQUNDLENBQUMsR0FDakJRLFNBQVM7WUFFRztZQUFHLENBQUNEO1lBQVk7WUFDMUIsQ0FBQ0E7WUFBc0I7WUFBRztZQUNoQjtZQUFhO1lBQUc7U0FFM0IsRUFDREUsaUJBQWlCQyxJQUFBQSxrQkFBVSxFQUFDO2VBQUtOO1lBQTBCO1NBQUcsRUFBRUk7UUFFdEUsSUFBSSxDQUFDVCxNQUFNLEdBQUdZLElBQUFBLFlBQUksRUFBQyxJQUFJLENBQUNaLE1BQU0sRUFBRVU7SUFDbEM7SUFFQSxPQUFPRyxrQkFBa0JDLGFBQWEsRUFBRTtRQUN0QyxNQUFNZCxTQUFTO2VBQUtjO1lBQWU7U0FBRyxFQUNoQ2IsWUFBWSxPQUNaYyxPQUFPLElBQUloQixLQUFLQyxRQUFRQztRQUU5QixPQUFPYztJQUNUO0lBRUEsT0FBT0MsOEJBQThCRixhQUFhLEVBQUViLFNBQVMsRUFBRTtRQUM3RCxNQUFNRCxTQUFTO2VBQUtjO1lBQWU7U0FBRyxFQUNoQ0MsT0FBTyxJQUFJaEIsS0FBS0MsUUFBUUM7UUFFOUIsT0FBT2M7SUFDVDtBQUNGIn0=