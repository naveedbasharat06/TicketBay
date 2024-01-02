import { observable, action, makeObservable } from "mobx";

class TicketStore {
  [x: string]: any;
  tickets: any[] = [];

  constructor() {
    makeObservable(this, {
      tickets: observable,
      addticket: action,
      removeticket: action,
    });
    this.loadFromLocalStorage();
  }

  addticket(ticket: any) {
    // Replace the existing array with a new array containing only the new ticket
    this.tickets = [ticket];
    this.saveToLocalStorage();
  }

  removeticket(ticketId: string) {
    this.tickets = this.tickets.filter((ticket) => ticket.id !== ticketId);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("tickets", JSON.stringify(this.tickets));
  }

  loadFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const storedtickets = localStorage.getItem("tickets");
      if (storedtickets) {
        this.tickets = JSON.parse(storedtickets);
      }
    }
  }
}

const ticketStore = new TicketStore();
export default ticketStore;
