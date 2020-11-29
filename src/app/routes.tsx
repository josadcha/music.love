import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AlbumItemScreen } from 'src/screens/AlbumItem';
import { AlbumsListScreen } from 'src/screens/AlbumsList';
import { SongsScreen } from 'src/screens/SongsScreen';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={AlbumsListScreen} />
            <Route exact={true} path="/albums" component={AlbumsListScreen} />
            <Route exact={true} path="/albums/:id" component={AlbumItemScreen} />
            <Route exact={true} path="/songs" component={SongsScreen} />
        </Switch>
    );
};
