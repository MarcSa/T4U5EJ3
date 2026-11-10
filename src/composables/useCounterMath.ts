import { computed, type Ref } from 'vue';

export const useCounterMath = (count: Ref<number>) => {
    const square = computed(() => count.value * count.value);

    const factorialOf = (n: number): number => {
        if (n < 0) return NaN;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    };

    const factorial = computed(() => factorialOf(count.value));
    return { square, factorial };
};
