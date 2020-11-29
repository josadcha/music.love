import React from 'react';
import { Link } from 'react-router-dom';
import { AlbumListItem } from 'src/redux/albums';

import './index.scss';

interface Props {
    item: AlbumListItem;
}

export const Album: React.FC<Props> = ({ item }) => {
    const { title, author, imageSrc } = item;
    const link = `/albums/${title.toLowerCase().replace(' ', '-')}`;

    return (
        <div className="album-item">
            <Link to={link}>
                <div style={{ backgroundImage: `url(${imageSrc})` }} className="album-item__image">
                    
                </div>
                <div className="album-item__info">
                    <span>
                        {title}
                    </span>
                    <span className="muted">{author}</span>
                </div>
            </Link>
        </div>
    )
}
