import { FC } from 'react';
export interface User {
    id: string;
    name: string;
    status: string;
    avatar: string;
}
interface ResourcePickerTypes {
    resources: User[];
    onConfirm: () => void;
}
export declare const ResourcePicker: FC<ResourcePickerTypes>;
export {};
