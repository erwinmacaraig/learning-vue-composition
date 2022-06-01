<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label for="">Show dark modals? </label>
            <input type="checkbox" name="" id="" v-model="showDarkModals">
        </div>
        <button @click="showModal=true">Show Modal</button>
        <component
          v-if="showModal"
          v-model="showModal"
          :is="showDarkModals ? ModalDark: Modal"
          :userData="userData"
          @hideModal="showModal = false"
        >
            <!-- <template v-slot:title>My New Title</template>  -->
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem omnis at totam et consequatur repellat consequuntur odio corrupti deserunt laborum. Explicabo nam perspiciatis temporibus ipsam distinctio quis alias minus sint.</p>
        </component>
        
    </div>
    <pre>{{showDarkModals}}</pre>
</template>

<script setup>
    import Modal from '@/components/Modal.vue'
    import ModalDark from '@/components/ModalDark.vue'
    import {ref} from 'vue';
    const showModal = ref(false);
    const showDarkModals  = ref(false)

    const props = defineProps({
        userData: {
            type: Object
        }
    })
</script>

<style scoped>
    

</style>