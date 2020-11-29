import { RootState } from '../state';

export const selectSidebarOpen = (state: RootState): boolean =>
    state.common.isOpenSidebar;

