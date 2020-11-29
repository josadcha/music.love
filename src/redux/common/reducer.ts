import { CommonAction } from './actions';
import {
    TOGGLE_SIDEBAR
} from './constants';

export interface CommonState {
    isOpenSidebar: boolean;
}

export const initialCommonState: CommonState = {
    isOpenSidebar: true,
};

export const CommonReducer = (
    state: CommonState = initialCommonState,
    action: CommonAction,
): CommonState => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { ...state, isOpenSidebar: !state.isOpenSidebar };
        default:
            return state;
    }
};
