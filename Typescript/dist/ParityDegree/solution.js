"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParityDegree = void 0;
class ParityDegree {
    static Solution(num) {
        let isDecided = false;
        let count = 0;
        let multiplier = 2;
        if (num == 0)
            isDecided = true;
        while (!isDecided) {
            if (num % multiplier == 0) {
                count++;
                multiplier = multiplier * 2;
                continue;
            }
            isDecided = true;
        }
        return count;
    }
}
exports.ParityDegree = ParityDegree;
