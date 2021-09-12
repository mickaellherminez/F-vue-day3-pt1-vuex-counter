import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentValue: 0
  },
  // Commit => mutations
  mutations: {
    INCREMENT_COUNTER(state) {
      state.currentValue += 1;
    },
    DECREMENT_COUNTER(state) {
      state.currentValue -= 1;
    }
  },
  // Dispatch => actions
  actions: {
  },
  modules: {
  }
})
