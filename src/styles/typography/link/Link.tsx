import React from 'react';
import clsx from 'clsx';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type LinkProps = {
  noVisitedState?: boolean;
} & BaseProps;

type LinkFactory = PolymorphicFactory<{
  props: LinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const Link = polymorphicFactory<LinkFactory>(
  (
    {
      className,
      noVisitedState,
      as: component = 'a',
      ...props
    }: LinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx(
          'nhsuk-link',
          { 'nhsuk-link--no-visited-state': noVisitedState },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Link.displayName = 'Link';

export { Link };
