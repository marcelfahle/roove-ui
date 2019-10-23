import React, {FC, useState, useEffect} from 'react';
import {Popover} from '../Popover';
import {Button} from '../Button';
import style from './styles.scss';

export interface User {
  id: string;
  name: string;
  status: string;
  avatar: string;
}

export interface UserListProps {
  users: User[];
  onSelectionChange: (resourceIds: string[]) => void;
}

//const activator = <button onClick={() => console.log('click')}>Click</button>
export interface UserItemProps {
  user: User;
  onSelect: (id: string) => void;
  selected: boolean;
}
const UserItem: FC<UserItemProps> = ({user, onSelect, selected}) => (
  <div
    className={`${style.resource} ${selected && style.selected}`}
    onClick={() => onSelect(user.id)}>
    <div className={style.avatar}>
      <img width="80px" src={user.avatar} />
    </div>
    <div className={style.resourceDetails}>
      <span className={style.resourceDetailsPrimary}>{user.name}</span>
      <span className={style.resourceDetailsSecondary}>{user.status}</span>
    </div>
    <div className={style.resourceCheckmark}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16">
        <defs>
          <path id="a" d="M0 0h16v16H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <path
              fill="#28AF2B"
              d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7M8 0C3.588 0 0 3.59 0 8s3.588 8 8 8 8-3.59 8-8-3.588-8-8-8"
              mask="url(#b)"
            />
          </g>
          <path
            fill="#28AF2B"
            d="M12.287 5.016a.518.518 0 0 0-.726-.001l-4.91 4.91-2.274-2.272a.517.517 0 0 0-.728 0 .515.515 0 0 0 .001.725l2.638 2.638a.521.521 0 0 0 .727 0l5.272-5.273a.513.513 0 0 0 0-.727"
          />
        </g>
      </svg>
    </div>
  </div>
);

const UserList: FC<UserListProps> = ({users, onSelectionChange}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    if (selectedItems.length > 0 && selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }

    console.log(selectedItems);
  };

  useEffect(() => {
    onSelectionChange(selectedItems);
  }, [selectedItems]);

  return (
    <ul className={style.resourceList}>
      {users.map((user: User) => (
        <UserItem
          key={user.id}
          user={user}
          selected={selectedItems.length > 0 && selectedItems.includes(user.id)}
          onSelect={toggleSelect}
        />
      ))}
    </ul>
  );
};

export interface ResourcePickerTypes {
  resources: User[];
  onConfirm: (selectedResources: string[]) => void;
}

export const ResourcePicker: FC<ResourcePickerTypes> = ({
  resources,
  onConfirm,
  children,
}) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedResources, setSelectedResources] = useState();
  //const togglePopoverActive = useCallback(
  //  () => setPopoverActive(popoverActive => !popoverActive),
  //  []
  //);

  const lowerCasedSearch = () => searchValue.toLowerCase();
  const filteredUsers = () =>
    resources.filter(u => u.name.toLowerCase().includes(lowerCasedSearch()));

  const handleOpen = () => setPopoverActive(true);

  const handleConfirm = () => {
    onConfirm(selectedResources);
    // TODO: hide popover after async,
    // make all inactive during server operation
    // (semi-transparent layover)
    setPopoverActive(false);
  };

  const handleSelectionChange = (resourceIds: string[]) =>
    setSelectedResources(resourceIds);

  let clonedTrigger = null;
  React.Children.forEach(children, (child, index) => {
    if (child && index === 0) {
      clonedTrigger = React.cloneElement(child as React.ReactElement<any>, {
        className: 'opener',
        onClick: handleOpen,
        //...(child.props && child.props),
      });
    }
  });

  return (
    <span>
      {clonedTrigger}
      <Popover active={popoverActive}>
        <div className={style.wrapper}>
          <input
            type="text"
            placeholder="Search"
            className={style.search}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />

          <UserList
            users={filteredUsers()}
            onSelectionChange={handleSelectionChange}
          />
          <div className={style.actions}>
            <Button plain onClick={handleConfirm}>
              Confirm
            </Button>
          </div>
        </div>
      </Popover>
    </span>
  );
};
