import { createStore } from 'vuex'
import colors from '@/assets/data/colors'

const state = {
  colors,
}

const mutations = {}
const actions = {}

const store = createStore({
  state,
  mutations,
  actions,
})

export default store
