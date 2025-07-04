import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Pages from './pages/index';

const RouterCom = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Define "/" route for Home */}
                <Route path="/" element={<Pages.Home />} />

                {/* Dynamically create routes for the rest, excluding Home */}
                {Pages &&
                    Object.entries(Pages).map(([name, Page]) => {
                        if (name === "Home") return null; // skip Home
                        if (name === "ProductCatalog") {
                            return(
                                <Route
                                    key={name}
                                    path='/products/:productSlug'
                                    element={<Pages.ProductCatalog/>}
                                />
                            )
                        }

                        return (
                            <Route
                                key={name}
                                path={`/${name.toLowerCase()}`}
                                element={<Page />}
                            />
                        );
                    })}

                {/* Fallback for undefined routes */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </Suspense>
    );
};

export default RouterCom;
