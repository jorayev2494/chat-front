import LayoutComponent from '@/components/authentication/LayoutComponent.vue';
import LoginComponent from '@/components/authentication/LoginComponent.vue';
import RegisterComponent from '@/components/authentication/RegisterComponent.vue';

let routes = [
    {
        path: '/',
        name: 'index',
        component: LayoutComponent,
        children: [
            { 
                path: '/login',
                name: 'login',
                component: LoginComponent
            },
            { 
                path: '/register',
                name: 'register',
                component: RegisterComponent
            },
        ],
    },
    {
        path: '/application',
        name: 'application',
        component: () => require('@/components/app/LayoutComponent.vue'),
        // children: [
        //     {
        //         path: '/chats',
        //         name: 'chats',
        //         component: () => require('@/components/app/')
        //     },
        // ]
    },
];

export default routes;