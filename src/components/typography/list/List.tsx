import React from 'react';
import clsx from 'clsx';
import { Base } from '@/internal/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { ElementProps } from '@/types/shared';

export type ListProps = {
  modifier?: 'ordered' | 'unordered';
  border?: boolean;
} & ElementProps<'ul', 'type'>;

type ListFactory = PolymorphicFactory<{
  props: ListProps;
  defaultComponent: 'ul';
  defaultRef: HTMLElement;
  staticComponents: {
    Item: typeof ListItem;
  };
}>;

const List = polymorphicFactory<ListFactory>(
  ({ className, modifier, border, ...props }, ref) => {
    const component = modifier === 'ordered' ? 'ol' : 'ul';

    return (
      <Base<any>
        as={component}
        className={clsx(
          'nhsuk-list',
          {
            'nhsuk-list--bullet': modifier === 'unordered',
            'nhsuk-list--number': modifier === 'ordered',
            'nhsuk-list--border': border,
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export type ListItemProps = ElementProps<'li'>;

const ListItem = ({ ...props }: ListItemProps) => {
  return <li {...props} />;
};

List.displayName = 'List';
ListItem.displayName = 'List.Item';

List.Item = ListItem;

export { List, ListItem };
