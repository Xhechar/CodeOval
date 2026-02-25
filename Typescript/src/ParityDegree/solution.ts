
export class ParityDegree {
  static Solution(num: number): number {

    let isDecided: boolean = false;
    let count: number = 0;
    let multiplier: number = 2;

    if(num == 0) isDecided = true;

    while(!isDecided) {
      if(num % multiplier == 0) {
        count ++;
        multiplier = multiplier * 2;
        continue;
      }

      isDecided = true;
    }

    return count;
  }
}