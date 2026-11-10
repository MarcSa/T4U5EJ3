<script setup lang="ts">
import { ref, watch } from 'vue';
import type { CounterProps } from '@/interfaces/counter-props.interface';
import { useCounterMath } from '@/composables/useCounterMath';

const props = withDefaults(defineProps<CounterProps>(), { initial: 0, step: 1 });
const emit = defineEmits<{ (e: 'update', value: number): void }>();

const count = ref<number>(props.initial);

const increment = () => {
    count.value += props.step;
};

const decrement = () => {
    count.value -= props.step;
};

watch(count, (v) => emit('update', v));

const { square, factorial } = useCounterMath(count);
</script>

<template>
    <section class="card mb-4">
        <div class="card-header">
            <h2>Contador</h2>
        </div>
        <div class="card-body">
            <p data-test="counter" class="lead" :class="{ 'text-danger fw-bold': count >= 10 }">
                Valor: {{ count }}
            </p>
            <div>
                <button class="btn btn-primary me-2" @click="decrement">-{{ props.step }}</button>
                <button data-test="btn-increment" class="btn btn-primary" @click="increment">
                    +{{ props.step }}
                </button>
            </div>
            <hr />
            <h3>Operaciones</h3>
            <p>Cuadrado: {{ square }}</p>
            <p data-test="factorial">Factorial: {{ factorial }}</p>
        </div>
    </section>
</template>

<style scoped></style>
