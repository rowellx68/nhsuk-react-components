import React, { Fragment } from 'react';
import clsx from 'clsx';
import { ElementProps, Size } from '@/types/shared';
import { Base } from '@/internal/base/Base';

export type LabelProps = (
  | {
      size?: undefined;
      modifier?: undefined;
    }
  | {
      size: Exclude<Size, 'xl'>;
      modifier?: undefined;
    }
  | {
      modifier: 'page-heading';
      size: Exclude<Size, 'xl'>;
    }
) &
  ElementProps<'label', 'size' | 'as'>;

const Label = ({ className, size, modifier, ...props }: LabelProps) => {
  const component =
    modifier === 'page-heading' || size === 'l' ? 'h1' : Fragment;

  const baseProps =
    component === 'h1' ? { className: 'nhsuk-label-wrapper' } : {};

  return (
    <Base<any> as={component} {...baseProps}>
      <label
        className={clsx(
          'nhsuk-label',
          {
            'nhsuk-label--l': modifier === 'page-heading' && !size,
            [`nhsuk-label--${size}`]: size,
          },
          className,
        )}
        {...props}
      />
    </Base>
  );
};

Label.displayName = 'Label';

export { Label };
