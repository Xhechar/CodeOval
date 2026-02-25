"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTrimmer = void 0;
class MessageTrimmer {
    static Solution(message) {
        if (message.length <= 15) {
            return message;
        }
        else {
            let required = message.substring(0, 16);
            let addDot = required.lastIndexOf(" ") < 12;
            if (addDot) {
                return message.slice(0, required.lastIndexOf(" ") + 1) + '...';
            }
            else {
                let trimmed = required.slice(0, required.lastIndexOf(" "));
                return trimmed.substring(0, trimmed.lastIndexOf(" ") + 1) + '...';
            }
        }
    }
}
exports.MessageTrimmer = MessageTrimmer;
