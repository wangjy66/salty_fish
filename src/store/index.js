import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // counter: 1000,
    // students: [
    //   {age:100, name:233},
    //   {age:100, name:233},
    //   {age:100, name:233}
    // ]
  },
  mutations: {
    // // 方法
    // increment() {
    //   state.counter++
    // }
    // 在实际用的vue文件的methods中定义方法 用this.$store.commit('increment')// 可以用chrome的vue.js.devtools查看每次提交操作时的数据状态
  },
  actions: {

  },
  getters: {
    // powerCounter (state) { // 默认参数state，在别的地方用$store.getters.powerCounter// 类计算属性
    //   return state.counter * this.counter
    // },
    // more20stu (state) {
    //   return state.students.filter(s => s.age >20)
    // },
    // more20stuLength (state,getters) { // 这个getters为25行的getters
    //   return getters.more20stu.length
    // }
    // 返回函数，filter

    // 用Vue.set和Vue.delete改数据，用才是响应式，没有Vue.的话展示时不会改变
  },
  modules: {

  }
})
export default store
