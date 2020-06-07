export class Ticket {
  id: number;
  accountId: number; // c'est nummero de compte
  title = '';

  category = '';
  text = '';
  publishDate: any;
  userId: number;

  // constructor(id: number) {    this.accountId = id;  }
  public getAccountID(): number {
    return this.accountId;
  }

  public setAccountID(newAccountID: number) {
    this.accountId = newAccountID;
  }
}

// const ticket = new Ticket();
// ticket.id = 6;
