import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Images } from './Images';

/**
 * Use images only if there is a real user need. Avoid unnecessary decoration.
 *
 * https://service-manual.nhs.uk/design-system/components/images
 */
const meta: Meta<typeof Images> = {
  title: 'Components/Content Presentation/Images',
  component: Images,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageWithCaption: Story = {
  args: {
    src: 'https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg',
    alt: 'Lots of sore red patches with small blisters spread across white skin on a woman\'s chest.',
    caption: 'It can affect large areas of the body or limbs.',
  },
  render: (args) => <Images {...args} />,
};

export const ImageWithoutCaption: Story = {
  args: {
    src: 'https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg',
    alt: 'Lots of sore red patches with small blisters spread across white skin on a woman\'s chest.',
  },
  render: (args) => <Images {...args} />,
};
