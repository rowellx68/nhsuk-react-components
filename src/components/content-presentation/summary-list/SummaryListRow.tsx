import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import { SummaryListRowAction } from './SummaryListRowAction';
import { Factory, factory } from '@/internal/factory/factory';

export type SummaryListRowProps = Omit<ComponentProps<'div'>, 'children'> & {
  rowKey: React.ReactNode;
  keyProps?: Pick<ComponentProps<'dt'>, 'className'>;
  rowValue: React.ReactNode;
  valueProps?: Pick<ComponentProps<'dd'>, 'className'>;
  rowActions?: React.ReactNode;
  actionsProps?: Pick<ComponentProps<'dd'>, 'className'>;
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
      keyProps: rowKeyProps = {},
      rowValue,
      valueProps = {},
      rowActions,
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
          {rowValue}
        </dd>
        {rowActions && (
          <dd
            className={clsx(
              'nhsuk-summary-list__actions',
              actionsProps.className,
            )}
          >
            {rowActions}
          </dd>
        )}
      </div>
    );
  },
);

SummaryListRow.displayName = 'SummaryList.Row';

SummaryListRow.Action = SummaryListRowAction;

export { SummaryListRow };
