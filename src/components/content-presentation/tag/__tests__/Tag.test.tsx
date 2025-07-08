import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, { Default as DefaultStory } from '../Tag.stories';
import { TagColour } from '../Tag';

const Default = composeStory(DefaultStory, meta);

it('should render the Tag component with the default grey modifier', () => {
  const { container } = render(<Default />);
  expect(container.querySelector('.nhsuk-tag--grey')).toBeInTheDocument();
});

it.each([
  'aqua-green',
  'blue',
  'green',
  'grey',
  'orange',
  'pink',
  'purple',
  'red',
  'white',
  'yellow',
] as TagColour[])(
  'should render the Tag component with the %s modifier',
  (modifier) => {
    const { container } = render(<Default modifier={modifier} />);
    expect(
      container.querySelector(`.nhsuk-tag--${modifier}`),
    ).toBeInTheDocument();
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  },
);
