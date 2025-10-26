"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongestPassword = void 0;
class LongestPassword {
    Solution(S) {
        const reference = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let wordLength = 0;
        let wordArray = S.split(" ");
        for (let word of wordArray) {
            let containsReference = true;
            let wordOddCount = 0;
            let wordEvenCount = 0;
            if (word.length % 2 == 0)
                continue;
            for (let letter of word) {
                if (!reference.includes(letter)) {
                    containsReference = false;
                    break;
                }
                else {
                    containsReference = true;
                    if (/[0-9]+/.test(letter))
                        wordOddCount++;
                    if (/[a-z]+/.test(letter) || /[A-Z]/.test(letter))
                        wordEvenCount++;
                }
            }
            if (containsReference && (wordEvenCount % 2 == 0) && (wordOddCount % 2 == 1)) {
                wordLength = (wordLength < (wordEvenCount + wordOddCount)) ? wordEvenCount + wordOddCount : wordLength;
            }
            ;
        }
        return wordLength == 0 ? -1 : wordLength;
    }
}
exports.LongestPassword = LongestPassword;
;
