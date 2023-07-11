import { createContext, useContext } from 'react';
import UserStore from './user/userStore';

const userStore = new UserStore();

const store = {
  userStore
};

const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
