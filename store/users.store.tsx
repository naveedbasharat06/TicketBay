import { observable, action, makeObservable } from "mobx";
class usersStore {
  [x: string]: any;
  users: any[] = [];
  currentUserId = null;

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action,
      removeUser: action,
      getUserByEmail: action,
      currentUserId: observable,
      setCurrentUserId: action,
      getCurrentUserId: action,
    });
    this.loadFromLocalStorage();
  }

  addUser(user: any) {
    this.users.push(user);
    this.saveToLocalStorage();
  }

  removeUser(userId: string) {
    this.users = this.users.filter((user: any) => user.id !== userId);
    this.saveToLocalStorage();
  }

  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
  setCurrentUserId(userId: any) {
    this.currentUserId = userId;
    this.saveToLocalStorage();
  }

  getCurrentUserId() {
    return this.currentUserId;
  }

  saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("currentUserId", JSON.stringify(this.currentUserId));
  }

  loadFromLocalStorage() {
    
    if (typeof localStorage !== "undefined") {
      const storedusers = localStorage.getItem("users");
      const storedCurrentUserId = localStorage.getItem("currentUserId");
      if (storedusers) {
        try {
          this.users = JSON.parse(storedusers);
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
          // Handle the error appropriately, e.g., display an error message to the user
        }
      }

      if (storedCurrentUserId) {
        try {
          this.currentUserId = JSON.parse(storedCurrentUserId);
        } catch (error) {
          console.error(
            "Error parsing currentUserId from localStorage:",
            error
          );
          // Handle the error appropriately, e.g., display an error message to the user
        }
      }
    }
  }
}

const UsersStore = new usersStore();
export default UsersStore;
