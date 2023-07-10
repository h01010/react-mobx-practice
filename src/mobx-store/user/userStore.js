import { makeAutoObservable, runInAction } from 'mobx';

class UserStore {
  name = 'Yeonju Seo';

  constructor() {
    makeAutoObservable(this);
  }

  updateName = (newName) => {
    runInAction(() => {
      this.name = newName;
    });
  };
}

export default UserStore;
