import React from 'react';

import { create, ReactTestRendererJSON } from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import WelcomeMessage from './welcome-message';

const expectedUsernameExample = 'Orlando';

describe('Testing WelcomeMessage component', () => {
  it('render Correctly ', async () => {
    const tree = create(<WelcomeMessage />).toJSON() as ReactTestRendererJSON;
    expect(tree?.children?.length).toBeGreaterThan(1);
  });

  it('has personalized welcome title with name ', async () => {
    render(<WelcomeMessage />);
    expect(await screen.getByText(/Welcome Orlando/i)).toBeOnTheScreen();
  });

  it('has motivation subtitle text ', async () => {
    render(<WelcomeMessage />);
    expect(
      await screen.getByText(/Create your life goal from long term/i)
    ).toBeOnTheScreen();
  });
});
