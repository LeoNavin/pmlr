import React from 'react';




const  FormElements=React.lazy (() => import('./pages/Form/FormElements'));

const  Chart=React.lazy (() => import('./pages/Chart'));
const  Calendar=React.lazy (() => import('./pages/Calendar'));
const  Profile=React.lazy (() => import('./pages/Profile'));
const  FormLayout=React.lazy (() => import('./pages/Form/FormLayout'));

const  Settings=React.lazy (() => import('./pages/Settings'));
const  Tables=React.lazy (() => import('./pages/Tables'));
const  ECommerce=React.lazy (() => import('./pages/Dashboard/ECommerce'));


const  Alerts=React.lazy (() => import('./pages/UiElements/Alerts'));
const  Buttons=React.lazy (() => import('./pages/UiElements/Buttons'));
const  Form=React.lazy (() => import('./pages/Form/Form'));

const routes = [
    {
        path: '/Calendar',
        element:Calendar,
        name:Calendar
    },
    {
        path: '/dashboard/ECommerce',
        element:ECommerce,
        name:ECommerce
    },
    {
        path: '/chart',
        element:Chart,
        name:Chart
    },
    {
        path: '/forms/elements',
        element:FormElements,
        name:FormElements
    },
    {
        path: '/forms/layout',
        element:FormLayout,
        name:FormLayout
    },
    {
        path: '/profile',
        element:Profile,
        name:Profile
    },
    {
        path: '/settings',
        element:Settings,
        name:Settings
    },
    {
        path: '/tables',
        element:Tables,
        name:Tables
    },

    {
        path: '/ui/alerts',
        element:Alerts,
        name:Alerts
    },
    {
        path: '/ui/buttons',
        element:Buttons,
        name:Buttons
    },
    {
        path: '/forms/form',
        element:Form,
        name:Form
    },


];  

export default routes;