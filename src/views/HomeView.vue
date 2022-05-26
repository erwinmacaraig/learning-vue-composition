
<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle}}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(3)" class="btn">-</button>
      <span class="counter">{{counterData.count}}</span>
      <button @click="increaseCounter(2)" class="btn">+</button>
    </div>

    <p>This counter is {{oddOrEven}}.</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input type="text" v-model="counterData.title">
    </div>
  </div>
</template>

<!--
<script>
  export default {
    data(){
      return {
        counter: 0
      }
    },
    methods: {
      increaseCounter() {
        this.counter++
      },
      decreaseCounter(){
        this.counter--
      }
    }
  }
</script>
-->

<!--
<script>
import {ref} from 'vue';
export default {
  setup() {
      const counter = ref(0)

      const increaseCounter = () => {
        counter.value++
      }
      const decreaseCounter = () => {
        counter.value--
      }

      return {
        counter,
        increaseCounter,
        decreaseCounter
      }
    }
}  
</script>
 -->

<script setup>
  import { ref, reactive, computed, watch, onActivated, onDeactivated, onMounted } from  'vue'
  
  const counter = ref(0)
  const counterTitle = ref('My Counter')
  const appTitle = 'My Ok Counter'

  const appTitleRef = ref(null)
  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0){
      return 'even';
    }
    return 'odd';
  })
  const increaseCounter = (amount) => {
    counter.value++
    counterData.count+=amount
  }
  const decreaseCounter = (amount) => {
    counter.value--
    counterData.count-=amount
  }

  watch(() => counterData.count, (newValue, oldValue) => {
    if (newValue >= 20) {
      alert('Reached limit to trigger watcher')
    }
  })

  onActivated(() => {
    console.log('onActivated')
  })

  onDeactivated(() => {
    console.log('onDeactivated')
  })

  onMounted(() => {
    console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`)
  })
</script>

<style>
.home {
  text-align: center;
  padding: 20px;

}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
