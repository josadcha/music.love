import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './index.scss';
import { SongItem } from 'src/redux/songs';

interface Props {
    song: any;
    autoPlay: boolean;
    onEnded: (event: any) => void;
    index: number;
    onPlay: (song: SongItem) => void;
    isPlaying: boolean;
    currentSong?: SongItem;
}

export const Song: React.FC<Props> = ({ song, autoPlay, onEnded, index, onPlay, isPlaying, currentSong }) => {
    const { name, src } = song;

    let audioRef: ReactAudioPlayer | null = null;

    React.useEffect(() => {
        if (autoPlay) {
            if (audioRef && audioRef.audioEl && audioRef.audioEl.current) {
                audioRef.audioEl.current.load();
                audioRef.audioEl.current.play();
            }
        }
    }, [autoPlay]);

    React.useEffect(() => {
        if (!isPlaying) {
            if (audioRef && audioRef.audioEl && audioRef.audioEl.current) {
                audioRef.audioEl.current.pause();
            }
        }

        if (isPlaying && currentSong && currentSong.name === song.name) {
            if (audioRef && audioRef.audioEl && audioRef.audioEl.current) {
                audioRef.audioEl.current.load();
                audioRef.audioEl.current.play();
            }
        }
    }, [isPlaying, currentSong]);

    React.useEffect(() => {
        if (currentSong && currentSong.name !== song.name ) {
            if (audioRef && audioRef.audioEl && audioRef.audioEl.current) {
                audioRef.audioEl.current.pause();
            }
        }
    }, [currentSong]);

    return (
        <div className="song">
            {song.imageSrc && (
                <img src={song.imageSrc} className="song__image" alt={song.name}/>
            )}
            <div className="song__info">
                <span>
                    {name}
                </span>
                <ReactAudioPlayer
                    src={src}
                    controls
                    onEnded={() => onEnded(index)}
                    onPlay={() => onPlay(song)}
                    volume={0.1}
                    ref={(element) => { audioRef = element; }}
                />
            </div>
        </div>
    )
}
