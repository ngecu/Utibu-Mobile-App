
import { makeAutoObservable } from 'mobx';

const Store = () => {
  const state = {
    customer: null,
  };

  const fetchUserData = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/customer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const userData = await response.json();
      state.customer = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  makeAutoObservable(state);

  return {
    ...state,
    fetchUserData,
  };
};

export default Store();
