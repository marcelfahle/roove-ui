import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';

import { ResourcePicker, User } from './';

function buildFakeUser(): User {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    status: faker.hacker.phrase(),
    avatar: faker.internet.avatar(),
  };
}
let fakeUsers: User[] = [];

for (var i = 0; i < 100; i++) {
  fakeUsers.push(buildFakeUser());
}

export default { title: 'ResourcePicker' };

export const resourcePicker = () => (
  <ResourcePicker
    resources={fakeUsers}
    selected={[]}
    onConfirm={action('onConfirm')}
  >
    <button>click</button>>
  </ResourcePicker>
);
export const resourcePicker2 = () => (
  <div
    style={{
      height: 500,
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Hello{' '}
    <ResourcePicker
      resources={fakeUsers}
      selected={[]}
      onConfirm={action('onConfirm')}
    >
      <span>&nbsp;World</span>
    </ResourcePicker>
    .
  </div>
);
