import clsx from 'clsx';
import React from 'react';
import { SummaryListRow } from './SummaryListRow';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type SummaryListProps = {
  modifier?: 'default' | 'no-border';
} & Omit<ElementProps<'dl'>, 'children'>;

type SummaryListFactory = Factory<{
  props: SummaryListProps;
  ref: HTMLDListElement;
  staticComponents: {
    Row: typeof SummaryListRow;
  };
}>;

const SummaryList = factory<SummaryListFactory>(
  ({ className, modifier, ...props }, ref) => {
    return (
      <dl
        className={clsx(
          'nhsuk-summary-list',
          { 'nhsuk-summary-list--no-border': modifier === 'no-border' },
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

SummaryList.displayName = 'SummaryList';

SummaryList.Row = SummaryListRow;

export { SummaryList };
