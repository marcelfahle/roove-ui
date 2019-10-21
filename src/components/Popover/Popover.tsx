import React, {FunctionComponent} from 'react';

import styles from './Popover.scss';

type PopoverProps = {
  active: boolean;
};


export const Popover: FunctionComponent<PopoverProps> = ({
  active,
  children,
}) => {
  if (!active) return null;
  return <div className={styles.popover}>{children}</div>;
};
