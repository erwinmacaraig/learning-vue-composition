import { ref, reactive, computed, watch } from 'vue'

const counterData = reactive({
        count: 0,
        title: 'My Counter'
})
    
export function useCounter() {
    
    const counter = ref(0)
    const counterTitle = ref('My Counter')
    const appTitle = 'My Ok Counter'

    const appTitleRef = ref(null)
    

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

    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
    }
}