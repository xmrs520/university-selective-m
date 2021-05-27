import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const USER_KEY = 'select-user'
const COURES_KEY = 'course-info'
const SELECTED_KEY = 'selected-course'
const USERINFRO_KEY = 'user-info'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY),
    CourseInfo: getItem(COURES_KEY),
    SelectedCourse: getItem(SELECTED_KEY),
    UserInfo: getItem(USERINFRO_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // window.sessionStorage.setItem('user', JSON.stringify(state.user))
      setItem(USER_KEY, state.user)
    },
    setCourseInfo (state, data) {
      state.CourseInfo = data
      setItem(COURES_KEY, state.CourseInfo)
    },
    setSelectedCourse (state, data) {
      state.SelectedCourse = data
      setItem(SELECTED_KEY, state.SelectedCourse)
    },
    setUserInfo (state, data) {
      state.UserInfo = data
      setItem(USERINFRO_KEY, state.UserInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
