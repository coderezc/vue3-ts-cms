import { createStore } from 'vuex'
import { IRootState } from './type'
import login from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      userId: 'coderezc',
      age: 18
    }
  },
  modules: {
    login
  }
})

export default store
