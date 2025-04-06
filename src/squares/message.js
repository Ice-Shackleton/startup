export class Message {
    
    static Body = new Message('empty');
    static ID = new Message('unknown');
    static SquareID = new Message('0');
  
    constructor(name) {
      this.name = name;
    }
  }
  