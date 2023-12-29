import { fetchAllLookups } from "@/services/lookups";
import { makeObservable, observable, action } from "mobx";
export class LookupStore {
  loading = false;
  isLoaded = false;
  systemLookups: any = {};

  constructor() {
    makeObservable(this, {
      systemLookups: observable,
      loading: observable,
      isLoaded: observable,
      setLoading: action,
      setSystemLookups: action,
      getSystemLookups: action,
    });
    this.getSystemLookups();
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setIsLoaded(value: boolean) {
    this.isLoaded = value;
  }

  setSystemLookups(lookups: any) {
    this.systemLookups = lookups;
  }

  handleLookupsResponse = (lookups: any): any => {
    // Process the data if needed. For now, we're just returning the lookups directly.
    return {
      ...lookups,
      events: lookups.events,
      getCategories:lookups.getCategories,
      bookings:lookups.bookings,
    };
  };

  getSystemLookups = async () => {
    try {
      this.setLoading(true);
      const lookups = await fetchAllLookups();
      const processedLookups = this.handleLookupsResponse(lookups);
      this.setSystemLookups(processedLookups);
    } catch (error) {
      console.error("Failed to get system lookups", error);
    } finally {
      this.setLoading(false);
      this.setIsLoaded(true);
    }
  };
}

const Store = new LookupStore();
export default Store;
