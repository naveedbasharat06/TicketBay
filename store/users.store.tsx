import { observable, action, makeObservable } from "mobx";
class usersStore {
  users: any[] = [];
  token = null;

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action,
      removeUser: action,
      setToken: action,
      clearToken: action,
    });
    this.loadFromLocalStorage();
  }

  addUser(user: any) {
    this.users = [user];
    this.saveToLocalStorage();
  }

  removeUser(userId: any) {
    this.users = this.users.filter((user: any) => user.id !== userId);
    this.saveToLocalStorage();
  }

  setToken(token: any) {
    this.token = token;
    this.saveToLocalStorage();
  }

  clearToken() {
    this.token = null;
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("token", JSON.stringify(this.token));
  }

  loadFromLocalStorage() {
    if (typeof localStorage !== "undefined") {
      const storedUsers = localStorage.getItem("users");
      const storedToken = localStorage.getItem("token");
      if (storedUsers) {
        try {
          this.users = JSON.parse(storedUsers);
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
          // Handle the error appropriately, e.g., display an error message to the user
        }
      }

      if (storedToken) {
        try {
          this.token = JSON.parse(storedToken);
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
