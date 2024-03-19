import {createRouter, createWebHistory } from 'vue-router'


const routers=[
    {
        path:"/",
        name:"Home",
        component:()=>import('../components/Home.vue')
    },
    {
        path:"/about",
        name:"About",
        component:()=>import('../components/About.vue')
    },
    {
        path:"/contact",
        name:"Contact",
        component:()=>import('../components/Contact.vue')
    },
    {
        path:"/details",
        name:"Details",
        component:()=>import('../components/Details.vue')
    },
    {
        path:"/resume",
        name:"Resume",
        component:()=>import('../components/Resume.vue')
    },
    {
        path:"/services",
        name:"Services",
        component:()=>import('../components/Services.vue')
    },
    {
        path:"/works",
        name:"Works",
        component:()=>import('../components/Works.vue')
    },
    // catchall 404
    // {
	//     path:"/:catchAll(.*)",
	//     name:"NotFound",
	//     component:NotFound
    // }
];

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routers
});

export default router;