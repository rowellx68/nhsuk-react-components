'use client';

import React from 'react';
import clsx from 'clsx';
import {
  DoAndDontListContextProvider,
  useDoAndDontListContext,
} from './DoAndDontList.context';
import { Base, BaseProps } from '@/internal/base/Base';
import { AsElementProps, ElementProps, HeadingLevel } from '@/types/shared';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { TickIcon } from '@/icons/tick/Tick';
import { CrossIcon } from '@/icons/cross/Cross';
import { Factory, factory } from '@/internal/factory/factory';

export type DoAndDontListProps = {
  variant: 'do' | 'dont';
} & ElementProps<'div'>;

type DoAndDontListFactory = Factory<{
  props: DoAndDontListProps;
  ref: HTMLDivElement;
  staticComponents: {
    Label: typeof DoAndDontListLabel;
    List: typeof DoAndDontListList;
    Item: typeof DoAndDontListItem;
  };
}>;

const DoAndDontList = factory<DoAndDontListFactory>(
  ({ variant, className, ...props }: DoAndDontListProps, ref) => {
    return (
      <DoAndDontListContextProvider value={{ variant }}>
        <div
          ref={ref}
          className={clsx('nhsuk-do-dont-list', className)}
          {...props}
        />
      </DoAndDontListContextProvider>
    );
  },
);

export type DoAndDontListLabelProps = BaseProps & AsElementProps<HeadingLevel>;

type DoAndDontListLabelFactory = PolymorphicFactory<{
  props: DoAndDontListLabelProps;
  defaultComponent: 'h2';
  defaultRef: HTMLHeadingElement;
}>;

const DoAndDontListLabel = polymorphicFactory<DoAndDontListLabelFactory>(
  (
    { className, as: component = 'h2', ...props }: DoAndDontListLabelProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-do-dont-list__label', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export type DoAndDontListListProps = ElementProps<'ul'>;

const DoAndDontListList = ({
  className,
  role = 'list',
  ...props
}: DoAndDontListListProps) => {
  const { variant } = useDoAndDontListContext();

  return (
    <ul
      className={clsx(
        'nhsuk-list',
        {
          'nhsuk-list--tick': variant === 'do',
          'nhsuk-list--cross': variant === 'dont',
        },
        className,
      )}
      role={role}
      {...props}
    />
  );
};

export type DoAndDontListItemProps = ElementProps<'li'>;

const DoAndDontListItem = ({
  className,
  children,
  ...props
}: DoAndDontListItemProps) => {
  const { variant } = useDoAndDontListContext();

  return (
    <li className={className} {...props}>
      {variant === 'do' && <TickIcon />}
      {variant === 'dont' && <CrossIcon />}
      {children}
    </li>
  );
};

DoAndDontList.displayName = 'DoAndDontList';
DoAndDontListLabel.displayName = 'DoAndDontList.Label';
DoAndDontListList.displayName = 'DoAndDontList.List';
DoAndDontListItem.displayName = 'DoAndDontList.Item';

DoAndDontList.Label = DoAndDontListLabel;
DoAndDontList.List = DoAndDontListList;
DoAndDontList.Item = DoAndDontListItem;

export {
  DoAndDontList,
  DoAndDontListLabel,
  DoAndDontListList,
  DoAndDontListItem,
};
