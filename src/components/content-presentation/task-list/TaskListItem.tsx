'use client';

import clsx from 'clsx';
import React from 'react';
import { TaskListItemStatus } from './TaskListItemStatus';
import { TaskListItemContextProvider } from './TaskList.context';
import { BaseProps, Base } from '@/internal/base/Base';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import { AsElementProps } from '@/types/shared';

export type TaskListItemProps = {
  title: React.ReactNode;
  hint?: React.ReactNode;
  status: React.ReactNode;
} & BaseProps;

type TaskListItemFactory = PolymorphicFactory<{
  props: Omit<TaskListItemProps, 'children'>;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  staticComponents: {
    Status: typeof TaskListItemStatus;
  };
}>;

export const TaskListItem = polymorphicFactory<TaskListItemFactory>(
  (
    {
      className,
      title,
      hint,
      status,
      as: component = 'div',
      ...props
    }: TaskListItemProps & AsElementProps<'div'>,
    ref,
  ) => {
    const rowId = useIdWithPrefix('task-list-item');
    const modifier = component === 'div' ? undefined : 'with-link';

    const descriptionId = `${rowId}-hint`;
    const statusId = `${rowId}-status`;

    const componentProps =
      modifier === 'with-link'
        ? {
            ref,
            ...props,
            className: clsx('nhsuk-link nhsuk-task-list__link', className),
            'aria-describedby': clsx(statusId, { [descriptionId]: hint }),
          }
        : {};

    return (
      <li
        className={clsx('nhsuk-task-list__item', {
            [`nhsuk-task-list__item--${modifier}`]: modifier,
          })}
      >
          <div className={clsx('nhsuk-task-list__item-name-and-hint')}>
            <Base as={component} {...componentProps}>
              {title}
            </Base>
            {hint && (
              <div id={descriptionId} className="nhsuk-task-list__hint">
                {hint}
              </div>
            )}
          </div>
          <TaskListItemContextProvider value={{ modifier, rowId }}>
            {status}
          </TaskListItemContextProvider>
      </li>
    );
  },
);

TaskListItem.displayName = 'TaskList.Item';
