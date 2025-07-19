import React, { ComponentProps } from 'react';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import { Base } from '@/internal/base/Base';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type SummaryListRowActionLinkProps = {
  visuallyHiddenText: string;
} & ComponentProps<'a'>;

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

SummaryListRowAction.displayName = 'SummaryList.Row.Action';

export { SummaryListRowAction };
