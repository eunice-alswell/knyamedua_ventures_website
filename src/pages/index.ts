import {lazy} from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Products = lazy(() => import('./Products'));
const Contact = lazy(() => import('./Contact'));
const ProductCatalog = lazy(() => import('./productCatalog'));

const Pages = {
    Home,
    About,
    Services,
    Products,
    Contact,
    ProductCatalog
}

export default Pages;