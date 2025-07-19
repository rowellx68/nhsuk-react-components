import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type BreadcrumbProps = {
  modifier?: 'default' | 'reverse';
} & ElementProps<'nav'>;

type BreadcrumbFactory = Factory<{
  props: BreadcrumbProps;
  ref: HTMLDivElement;
  staticComponents: {
    Item: typeof BreadcrumbItem;
  };
}>;

const Breadcrumb = factory<BreadcrumbFactory>(
  (
    { children, className, modifier = 'default', ...props }: BreadcrumbProps,
    ref,
  ) => {
    const items = React.Children.toArray(children).filter(
      (child) => React.isValidElement(child) && child.type === BreadcrumbItem,
    );

    const lastItem = items[items.length - 1] as
      | ReactElement<BreadcrumbItemProps>
      | undefined;

    const backLink =
      lastItem != undefined
        ? React.cloneElement(lastItem, {
            __internal_modifier: 'backlink',
            __internal_visuallyHiddenText: 'Back to &nbsp;',
          })
        : null;

    return (
      <nav
        className={clsx(
          'nhsuk-breadcrumb',
          { 'nhsuk-breadcrumb--reverse': modifier === 'reverse' },
          className,
        )}
        aria-label="Breadcrumb"
        {...props}
        ref={ref}
      >
        <ol className="nhsuk-breadcrumb__list">{children}</ol>
        {backLink}
      </nav>
    );
  },
);

export type BreadcrumbItemProps = BaseProps &
  (
    | {
        __internal_modifier?: 'default';
        __internal_visuallyHiddenText?: undefined;
      }
    | {
        __internal_modifier: 'backlink';
        __internal_visuallyHiddenText?: string;
      }
  );

type BaseCrumbItemFactory = PolymorphicFactory<{
  props: BreadcrumbItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const BreadcrumbItem = polymorphicFactory<BaseCrumbItemFactory>(
  (
    {
      className,
      as: component = 'a',
      children,
      __internal_modifier = 'default',
      __internal_visuallyHiddenText = 'Back to &nbsp;',
      ...props
    }: BreadcrumbItemProps & AsElementProps,
    ref,
  ) => {
    return __internal_modifier === 'default' ? (
      <li className="nhsuk-breadcrumb__item">
        <Base
          as={component}
          className={clsx('nhsuk-breadcrumb__link', className)}
          {...props}
          ref={ref}
        >
          {children}
        </Base>
      </li>
    ) : (
      <p className="nhsuk-breadcrumb__back">
        <Base
          as={component}
          className={clsx('nhsuk-breadcrumb__backlink', className)}
          {...props}
          ref={ref}
        >
          <VisuallyHidden>{__internal_visuallyHiddenText}</VisuallyHidden>
          {children}
        </Base>
      </p>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbItem.displayName = 'Breadcrumb.Item';

Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb, BreadcrumbItem };
