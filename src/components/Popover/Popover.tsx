import React, { FunctionComponent, useRef, useEffect, RefObject } from 'react';

import styles from './Popover.scss';

export type PopoverProps = {
  onClose: () => void;
};

export type ClickOutsideHookProps = {
  ref: RefObject<HTMLDivElement>;
  onClose: () => void;
};

function useClickOutside(ref: RefObject<HTMLDivElement>, onClose: () => void) {
  function handleStatusChange(event: MouseEvent) {
    if (
      ref &&
      ref.current &&
      !ref.current.contains(event.target as HTMLDivElement)
    ) {
      onClose();
    }
  }
  document.addEventListener('click', handleStatusChange);
  return function cleanup() {
    document.removeEventListener('click', handleStatusChange);
  };
}

export const Popover: FunctionComponent<PopoverProps> = ({
  onClose,
  children,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  useEffect(() => useClickOutside(popoverRef, onClose));

  return (
    <div className={styles.popover} ref={popoverRef}>
      {children}
    </div>
  );
};
