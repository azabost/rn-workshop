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
    <Start text='test' updateText={() => { }}>
    </Start>
  )
  .add('with !', () =>
    <Start text='test!!!' updateText={() => { }}>
    </Start>
  )
  .add('with long text', () =>
    <Start text='testing testing testing'
      updateText={() => { }}>
    </Start>
  );

storiesOf('List', module)
  .add('Empty', () =>
    <List>
    </List>
  )
  .add('With one element', () =>
    <List items={['item']}>
    </List>
  )
  .add('With multiple element', () =>
    <List items={['item', 'item2', 'item', 'item2 item2 item2 item2', 'item', 'item2', 'item', 'item2',]}>
    </List>
  )