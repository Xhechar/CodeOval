"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingBill = void 0;
class ParkingBill {
    static returnMinutes(time) {
        let rep = time.split(":");
        return (Number(rep[0]) * 60 + Number(rep[1]));
    }
    static Solution(E, L) {
        let time = 2;
        let timeDifference = this.returnMinutes(L) - this.returnMinutes(E);
        let hrs = timeDifference / 60;
        timeDifference % 60 === 0
            ? (time += 3 + ((hrs - 1) * 4))
            : (time += 3 + (Math.floor(hrs) * 4));
        return time;
    }
}
exports.ParkingBill = ParkingBill;
