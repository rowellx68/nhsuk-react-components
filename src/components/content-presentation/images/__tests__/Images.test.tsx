import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  ImageWithCaption as ImageWithCaptionStory,
  ImageWithoutCaption as ImageWithoutCaptionStory,
} from '../Images.stories';

const ImageWithCaption = composeStory(ImageWithCaptionStory, meta);
const ImageWithoutCaption = composeStory(ImageWithoutCaptionStory, meta);

it('should render the Images component', () => {
  const { container } = render(<ImageWithCaption />);

  expect(container).toMatchSnapshot();
});

it('should render the Images component without caption', () => {
  const { container } = render(<ImageWithoutCaption />);

  expect(container).toMatchSnapshot();
});
