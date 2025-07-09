import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SummaryList } from './SummaryList';

/**
 * Use the summary list to summarise information, for example, a user's responses at the end of a form.
 *
 * https://service-manual.nhs.uk/design-system/components/summary-list
 */
const meta: Meta<typeof SummaryList> = {
  title: 'Components/Content Presentation/Summary List',
  component: SummaryList,
  subcomponents: {
    'SummaryList.Row': SummaryList.Row,
    'SummaryList.Row.Action': SummaryList.Row.Action,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof SummaryList>;

export const Default: Story = {
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row
        rowKey="Name"
        value="John Smith"
        actions={
          <SummaryList.Row.Action visuallyHiddenText="name" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
      <SummaryList.Row
        rowKey="Date of birth"
        value="1 January 1990"
        actions={
          <SummaryList.Row.Action visuallyHiddenText="date of birth" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
      <SummaryList.Row
        rowKey="Address"
        value={
          <>
            1 Smith Street, Smithville, <br />
            Smithfield, <br />
            Smithshire, <br />
            SM1 1SM
          </>
        }
        actions={
          <SummaryList.Row.Action visuallyHiddenText="address" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
      <SummaryList.Row
        rowKey="Contact details"
        value={
          <>
            07000 000000 <br />
            john.smith@email.com
          </>
        }
        actions={
          <SummaryList.Row.Action visuallyHiddenText="contact details" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
    </SummaryList>
  ),
};

export const NoBorder: Story = {
  args: {
    modifier: 'no-border',
  },
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row
        rowKey="Name"
        value="John Smith"
        actions={
          <SummaryList.Row.Action visuallyHiddenText="name" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
      <SummaryList.Row
        rowKey="Date of birth"
        value="1 January 1990"
        actions={
          <SummaryList.Row.Action visuallyHiddenText="date of birth" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
      <SummaryList.Row
        rowKey="Address"
        value={
          <>
            1 Smith Street, Smithville, <br />
            Smithfield, <br />
            Smithshire, <br />
            SM1 1SM
          </>
        }
        actions={
          <SummaryList.Row.Action visuallyHiddenText="address" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
      <SummaryList.Row
        rowKey="Contact details"
        value={
          <>
            07000 000000 <br />
            john.smith@email.com
          </>
        }
        actions={
          <SummaryList.Row.Action visuallyHiddenText="contact details" href="#">
            Change
          </SummaryList.Row.Action>
        }
      />
    </SummaryList>
  ),
};

export const NoBorderNoActions: Story = {
  args: {
    modifier: 'no-border',
  },
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row rowKey="Name" value="John Smith" />
      <SummaryList.Row rowKey="Date of birth" value="1 January 1990" />
      <SummaryList.Row
        rowKey="Address"
        value={
          <>
            1 Smith Street, Smithville, <br />
            Smithfield, <br />
            Smithshire, <br />
            SM1 1SM
          </>
        }
      />
      <SummaryList.Row
        rowKey="Contact details"
        value={
          <>
            07000 000000 <br />
            john.smith@email.com
          </>
        }
      />
    </SummaryList>
  ),
};
