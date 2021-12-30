
import { ref, Ref } from "vue";
import { defineStore } from "pinia";

interface CounterState {
    showSidebar: Ref<boolean>;
    showSearch: Ref<boolean>;
}

export const useCounter = defineStore('counter', {
    state: (): CounterState => ({
        showSidebar: ref(false),
        showSearch: ref(false)
    }),
    actions: {
    }
})