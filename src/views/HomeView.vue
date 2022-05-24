
<template>
  <div class="home">
    <div>
    <button @click="decreaseConter" class="btn">-</button>
    <span class="counter">{{counter}}</span>
    <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>

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
      decreaseConter(){
        this.counter--
      }
    }
  }
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
</style>
