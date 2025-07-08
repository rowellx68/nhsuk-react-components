import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultButtonStory,
  DefaultAsLink as DefaultButtonAsLinkStory,
} from '../Button.stories';

const Button = composeStory(DefaultButtonStory, meta);
const ButtonAsLink = composeStory(DefaultButtonAsLinkStory, meta);

it('should render the Button component as a button', () => {
  const { container } = render(<Button>Submit</Button>);

  expect(container.querySelector('button')).toBeInTheDocument();
  expect(container).toHaveTextContent('Submit');
});

it.each([
  'secondary',
  'secondary-solid',
  'reverse',
  'warning',
  'login',
] as const)(
  'should render the Button component with the %s modifier',
  (modifier) => {
    const { container } = render(<Button modifier={modifier}>Action</Button>);

    expect(
      container.querySelector('.nhsuk-button--' + modifier),
    ).toBeInTheDocument();
  },
);

it('should render the Button component with the disabled attribute', () => {
  const { container } = render(<Button disabled>Disabled</Button>);

  expect(container.querySelector('button')).toHaveAttribute('disabled');
});

it('should render the Button component as a link', () => {
  const { container } = render(
    <ButtonAsLink as="a" href="https://www.nhs.uk">
      Link
    </ButtonAsLink>,
  );

  expect(container.querySelector('a')).toBeInTheDocument();
});

it.each(['secondary', 'reverse', 'warning'] as const)(
  'should render the Button component as a link modifier %s',
  (modifier) => {
    const { container } = render(
      <ButtonAsLink as="a" href="https://www.nhs.uk" modifier={modifier}>
        Link
      </ButtonAsLink>,
    );

    expect(container.querySelector('a')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    expect(
      container.querySelector('.nhsuk-button--' + modifier),
    ).toBeInTheDocument();
  },
);
