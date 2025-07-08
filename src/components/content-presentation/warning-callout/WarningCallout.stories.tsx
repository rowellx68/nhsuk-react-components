import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { WarningCallout } from './WarningCallout';

/**
 * Use a warning callout to help users identify and understand warning content on the page, even if they do not read the whole page.
 *
 * https://service-manual.nhs.uk/design-system/components/warning-callout
 */
const meta: Meta<typeof WarningCallout> = {
  title: 'Components/Content Presentation/Warning Callout',
  component: WarningCallout,
  subcomponents: {
    'WarningCallout.Label': WarningCallout.Label,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Important',
  },
  render: (args) => (
    <WarningCallout {...args}>
      <p>
        For safety, tell your doctor or pharmacist if you're taking any other
        medicines, including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>
  ),
};

export const CustomHeading: Story = {
  args: {
    heading: 'School, nursery or work',
  },
  render: (args) => (
    <WarningCallout {...args}>
      Stay away from school, nursery or work until all the spots have crusted
      over. This is usually 5 days after the spots first appeared.
    </WarningCallout>
  ),
};
