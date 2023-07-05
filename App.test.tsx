import React from 'react';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import App from './App';

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    ...jest.requireActual('react-native-safe-area-context'),
    SafeAreaProvider: jest.fn(({ children }) => children),
    SafeAreaConsumer: jest.fn(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn(() => inset),
    useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 390, height: 844 })),
  };
});

describe('<App />', () => {
  it('has 1 child', async () => {
    const tree = create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree?.children?.length).toBe(1);
  });
});
