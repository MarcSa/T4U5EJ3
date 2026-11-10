import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import CounterFactorial from '@/components/CounterComponent.vue';

describe('CounterComponent.vue', () => {
    test('Should display the counter at 0 and the factorial at 1 on initialization.', async () => {
        // Arrange
        const wrapper = mount(CounterFactorial);
        const botton = wrapper.get('[data-test="btn-increment"]');

        // Act
        await botton.trigger('click');

        const textoContador = wrapper.get('[data-test="counter"]').text();
        const textoFactorial = wrapper.get('[data-test="factorial"]').text();

        // Assert
        expect(textoContador).toContain('1');
        expect(textoFactorial).toContain('1');
    });
    test('Should calculate the factorial after increment multiple times.', async () => {
        // Arrange
        const wrapper = mount(CounterFactorial);
        const botton = wrapper.get('[data-test="btn-increment"]');

        // Act
        await botton.trigger('click');
        await botton.trigger('click');
        await botton.trigger('click');

        const textoContador = wrapper.get('[data-test="counter"]').text();
        const textoFactorial = wrapper.get('[data-test="factorial"]').text();

        // Assert
        expect(textoContador).toContain('3');
        expect(textoFactorial).toContain('6');
    });
});
