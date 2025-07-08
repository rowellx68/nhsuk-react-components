import React from 'react';
import clsx from 'clsx';
import { factory, Factory } from '@/internal/factory/factory';
import { ElementProps, HeadingLevel } from '@/types/shared';
import { Heading } from '@/components/typography/heading/Heading';

export type PanelProps = ElementProps<'div'> & {
  title: React.ReactNode;
  headingLevel?: HeadingLevel;
};

type PanelFactory = Factory<{
  props: PanelProps;
  ref: HTMLDivElement;
}>;

const Panel = factory<PanelFactory>(
  ({ className, children, headingLevel = 'h1', title, ...props }, ref) => {
    return (
      <div className={clsx('nhsuk-panel', className)} {...props} ref={ref}>
        <Heading as={headingLevel} className="nhsuk-panel__title">
          {title}
        </Heading>
        <div className="nhsuk-panel__body">{children}</div>
      </div>
    );
  },
);

Panel.displayName = 'Panel';

export { Panel };
