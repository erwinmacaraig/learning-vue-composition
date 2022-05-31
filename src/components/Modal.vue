<template>
    <teleport to=".modals-container">
            <div
            v-if="modelValue"
            class="modal"
            >
                <!-- <h1><slot name="title"></slot></h1> -->
                <h1>{{title}}</h1>
                <slot></slot>
                <!-- <button @click="$emit('hideModal')">Hide modal</button> -->
                <button @click="handleButtonClick">Hide Modal</button>                
            </div>
        </teleport>
</template>

<script setup>
import { useSlots } from 'vue'
const slots = useSlots()
// console.log(slots.title())
const props = defineProps({
    firstName: {
        type: String,
        default: 'Default value'
    },
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'There is no title specified'
    }
})

const emit = defineEmits(['hideModal', 'update:modelValue'])

const handleButtonClick = () => {
    console.log('handle button click')
    // emit('hideModal')
    emit('update:modelValue', false)
}
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