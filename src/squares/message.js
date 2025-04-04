export class Message {
    
    static Body = new Message('empty');
    static ID = new Message('unknown');
    static SquareID = new Message('0');
    
    // static Unknown = new AuthState('unknown');
    // static Authenticated = new AuthState('authenticated');
    // static Unauthenticated = new AuthState('unauthenticated');
  
    constructor(name) {
      this.name = name;
    }
  }
  