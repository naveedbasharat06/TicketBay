import { observable, action, makeObservable } from "mobx";
class usersStore {
  users: any[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action,
      removeUser: action,
    });
    this.loadFromLocalStorage();
  }

  addUser(user: any) {
    // Replace the entire array with the new user
    this.users = [user];
    this.saveToLocalStorage();
  }

  removeUser(userId: string) {
    this.users = this.users.filter((user: any) => user.id !== userId);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  loadFromLocalStorage() {
    if (typeof localStorage !== "undefined") {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        try {
          this.users = JSON.parse(storedUsers);
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
          // Handle the error appropriately, e.g., display an error message to the user
        }
      }
    }
  }
}

const UsersStore = new usersStore();
export default UsersStore;

