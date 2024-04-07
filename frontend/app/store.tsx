import { makeAutoObservable } from "mobx";

class RootStore {
  isLoggedIn = false;
  userData = null;
  medicineData = [];
  orders = [];
  users = [];
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Login action
  login(data) {
    this.isLoggedIn = true;
    this.userData = data;
    this.error = null;
  }

  // Logout action
  logout() {
    this.isLoggedIn = false;
    this.userData = null;
    this.error = null;
  }

  // Set medicine data
  setMedicineData(data) {
    this.medicineData = data;
  }

  // Set orders
  setOrders(data) {
    this.orders = data;
  }

  // Set users
  setUsers(data) {
    this.users = data;
  }

  // Set error message
  setError(error) {
    this.error = error;
  }
}

const rootStore = new RootStore();
export default rootStore;
