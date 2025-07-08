import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DoDontList } from './DoDontList';

/**
 * Use Do and Don't lists to help users understand more easily what they should and shouldn't do.
 *
 * https://service-manual.nhs.uk/design-system/components/do-and-dont-lists
 */
const meta: Meta<typeof DoDontList> = {
  // eslint-disable-next-line @stylistic/quotes
  title: "Components/Content Presentation/Do and Don't List",
  component: DoDontList,
  subcomponents: {
    'DoAndDontList.Item': DoDontList.Item,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof DoDontList>;

export const DoList: Story = {
  args: {
    title: 'Do',
    modifier: 'tick',
  },
  render: (args) => (
    <DoDontList {...args}>
      <DoDontList.Item>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoDontList.Item>
      <DoDontList.Item>
        wash your hands before touching a burst blister
      </DoDontList.Item>
      <DoDontList.Item>
        allow the fluid in a burst blister to drain before covering it with a
        plaster or dressing
      </DoDontList.Item>
    </DoDontList>
  ),
};

export const DontList: Story = {
  args: {
    title: 'Don\'t',
    modifier: 'cross',
  },
  render: (args) => (
    <DoDontList {...args}>
      <DoDontList.Item>burst a blister yourself</DoDontList.Item>
      <DoDontList.Item>peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item>pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item>
        wear the shoes or use the equipment that caused your blister until it
        heals
      </DoDontList.Item>
    </DoDontList>
  ),
};

export const DontListHidePrefix: Story = {
  args: {
    title: 'Don\'t',
    modifier: 'cross',
    hidePrefix: true,
  },
  render: (args) => (
    <DoDontList {...args}>
      <DoDontList.Item>burst a blister yourself</DoDontList.Item>
      <DoDontList.Item>peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item>pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item>
        wear the shoes or use the equipment that caused your blister until it
        heals
      </DoDontList.Item>
    </DoDontList>
  ),
};
