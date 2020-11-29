import React, { useCallback, useState } from 'react';

import './index.scss';

import { Album } from 'src/components/album';
import { useSelector } from 'react-redux';
import { selectAlbumsList, selectAlbumsSuccess } from 'src/redux/albums';
import { useAlbumsFetch } from 'src/hooks/useAlbumsFetch';

export const AlbumsListScreen: React.FC = () => {
    const list = useSelector(selectAlbumsList);
    const success = useSelector(selectAlbumsSuccess);
    useAlbumsFetch(10);

    return (
        <div className="albums-page main-content">
            <span className="page-title">My Albums</span>
            <div className="albums-page__content">
                {list.map(item => <Album item={item}/>)}
            </div>
        </div>
    );
};
