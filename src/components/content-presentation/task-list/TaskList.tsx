'use client';

import React from 'react';
import clsx from 'clsx';
import { TaskListItem } from './TaskListItem';
import { ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type TaskListProps = ElementProps<'ul'>;

type TaskListFactory = Factory<{
  props: TaskListProps;
  ref: HTMLUListElement;
  staticComponents: {
    Item: typeof TaskListItem;
  };
}>;

export const TaskList = factory<TaskListFactory>(
  ({ className, ...props }: TaskListProps, ref) => {
    return (
      <ul ref={ref} className={clsx('nhsuk-task-list', className)} {...props} />
    );
  },
);

TaskList.Item = TaskListItem;

TaskList.displayName = 'TaskList';
