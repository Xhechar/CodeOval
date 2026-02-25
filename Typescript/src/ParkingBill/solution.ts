
export class ParkingBill {

  private static returnMinutes(time: string): number {
    let rep = time.split(":");
    
    return (Number(rep[0]) * 60 + Number(rep[1]));
  }

  static Solution(E: string, L: string): number {
    let time: number = 2;

    let timeDifference: number = this.returnMinutes(L) - this.returnMinutes(E);

    let hrs = timeDifference / 60;

    timeDifference % 60 === 0
      ? (time += 3 + ((hrs - 1) * 4))
      : (time += 3 + (Math.floor(hrs) * 4));

    return time;
  }
}