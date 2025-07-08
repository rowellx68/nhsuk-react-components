import React from 'react';
import clsx from 'clsx';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import {
  AsElementProps,
  ElementProps,
  HeadingLevel,
  Size,
} from '@/types/shared';

export type HeadingProps = {
  size?: Size;
  modifier?: 'caption-bottom';
} & BaseProps &
  AsElementProps<HeadingLevel> &
  ElementProps<'h1'>;

type HeadingFactory = PolymorphicFactory<{
  props: HeadingProps;
  defaultComponent: 'h1';
  defaultRef: HTMLHeadingElement;
}>;

const Heading = polymorphicFactory<HeadingFactory>(
  (
    { className, size, modifier, as: component = 'h1', ...props }: HeadingProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={
          clsx(
            {
              [`nhsuk-heading-${size}`]: size,
              'nhsuk-caption--bottom': modifier,
            },
            className,
          ) || undefined
        }
        {...props}
        ref={ref}
      />
    );
  },
);

Heading.displayName = 'Heading';

export { Heading };
