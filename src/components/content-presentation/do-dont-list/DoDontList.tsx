'use client';

import React from 'react';
import clsx from 'clsx';
import {
  DoDontListContextProvider,
  useDoDontListContext,
} from './DoDontList.context';
import { Base } from '@/internal/base/Base';
import { ElementProps, HeadingLevel } from '@/types/shared';
import { TickIcon } from '@/icons/tick/Tick';
import { CrossIcon } from '@/icons/cross/Cross';
import { Factory, factory } from '@/internal/factory/factory';

export type DoDontListProps = (
  | {
      modifier: 'cross';
      hidePrefix?: boolean;
    }
  | {
      modifier: 'tick';
      hidePrefix?: undefined;
    }
) & { title: string; headingLevel?: HeadingLevel } & ElementProps<'div'>;

type DoDontListFactory = Factory<{
  props: DoDontListProps;
  ref: HTMLDivElement;
  staticComponents: {
    Item: typeof DoDontListItem;
  };
}>;

const DoDontList = factory<DoDontListFactory>(
  (
    {
      modifier,
      hidePrefix,
      className,
      children,
      title,
      headingLevel = 'h3',
      ...props
    }: DoDontListProps,
    ref,
  ) => {
    return (
      <DoDontListContextProvider value={{ modifier, hidePrefix }}>
        <div
          ref={ref}
          className={clsx('nhsuk-do-dont-list', className)}
          {...props}
        >
          <Base as={headingLevel} className="nhsuk-do-dont-list__label">
            {title}
          </Base>
          <ul
            className={clsx('nhsuk-list', `nhsuk-list--${modifier}`, className)}
            role="list"
          >
            {children}
          </ul>
        </div>
      </DoDontListContextProvider>
    );
  },
);

export type DoDontListItemProps = ElementProps<'li'>;

const DoDontListItem = ({
  className,
  children,
  ...props
}: DoDontListItemProps) => {
  const { modifier, hidePrefix } = useDoDontListContext();

  return (
    <li className={className} {...props}>
      {modifier === 'tick' ? <TickIcon /> : <CrossIcon />}
      {modifier === 'cross' && !hidePrefix && 'do not '}
      {children}
    </li>
  );
};

DoDontList.displayName = 'DoDontList';
DoDontListItem.displayName = 'DoDontList.Item';

DoDontList.Item = DoDontListItem;

export { DoDontList, DoDontListItem };
