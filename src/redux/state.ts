import { AlbumsState } from "./albums";
import { SongsState } from "./songs";
import { CommonState } from "./common";

export interface RootState {
    albums: AlbumsState;
    songs: SongsState;
    common: CommonState;
}
