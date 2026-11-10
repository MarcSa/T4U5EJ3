import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/components/AboutPage.vue';
import CounterComponent from '@/components/CounterComponent.vue';

const routes = [
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
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
