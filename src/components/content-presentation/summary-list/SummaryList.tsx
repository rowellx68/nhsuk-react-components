import clsx from 'clsx';
import React from 'react';
import { Base } from '@/internal/base/Base';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

export type SummaryListProps = {
  modifier?: 'default' | 'no-border';
} & ElementProps<'dl'>;

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

export type SummaryListRowProps = Omit<ElementProps<'div'>, 'children'> & {
  rowKey: React.ReactNode;
  rowKeyProps?: Pick<ElementProps<'dt'>, 'className'>;
  value: React.ReactNode;
  valueProps?: Pick<ElementProps<'dd'>, 'className'>;
  actions?: React.ReactNode;
  actionsProps?: Pick<ElementProps<'dd'>, 'className'>;
};

type SummaryListRowFactory = Factory<{
  props: SummaryListRowProps;
  ref: HTMLDivElement;
  staticComponents: {
    Action: typeof SummaryListRowAction;
  };
}>;

const SummaryListRow = factory<SummaryListRowFactory>(
  (
    {
      className,
      rowKey,
      rowKeyProps = {},
      value,
      valueProps = {},
      actions,
      actionsProps = {},
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={clsx('nhsuk-summary-list__row', className)}
        {...props}
        ref={ref}
      >
        <dt className={clsx('nhsuk-summary-list__key', rowKeyProps.className)}>
          {rowKey}
        </dt>
        <dd className={clsx('nhsuk-summary-list__value', valueProps.className)}>
          {value}
        </dd>
        {actions && (
          <dd
            className={clsx(
              'nhsuk-summary-list__actions',
              actionsProps.className,
            )}
          >
            {actions}
          </dd>
        )}
      </div>
    );
  },
);

export type SummaryListRowActionLinkProps = {
  visuallyHiddenText: string;
} & ElementProps<'a'>;

type SummaryListRowActionLinkFactory = PolymorphicFactory<{
  props: SummaryListRowActionLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const SummaryListRowAction =
  polymorphicFactory<SummaryListRowActionLinkFactory>(
    (
      {
        children,
        as: component = 'a',
        visuallyHiddenText,
        ...props
      }: SummaryListRowActionLinkProps & AsElementProps,
      ref,
    ) => {
      return (
        <Base as={component} ref={ref} {...props}>
          {children}
          <VisuallyHidden> {visuallyHiddenText}</VisuallyHidden>
        </Base>
      );
    },
  );

SummaryList.displayName = 'SummaryList';
SummaryListRow.displayName = 'SummaryList.Row';
SummaryListRowAction.displayName = 'SummaryList.Row.Action';

SummaryList.Row = SummaryListRow;
SummaryList.Row.Action = SummaryListRowAction;

export { SummaryList, SummaryListRow, SummaryListRowAction };
