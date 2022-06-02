import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 7,
    title: 'The Counter Title'
  }),
  getters: {
    oddOrEven: (state) => { 
      if (state.count % 2 === 0) return 'even'
      return 'odd'
    }
  },
  actions: {
    increaseCounter(amount) { 
      this.count += amount
    },
    decreaseCounter(amount){ 
      this.count -= amount
    }
  }
})
