import { test, expect, describe } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import App from '@/App.vue';
import CounterComponent from '@/components/CounterComponent.vue';
import AboutPage from '@/components/AboutPage.vue';

const createTestRouter = () =>
    createRouter({
        history: createMemoryHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: CounterComponent,
            },
            {
                path: '/about',
                name: 'about',
                component: AboutPage,
            },
        ],
    });

describe('Basic Router', () => {
    test('should display the counter in the root "/"', async () => {
        // Arrange
        const router = createTestRouter();
        await router.push('/');
        await router.isReady();

        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });
        // Act
        const texto = wrapper.html();

        // Assert
        expect(texto).toContain('Contador');
    });
    test('should display the page about in the route "/about"', async () => {
        // Arrange
        const router = createTestRouter();
        await router.push('/about');
        await router.isReady();

        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });
        // Act
        const texto = wrapper.html();

        // Assert
        expect(texto).toContain('Page ABOUT');
    });
    test('should navigate to about page when link clicked', async () => {
        // Arrange
        const router = createTestRouter();
        await router.push('/');
        await router.isReady();

        const wrapper = mount(App, {
            global: { plugins: [router] },
        });
        const linkAbout = wrapper.get('[data-test="link-about"]');

        // Act
        await linkAbout.trigger('click');
        await flushPromises();

        // Assert
        expect(router.currentRoute.value.path).toBe('/about');
        expect(wrapper.html()).toContain('Page ABOUT');
    });
});
