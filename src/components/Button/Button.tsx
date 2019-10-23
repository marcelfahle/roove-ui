import React from 'react';

import styles from './Button.scss';

export interface ButtonProps {
  children?: string | string[];
  url?: string;
  /** Renders a button that looks like a link */
  plain?: boolean;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export function Button({children, plain, onClick}: ButtonProps) {
  const content = children;

  return (
    <button className={plain ? styles.plain : ''} onClick={onClick}>
      {content}
    </button>
  );
}
