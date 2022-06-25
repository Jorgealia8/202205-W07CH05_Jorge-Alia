import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../core/layout';
import { aMenuItems } from '../../models/menu-items';
import './App.css';

function App() {
    const HomePage = React.lazy(() => import('../../pages/homePage'));

    const options: aMenuItems = [
        { path: '', label: 'Home', page: <HomePage /> },
    ];

    return (
        <Router>
            <Layout options={options}>
                <React.Suspense>
                    <React.StrictMode>
                        <Routes>
                            {options.map((item) => (
                                <Route
                                    key={item.label}
                                    path={item.path}
                                    element={item.page}
                                ></Route>
                            ))}
                        </Routes>
                    </React.StrictMode>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
