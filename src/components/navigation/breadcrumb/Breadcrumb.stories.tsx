import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';

/**
 * Use breadcrumbs to help users understand where they are in the website.
 *
 * https://service-manual.nhs.uk/design-system/components/breadcrumbs
 */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  subcomponents: {
    'Breadcrumb.Item': Breadcrumb.Item,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="/level-one">Level one</Breadcrumb.Item>
      <Breadcrumb.Item href="/level-one/level-two">Level two</Breadcrumb.Item>
      <Breadcrumb.Item href="/level-one/level-two/level-three">
        Level three
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const Reverse: Story = {
  args: {
    modifier: 'reverse',
  },
  globals: {
    backgrounds: {
      value: 'blue',
    },
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="/level-one">Level one</Breadcrumb.Item>
      <Breadcrumb.Item href="/level-one/level-two">Level two</Breadcrumb.Item>
      <Breadcrumb.Item href="/level-one/level-two/level-three">
        Level three
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
};
