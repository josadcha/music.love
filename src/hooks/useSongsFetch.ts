import * as React from 'react';
import { useDispatch } from 'react-redux';
import { songsFetch } from 'src/redux/songs';

export const useSongsFetch = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(songsFetch());
    }, [dispatch]);
};
