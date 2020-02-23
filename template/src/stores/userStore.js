import { observable } from 'mobx'

class UserStore {
  @observable user = {}
}

const userStore = new UserStore()
export default userStore
