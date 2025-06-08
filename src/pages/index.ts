import {lazy} from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Products = lazy(() => import('./Products'));
const Contact = lazy(() => import('./Contact'));

const Pages = {
    Home,
    About,
    Services,
    Products,
    Contact
}

export default Pages;