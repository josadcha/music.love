import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Albums } from 'src/assets/icons/albums.svg';
import { ReactComponent as Songs } from 'src/assets/icons/songs.svg';
import { ReactComponent as RecentlyAdded } from 'src/assets/icons/recently-added.svg';
import { ReactComponent as ListenNow } from 'src/assets/icons/listen-now.svg';

import './index.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarOpen, toggleSidebar } from 'src/redux/common';

export const Sidebar: React.FC = () => {
    const [ searchValue , handleChangeInput ] = useState<string>('');
    const [width, setWidth] = useState<number | undefined>();

    const isMobileDeviceCurrent = width ? width < 768 : window.innerWidth < 768;

    const isOpen = useSelector(selectSidebarOpen);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const {
                target: { value },
            } = event;

            handleChangeInput(value);
        },
        [handleChangeInput]
    );

    const dispatch = useDispatch();
    const handleClick = useCallback((event: any) => {
        if (isMobileDeviceCurrent) {
            dispatch(toggleSidebar());
        }
    }, [ dispatch ]);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (window.innerWidth < 768) {
                dispatch(toggleSidebar());
            }
        }
          
        window.addEventListener("resize", handleResize);
          
        handleResize();
          
        return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return (isMobileDeviceCurrent && isOpen) || !isMobileDeviceCurrent ? (
        <div className="sidebar">
            <div className="sidebar-divider"/>

            <input
                className="sidebar__search-bar"
                value={searchValue}
                onChange={handleChange}
                placeholder="Search"
            />
            <Link to="/albums" className="sidebar-item" onClick={handleClick}>
                <ListenNow className="sidebar-item__icon" /> Listen Now
            </Link>

            <Link to="/albums" className="sidebar-item" onClick={handleClick}>
                <Albums className="sidebar-item__icon"/> Albums
            </Link>
            <Link to="/songs" className="sidebar-item" onClick={handleClick}>
                <Songs className="sidebar-item__icon" /> Songs
            </Link>
            <Link to="/songs" className="sidebar-item" onClick={handleClick}>
                <RecentlyAdded className="sidebar-item__icon" /> Recently Added
            </Link>
        </div>
    ) : null;
};
