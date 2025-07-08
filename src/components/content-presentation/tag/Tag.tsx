import clsx from 'clsx';
import React from 'react';
import { ElementProps } from '@/types/shared';

export type TagColour =
  | 'white'
  | 'grey'
  | 'green'
  | 'aqua-green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';

export type TagProps = {
  modifier?: TagColour;
} & ElementProps<'strong'>;

const Tag = ({ modifier = 'grey', className, ...props }: TagProps) => {
  return (
    <strong
      className={clsx('nhsuk-tag', `nhsuk-tag--${modifier}`, className)}
      {...props}
    />
  );
};

Tag.displayName = 'Tag';

export { Tag };
