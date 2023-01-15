import { Fragment } from 'react';
import { Following, Profile, Upload, Home } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/components/Layout'

class PublicRouteModel {
    constructor({path, component, layout = DefaultLayout}) {
        this.path = path;
        this.component = component;
        this.layout = layout === null ? Fragment : layout;
    }
}

// Public Routes
export const publicRoutes = [
    // {
    //     path: '/', component: Home
    // },
    // {
    //     path: '/following', component: Following
    // },
    // {
    //     path: '/profile', component: Profile
    // },
    new PublicRouteModel({path: '/', component: Home}),
    new PublicRouteModel({path: '/following', component: Following}),
    new PublicRouteModel({path: '/profile', component: Profile}),
    new PublicRouteModel({path: '/upload', component: Upload, layout: HeaderOnly})
];

// Private Routes
export const privateRoutes = [
];