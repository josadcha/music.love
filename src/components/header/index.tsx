import React, { useCallback } from 'react';

import './index.scss';

import { Account } from '../account';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from 'src/redux/common';

export const Header: React.FC = () => {
    const isMobileDeviceCurrent = (window.innerWidth < 768) || (window.innerHeight < 600);

    const dispatch = useDispatch();
    const handleClick = useCallback((event: any) => {
        dispatch(toggleSidebar());
    }, []);

    const hamburgerButton = (
        <button onClick={handleClick} className="hamburger-btn">
            <div className="hamburger-btn__line"/>
            <div className="hamburger-btn__line"/>
            <div className="hamburger-btn__line"/>
        </button>
    );

    return (
        <div className="header">
            <div className="header-logo">
                <img src={require('../../assets/images/logo.png')} alt="Headphones" className="header-logo__icon" />
                <span className="header-logo__title">Music.love</span>
            </div>
            {isMobileDeviceCurrent ? hamburgerButton : <Account />}
        </div>
    )
};
