import React from 'react';
import { Provider } from 'react-redux';

import './index.scss';

import { store } from '../redux/store';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'src/components/header';
import { Sidebar } from 'src/components/sidebar';
import { Player } from 'src/components/player';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes />
                <Player />
            </BrowserRouter>
        </Provider>
    );
};
