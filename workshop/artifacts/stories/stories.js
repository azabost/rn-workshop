/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Start } from '../Start/StartScreen';
import List from '../List/List';
storiesOf('Start screen', module)
    .add('with short text', () => React.createElement(Start, { text: 'test', updateText: () => { } }))
    .add('with !', () => React.createElement(Start, { text: 'test!!!', updateText: () => { } }))
    .add('with long text', () => React.createElement(Start, { text: 'testing testing testing', updateText: () => { } }));
storiesOf('List', module)
    .add('Empty', () => React.createElement(List, null))
    .add('With one element', () => React.createElement(List, { items: ['item'] }))
    .add('With multiple element', () => React.createElement(List, { items: ['item', 'item2', 'item', 'item2 item2 item2 item2', 'item', 'item2', 'item', 'item2',] }));
//# sourceMappingURL=stories.js.map