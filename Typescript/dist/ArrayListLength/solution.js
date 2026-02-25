"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrListLen = void 0;
class ArrListLen {
    static Solution(A) {
        let length = 1;
        let result = A[0];
        while (result !== -1) {
            result = A[result];
            length++;
        }
        return length;
    }
}
exports.ArrListLen = ArrListLen;
