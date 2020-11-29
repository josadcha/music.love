import { CommonError } from '../types';
import {
    TOGGLE_SIDEBAR
} from './constants';

export interface ToggleSidebar {
    type: typeof TOGGLE_SIDEBAR;
}

export type CommonAction =
    ToggleSidebar;

export const toggleSidebar = (): ToggleSidebar => ({
    type: TOGGLE_SIDEBAR,
});
