<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal=true">Show Modal</button>
        <teleport to=".modals-container">
            <div
            v-if="showModal"
            class="modal"
            >
                <h1>This is a modal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem omnis at totam et consequatur repellat consequuntur odio corrupti deserunt laborum. Explicabo nam perspiciatis temporibus ipsam distinctio quis alias minus sint.</p>
                <button @click="showModal = false">Hide modal</button>
            </div>
        </teleport>
        
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const showModal = ref(false);
</script>

<style scoped>
    .modal {
        background: beige;
        padding: 10px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

</style>