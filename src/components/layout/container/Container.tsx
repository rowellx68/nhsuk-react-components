import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type ContainerProps = {
  /**
   * `set-width` will be deprecated in the future. Use `default` instead.
   */
  modifier?: 'fluid' | 'set-width' | 'default';
} & ElementProps<'div'>;

const Container = ({
  className,
  modifier = 'default',
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        {
          'nhsuk-width-container':
            modifier === 'default' || modifier === 'set-width',
          'nhsuk-width-container-fluid': modifier === 'fluid',
        },
        className,
      )}
      {...props}
    />
  );
};

Container.displayName = 'Container';

export { Container };
