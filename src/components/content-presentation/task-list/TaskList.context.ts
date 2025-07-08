import { createContext, useContext } from 'react';

export type TaskListItemContextValue = {
  modifier?: 'with-link';
  rowId?: string;
};

const TaskListItemContext = createContext<TaskListItemContextValue>({});

export const useTaskListItemContext = () => useContext(TaskListItemContext);
export const TaskListItemContextProvider = TaskListItemContext.Provider;
