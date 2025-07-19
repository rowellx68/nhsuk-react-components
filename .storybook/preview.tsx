import type { Preview } from '@storybook/react-vite';
import React from 'react';

import 'nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: {
          name: 'Light',
          value: '#f0f4f5',
        },
        blue: {
          name: 'Blue',
          value: '#005eb8',
        },
        transparent: {
          name: 'Transparent',
          value: 'transparent',
        },
      },
    },
    options: {
      storySort: {
        order: ['Patterns'],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="js-enabled nhsuk-frontend-supported">
        <Story />
      </div>
    ),
  ],
};

export default preview;
