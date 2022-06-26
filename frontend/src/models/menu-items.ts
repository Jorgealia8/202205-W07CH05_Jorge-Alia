import { ReactElement } from 'react';

export interface iMenuItem {
    path: string;
    label: string;
    page: ReactElement;
    title?: string;
}

export type aMenuItems = Array<iMenuItem>;
