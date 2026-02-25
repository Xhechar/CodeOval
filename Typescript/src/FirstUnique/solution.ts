
export class FirstUnique {
  static Solution(A: number[]): number {
    let uniqueNumbers: number[] = [];

    for(let a of A) {
      let numIndex = uniqueNumbers.indexOf(a);
      
      if(numIndex === -1) {
        uniqueNumbers.push(a);
      } else {
        uniqueNumbers.splice(numIndex, 1);
      }
    }
    
    return uniqueNumbers.length > 0 ? uniqueNumbers[0] : -1;
  }
}