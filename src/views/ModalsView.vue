<template>
    <div class="modals">
        <h1>Modals</h1>
        
        <button @click="showModal=true">Show Modal</button>
        <Modal v-if="showModal" @hideModal="showModal = false" v-model="showModal">
            <!-- <template v-slot:title>My New Title</template>  -->
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem omnis at totam et consequatur repellat consequuntur odio corrupti deserunt laborum. Explicabo nam perspiciatis temporibus ipsam distinctio quis alias minus sint.</p>
        </Modal>
        
    </div>
</template>

<script setup>
    import Modal from '@/components/Modal.vue'
    import {ref} from 'vue';
    const showModal = ref(false);
</script>

<style scoped>
    

</style>