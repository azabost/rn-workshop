/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Start } from '../Start/StartScreen'
import List from '../List/List'

declare var module

storiesOf('Start screen', module)
  .add('with short text', () =>
    <Start
        updateText={() => {}}
        downloadData={() => {}}
        text='test'
        issues={[{'title': 'a', 'avatarUrl': ''}, {'title': 'b', 'avatarUrl': ''}]}>
    </Start>
  )
  .add('empty listy', () =>
    <Start
        updateText={() => {}}
        downloadData={() => {}}
        text='test'>
    </Start>
  );
