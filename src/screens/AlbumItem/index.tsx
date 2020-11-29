import React, { useCallback, useState } from 'react';

import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlbumItemList, selectAlbumsSuccess, Song as SongInterface } from 'src/redux/albums';
import { useAlbumItemFetch } from 'src/hooks/useAlbumItemFetch';
import { useParams } from 'react-router-dom';
import { Song } from 'src/components/song';
import { selectCurrentSong, selectPlayCurrentSong, setCurrentSong, setPlayCurrentSong } from 'src/redux/songs';

interface ParamTypes {
    id: string;
}

export const AlbumItemScreen = () => {
    const [indexPlayed, setIndexPlayed] = useState<number>();

    const item = useSelector(selectAlbumItemList);
    const success = useSelector(selectAlbumsSuccess);
    const isPlaying = useSelector(selectPlayCurrentSong);
    const currentSong = useSelector(selectCurrentSong);

    const { id } = useParams<ParamTypes>();
    useAlbumItemFetch(id);
    const songsLength = item.songs.length;

    const handleEnd = (index: number) => {
        if (index === songsLength - 1) {
            setIndexPlayed(-1);
        }
        setIndexPlayed(index);
    }

    const dispatch = useDispatch();

    const handlePlay = useCallback((song: SongInterface) => {
        if (item && (!currentSong || song.name !== (currentSong && currentSong.name))) {
            dispatch(setCurrentSong({ ...song, author: item.author, imageSrc: item.imageSrc }));
            dispatch(setPlayCurrentSong(true));
        }
    }, [item, currentSong]);

    const renderSong = (song: SongInterface, index: number) => {
        return (
            <Song
                song={song}
                onEnded={handleEnd}
                autoPlay={indexPlayed === index - 1}
                onPlay={handlePlay}
                index={index}
                isPlaying={isPlaying}
                currentSong={currentSong}
            />
        )
    }

    return success ? (
        <div className="album-item-page main-content">
            <div className="album-item-page__content">
                <div className="column">
                    <img src={item.imageSrc} className="album-item-page__content-image" alt={item.title}/>
                </div>
                <div className="column">
                    <span className="title">{item.title}</span>
                    <span className="colored">{item.author}</span>
                    <span className="muted">
                        {item.date}, {songsLength} song{songsLength > 1 ? 's' : ''}
                    </span>
                    <div className="songs">
                        {item.songs.map(renderSong)}
                    </div>
                </div>
            </div>
        </div>
    ) : <span>Loading</span>;
};
