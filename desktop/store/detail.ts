import { ref, Ref } from "vue";
import { defineStore } from "pinia";

interface DetailState {
    dataDetail: Ref<Object>;
    n: number;
    myRef: Ref<string>;
}

export const useDetail = defineStore('detail', {
    state: (): DetailState => ({
        dataDetail: {} as any,
        n: 5,
        myRef: ref('hello'),
    }),
    actions: {
        increment() {
            this.n++;
        },
    }
})

