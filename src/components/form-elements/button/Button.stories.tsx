import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

/**
 * Use buttons to help users carry out an action on a page like starting an application or saving their progress.
 *
 * https://service-manual.nhs.uk/design-system/components/buttons
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Form Elements/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['button', 'submit', 'reset'],
      table: {
        type: {
          summary: 'union',
        },
      },
    },
    modifier: {
      control: {
        type: 'select',
      },
      options: [
        'default',
        'primary',
        'secondary',
        'secondary-solid',
        'reverse',
        'warning',
        'login',
      ],
      table: {
        type: {
          summary: 'union',
        },
      },
    },
    as: {
      control: false,
      description:
        'The element to render the `Button` as. This can be a `button`, a anchor or a anchor-like component.',
      table: {
        type: {
          summary: 'React.ElementType',
        },
        defaultValue: {
          summary: 'button',
        },
      },
    },
  },
  globals: {
    backgrounds: {
      value: 'light',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Save and continue',
  },
  render: (args) => <Button {...args} />,
};

export const DefaultAsLink: Story = {
  args: {
    children: 'Link button',
    as: 'a',
    href: '#',
  },
  render: (args) => <Button {...args} />,
};

export const DefaultDisabled: Story = {
  args: {
    children: 'Disabled button',
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const Login: Story = {
  args: {
    children: 'Continue',
    modifier: 'login',
  },
  render: (args) => <Button {...args} />,
};

export const LoginAsLink: Story = {
  args: {
    children: 'Continue',
    modifier: 'login',
    as: 'a',
    href: '#',
  },
  render: (args) => <Button {...args} />,
};

export const LoginDisabled: Story = {
  args: {
    children: 'Continue',
    modifier: 'login',
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const Reverse: Story = {
  args: {
    children: 'Log out',
    modifier: 'reverse',
  },
  globals: {
    backgrounds: {
      value: 'blue',
    },
  },
  render: (args) => <Button {...args} />,
};

export const ReverseAsLink: Story = {
  args: {
    children: 'Log out',
    modifier: 'reverse',
    as: 'a',
    href: '#',
  },
  globals: {
    backgrounds: {
      value: 'blue',
    },
  },
  render: (args) => <Button {...args} />,
};

export const ReverseDisabled: Story = {
  args: {
    children: 'Log out',
    modifier: 'reverse',
    disabled: true,
  },
  globals: {
    backgrounds: {
      value: 'blue',
    },
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    children: 'Find my location',
    modifier: 'secondary',
  },
  render: (args) => <Button {...args} />,
};

export const SecondaryAsLink: Story = {
  args: {
    children: 'Find my location',
    modifier: 'secondary',
    as: 'a',
    href: '#',
  },
  render: (args) => <Button {...args} />,
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Find my location',
    modifier: 'secondary',
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const SecondarySolid: Story = {
  args: {
    children: 'Find my location',
    modifier: 'secondary-solid',
  },
  render: (args) => <Button {...args} />,
};

export const SecondarySolidAsLink: Story = {
  args: {
    children: 'Find my location',
    modifier: 'secondary-solid',
    as: 'a',
    href: '#',
  },
  render: (args) => <Button {...args} />,
};

export const SecondarySolidDisabled: Story = {
  args: {
    children: 'Find my location',
    modifier: 'secondary-solid',
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const Warning: Story = {
  args: {
    children: 'Yes, delete this vaccine',
    modifier: 'warning',
  },
  render: (args) => <Button {...args} />,
};

export const WarningAsLink: Story = {
  args: {
    children: 'Yes, delete this vaccine',
    modifier: 'warning',
    as: 'a',
    href: '#',
  },
  render: (args) => <Button {...args} />,
};

export const WarningDisabled: Story = {
  args: {
    children: 'Yes, delete this vaccine',
    modifier: 'warning',
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const PreventDoubleClick: Story = {
  args: {
    children: 'Save and continue',
    preventDoubleClick: true,
  },
  render: (args) => <Button {...args} />,
};
