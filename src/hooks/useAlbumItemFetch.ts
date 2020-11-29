import * as React from 'react';
import { useDispatch } from 'react-redux';
import { albumItemFetch } from 'src/redux/albums';

export const useAlbumItemFetch = (name: string) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(albumItemFetch(name));
    }, [dispatch, name]);
};
