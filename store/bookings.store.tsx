import { observable, action, makeObservable } from "mobx";
class BookingsStore {
  [x: string]: any;
  bookings: any[] = [];

  constructor() {
    makeObservable(this, {
      bookings: observable,
      addBooking: action,
      removeBooking: action,
    });
    this.loadFromLocalStorage();
  }

  addBooking(booking: any) {
    this.bookings.push(booking);
    this.saveToLocalStorage();
  }

  removeBooking(bookingId: string) {
    this.bookings = this.bookings.filter((booking) => booking.id !== bookingId);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("bookings", JSON.stringify(this.bookings));
  }

  loadFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const storedBookings = localStorage.getItem("bookings");
      if (storedBookings) {
        this.bookings = JSON.parse(storedBookings);
      }
    }
  }
  
}

const bookingsStore = new BookingsStore();
export default bookingsStore;
