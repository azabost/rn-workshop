/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Start } from '../Start/StartScreen';
storiesOf('Start screen', module)
    .add('with short text', () => React.createElement(Start, { text: 'test', updateText: () => { } }))
    .add('with long text', () => React.createElement(Start, { text: 'testing testing testing', updateText: () => { } }));
//# sourceMappingURL=stories.js.map