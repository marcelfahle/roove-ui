import React from 'react';
export interface ButtonProps {
    children?: string | string[];
    url?: string;
    /** Renders a button that looks like a link */
    plain?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
export declare function Button({ children, plain, onClick }: ButtonProps): JSX.Element;
