
export class ArrListLen {
  static Solution (A: Array<number>): number {
    let length: number = 1;
    let result: number = A[0];

    while(result !== -1) {
      result = A[result];
      length++;
    }

    return length;
  }
}