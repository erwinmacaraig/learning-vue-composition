
<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle}}</h2>
    <h3>{{counter.title}}</h3>
    <div>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{counter.count}}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}.</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input type="text" v-model="counter.title">
    </div>
  </div>
</template>

<script setup>
  import { onActivated, onDeactivated, ref } from  'vue'
  import {useCounterStore} from '@/stores/counter'

  const counter = useCounterStore()

  const appTitle = ref('Counter Example')
  onActivated(() => {
    console.log('onActivated')
  })

  onDeactivated(() => {
    console.log('onDeactivated')
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
