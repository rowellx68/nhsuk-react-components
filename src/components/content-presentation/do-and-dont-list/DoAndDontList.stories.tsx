import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DoAndDontList } from './DoAndDontList';

/**
 * Use Do and Don't lists to help users understand more easily what they should and shouldn't do.
 *
 * https://service-manual.nhs.uk/design-system/components/do-and-dont-lists
 */
const meta: Meta<typeof DoAndDontList> = {
  // eslint-disable-next-line @stylistic/quotes
  title: "Components/Content Presentation/Do And Don't List",
  component: DoAndDontList,
  subcomponents: {
    'DoAndDontList.Label': DoAndDontList.Label,
    'DoAndDontList.List': DoAndDontList.List,
    'DoAndDontList.Item': DoAndDontList.Item,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof DoAndDontList>;

export const DoList: Story = {
  args: {
    modifier: 'do',
  },
  render: (args) => (
    <DoAndDontList {...args}>
      <DoAndDontList.Label as="h2">Do</DoAndDontList.Label>
      <DoAndDontList.List>
        <DoAndDontList.Item>
          cover blisters that are likely to burst with a soft plaster or
          dressing
        </DoAndDontList.Item>
        <DoAndDontList.Item>
          wash your hands before touching a burst blister{' '}
        </DoAndDontList.Item>
        <DoAndDontList.Item>
          allow the fluid in a burst blister to drain before covering it with a
          plaster or dressing{' '}
        </DoAndDontList.Item>
      </DoAndDontList.List>
    </DoAndDontList>
  ),
};

export const DontList: Story = {
  args: {
    modifier: 'dont',
  },
  render: (args) => (
    <DoAndDontList {...args}>
      <DoAndDontList.Label as="h2">Don't</DoAndDontList.Label>
      <DoAndDontList.List>
        <DoAndDontList.Item>do not burst a blister yourself</DoAndDontList.Item>
        <DoAndDontList.Item>
          do not peel the skin off a burst blister
        </DoAndDontList.Item>
        <DoAndDontList.Item>
          do not pick at the edges of the remaining skin
        </DoAndDontList.Item>
        <DoAndDontList.Item>
          do not wear the shoes or use the equipment that caused your blister
          until it heals
        </DoAndDontList.Item>
      </DoAndDontList.List>
    </DoAndDontList>
  ),
};
