export interface AlbumListItem {
    title: string;
    author: string;
    imageSrc: string;
}

export interface AlbumItem {
    title: string;
    author: string;
    imageSrc: string;
    date: string;
    songs: Song[];
}

export interface Song {
    name: string;
    src: string;
}
