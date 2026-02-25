
export class MessageTrimmer {
  static Solution(message: string): string {
    if(message.length <= 15) {
      return message;
    } else {
      let required: string = message.substring(0, 16);
      let addDot:boolean = required.lastIndexOf(" ") < 12;
      
      if(addDot) {
        return message.slice(0, required.lastIndexOf(" ") + 1) + '...'
      } else {
        let trimmed = required.slice(0, required.lastIndexOf(" "));
        return trimmed.substring(0, trimmed.lastIndexOf(" ") + 1) + '...'
      }
    }
  }
}