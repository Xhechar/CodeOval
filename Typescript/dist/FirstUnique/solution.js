"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstUnique = void 0;
class FirstUnique {
    static Solution(A) {
        let uniqueNumbers = [];
        for (let a of A) {
            let numIndex = uniqueNumbers.indexOf(a);
            if (numIndex === -1) {
                uniqueNumbers.push(a);
            }
            else {
                uniqueNumbers.splice(numIndex, 1);
            }
        }
        return uniqueNumbers.length > 0 ? uniqueNumbers[0] : -1;
    }
}
exports.FirstUnique = FirstUnique;
