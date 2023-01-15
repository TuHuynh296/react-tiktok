import { Routes, Route } from 'react-router-dom'
import { Home, Login, Navbar, OrderSummary, PageNotFound, Products, Profile, RequireAuth } from './components'
import { ProductFeatured, ProductNew } from './components/Products';
import { Admin, UserDetail, Users } from './components/Users';
import { Suspense, lazy } from 'react';
import { AuthProvider } from '~/Lessions/ReactRouterTutorial/components/auth';


const LazyAboutComponent = lazy(() => import('./components/About'))
function ReactRouterTutorial() {
    return (
        <div>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="about"
                        element={
                            <Suspense fallback='loading ...'>
                                <LazyAboutComponent />
                            </Suspense>
                        }>
                    </Route>
                    <Route path="order-summary" element={<OrderSummary />}></Route>
                    <Route path="products" element={<Products />}>
                        <Route index element={<ProductFeatured />} />
                        <Route path="featured" element={<ProductFeatured />} />
                        <Route path="new" element={<ProductNew />} />
                    </Route>

                    <Route path="users" element={<Users />}>
                        {/* <Route path=':userId' element={<UserDetail/>}></Route>
                    <Route path='admin' element={<Admin/>}></Route> */}
                    </Route>

                    {/* Absolute path */}
                    <Route path='users/:userId' element={<UserDetail />}></Route>
                    <Route path='users/admin' element={<Admin />}></Route>

                    <Route path='profile' element={
                        <RequireAuth><Profile /></RequireAuth>}>
                    </Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default ReactRouterTutorial;