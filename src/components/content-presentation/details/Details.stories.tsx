import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Details } from './Details';
import { Link } from '@/components/typography/link/Link';

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * https://service-manual.nhs.uk/design-system/components/details
 */
const meta: Meta<typeof Details> = {
  title: 'Components/Content Presentation/Details',
  component: Details,
  subcomponents: {
    'Details.Summary': Details.Summary,
    'Details.Text': Details.Text,
    'Details.ExpanderGroup': Details.ExpanderGroup,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof Details>;

export const Default: Story = {
  render: (args) => (
    <Details {...args} data-testid="details">
      <Details.Summary data-testid="details-summary">
        How to find your NHS number
      </Details.Summary>
      <Details.Text data-testid="details-text">
        <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
        <p>
          You can find your NHS number by logging in to a GP online service or
          on any document the NHS has sent you, such as your:
        </p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
        </ul>
        <p>Ask your GP surgery for help if you can't find your NHS number.</p>
      </Details.Text>
    </Details>
  ),
};

export const Expander: Story = {
  args: {
    modifier: 'expander',
  },
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Get your medical records</Details.Summary>
      <Details.Text>
        <p>You can see your GP records by:</p>
        <ul>
          <li>asking for them at your GP surgery </li>
          <li>
            going online to see them (if you have signed up for{' '}
            <Link href="/using-the-nhs/nhs-services/gps/gp-online-services/">
              GP online services
            </Link>
            )
          </li>
        </ul>
      </Details.Text>
    </Details>
  ),
};

export const ExpanderGroup: Story = {
  args: {
    modifier: 'expander',
  },
  render: (args) => (
    <Details.ExpanderGroup>
      <Details {...args}>
        <Details.Summary>
          How to measure your blood glucose levels
        </Details.Summary>
        <Details.Text>
          <p>
            Testing your blood at home is quick and easy, although it can be
            uncomfortable. It does get better.
          </p>
          <p>You would have been given:</p>
          <ul>
            <li>a blood glucose metre</li>
            <li>small needles called lancets</li>
            <li>a plastic pen to hold the lancets</li>
            <li>small test strips</li>
          </ul>
        </Details.Text>
      </Details>
      <Details {...args}>
        <Details.Summary>
          When to check your blood glucose level
        </Details.Summary>
        <Details.Text>
          <p>Try to check your blood:</p>
          <ul>
            <li>before meals</li>
            <li>2 to 3 hours after meals</li>
            <li>before, during (take a break) and after exercise</li>
          </ul>
          <p>
            This helps you understand your blood glucose levels and how they’re
            affected by meals and exercise. It should help you have more stable
            blood glucose levels.
          </p>
        </Details.Text>
      </Details>
    </Details.ExpanderGroup>
  ),
};
