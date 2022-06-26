import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../core/layout';
import { aMenuItems } from '../../models/menu-items';
import { loadRobotsAction } from '../../reducers/action.creators';
import { HttpStoreRobots } from '../../services/store.robots';
import './App.css';

function App() {
    const dispatcher = useDispatch();
    const apiRobots = useMemo(() => new HttpStoreRobots(), []);

    useEffect(() => {
        apiRobots
            .getRobots()
            .then((robots) => dispatcher(loadRobotsAction(robots)));
    }, [apiRobots, dispatcher]);

    const HomePage = React.lazy(() => import('../../pages/homePage'));
    const FavPage = React.lazy(() => import('../../pages/favPage'));

    const options: aMenuItems = [
        { path: '', label: 'Home', page: <HomePage /> },
        { path: 'favorites', label: 'Favorites', page: <FavPage /> },
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
