import React, { useCallback, useState } from 'react';

import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSong, selectPlayCurrentSong, setCurrentSong, setPlayCurrentSong, SongItem } from 'src/redux/songs';
import { Song } from 'src/components/song';
import { useSongsFetch } from 'src/hooks/useSongsFetch';
import { selectSongsList } from 'src/redux/songs';


export const SongsScreen = () => {
    const [indexPlayed, setIndexPlayed] = useState<number>();

    const list = useSelector(selectSongsList);
    const isPlaying = useSelector(selectPlayCurrentSong);
    const currentSong = useSelector(selectCurrentSong);

    useSongsFetch();
    const songsLength = list.length;

    const handleEnd = (index: number) => {
        if (index === songsLength - 1) {
            setIndexPlayed(-1);
        }
        setIndexPlayed(index);
    }

    const dispatch = useDispatch();

    const handlePlay = useCallback((song: SongItem) => {
        dispatch(setCurrentSong(song));
        dispatch(setPlayCurrentSong(true));
    }, []);

    const renderSong = (song: SongItem, index: number) => {
        return (
            <Song
                song={song}
                onEnded={handleEnd}
                onPlay={handlePlay}
                autoPlay={indexPlayed === index - 1}
                index={index}
                isPlaying={isPlaying}
                currentSong={currentSong}
            />
        )
    }

    return (
        <div className="songs-page main-content">
            <div className="songs-page__content">
                <div className="songs">
                    {list.map(renderSong)}
                </div>
            </div>
        </div>
    );
};
