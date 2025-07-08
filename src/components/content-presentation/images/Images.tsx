import React from 'react';
import clsx from 'clsx';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type ImagesProps = Omit<BaseProps, 'children'> & {
  caption?: React.ReactNode;
};

type ImagesFactory = PolymorphicFactory<{
  props: ImagesProps;
  defaultComponent: 'img';
  defaultRef: HTMLImageElement;
}>;

const Images = polymorphicFactory<ImagesFactory>(
  (
    {
      className,
      as: component = 'img',
      caption,
      ...props
    }: ImagesProps & AsElementProps,
    ref,
  ) => {
    return (
      <figure className="nhsuk-image">
        <Base
          as={component}
          className={clsx('nhsuk-image__img', className)}
          {...props}
          ref={ref}
        />
        {caption && (
          <figcaption className="nhsuk-image__caption">{caption}</figcaption>
        )}
      </figure>
    );
  },
);

Images.displayName = 'Images';

export { Images };
