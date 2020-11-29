import * as React from 'react';
import { useDispatch } from 'react-redux';
import { albumsFetch } from 'src/redux/albums';

export const useAlbumsFetch = (quantity: number) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(albumsFetch(quantity));
    }, [dispatch, quantity]);
};
