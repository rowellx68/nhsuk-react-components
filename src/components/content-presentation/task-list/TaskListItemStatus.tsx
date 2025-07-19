'use client';

import clsx from 'clsx';
import React from 'react';
import { TagProps, Tag } from '../tag/Tag';
import { useTaskListItemContext } from './TaskList.context';

export type TaskListItemStatusProps = {
  modifier: 'completed' | 'cannot-start-yet' | 'incomplete';
} & Omit<TagProps, 'modifier' | 'id'>;

export const TaskListItemStatus = ({
  modifier = 'incomplete',
  children,
  ...props
}: TaskListItemStatusProps) => {
  const { rowId } = useTaskListItemContext();

  const statusId = `${rowId}-status`;

  return (
    <div
      id={modifier === 'completed' ? statusId : undefined}
      className={clsx(
        'nhsuk-task-list__status',
        `nhsuk-task-list__status--${modifier}`,
      )}
      {...props}
    >
      {modifier === 'incomplete' ? (
        <Tag id={statusId} modifier="blue" {...props}>
          {children}
        </Tag>
      ) : (
        children
      )}
    </div>
  );
};

TaskListItemStatus.displayName = 'TaskList.Item.Status';
