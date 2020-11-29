import React, { useCallback, useState } from 'react';
import { ReactComponent as PlayIcon } from 'src/assets/icons/play.svg';
import { ReactComponent as PlayNextIcon } from 'src/assets/icons/play-next.svg';
import { ReactComponent as PauseIcon } from 'src/assets/icons/pause.svg';

import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSong, selectPlayCurrentSong, selectSongsList, setCurrentSong, setPlayCurrentSong, SongItem } from 'src/redux/songs';
import { useLocation } from 'react-router-dom';
import { selectAlbumItemList } from 'src/redux/albums';

export const Player: React.FC = () => {
    const [songs, setSongs] = useState<SongItem[]>([]);

    const currentSong = useSelector(selectCurrentSong);
    const isPlaying = useSelector(selectPlayCurrentSong);
    const location = useLocation();
    const songsList = useSelector(selectSongsList);
    const album = useSelector(selectAlbumItemList);

    const dispatch = useDispatch();

    const handleClickPlay = useCallback(
        () => {
            if (currentSong) {
                dispatch(setPlayCurrentSong(!isPlaying));
            }
        }, [dispatch, currentSong, isPlaying]
    );

    const handleClickNext = useCallback(
        () => {
            if (currentSong) {
                const prevSongIndex = songs.indexOf(currentSong);
                const songToSet = prevSongIndex + 1 < songs.length ? prevSongIndex + 1 : 0;
                dispatch(setCurrentSong(songs[songToSet]))
                dispatch(setPlayCurrentSong(true));
            }
        }, [dispatch, currentSong, songs]
    );

    React.useEffect(() => {
        if (location.pathname === '/songs') {
            setSongs(songsList);
        } else if (location.pathname.includes('/albums')) {
            setSongs(album.songs.map(item => {
                return {
                    ...item,
                    author: album.author,
                    imageSrc: album.imageSrc,
                }
            }));
        }
    }, [songsList, album]);

    const renderCurrentSong = () => currentSong && (
        <>
            <img src={currentSong.imageSrc} alt={currentSong.name} className="player-image"/>
            <span className="player-song--title">{currentSong.name}</span>
        </>
    );

    return (
        <div className="player">
            <div className="player-song">
                {renderCurrentSong()}
            </div>
            <div className="player-btn--group">
                <button className="player-btn" onClick={handleClickPlay}>
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <button className="player-btn" onClick={handleClickNext}>
                    <PlayNextIcon />
                </button>
            </div>
        </div>
    );
};
