import React from 'react';
import clsx from 'clsx';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import { Base } from '@/internal/base/Base';
import { ElementProps, HeadingLevel } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type WarningCalloutProps = ElementProps<'div'> & {
  headingLevel?: HeadingLevel;
  heading: React.ReactNode;
};

type WarningCalloutFactory = Factory<{
  props: WarningCalloutProps;
  ref: HTMLDivElement;
}>;

const WarningCallout = factory<WarningCalloutFactory>(
  ({ className, children, heading, headingLevel = 'h3', ...props }, ref) => {
    const visuallyHiddenText =
      typeof heading === 'string' && heading.toLowerCase().includes('important')
        ? ':'
        : 'Important:';

    return (
      <div
        className={clsx('nhsuk-warning-callout', className)}
        {...props}
        ref={ref}
      >
        <Base as={headingLevel} className="'nhsuk-warning-callout__label'">
          <span role="text">
            <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
            {heading}
          </span>
        </Base>
        {children}
      </div>
    );
  },
);

WarningCallout.displayName = 'WarningCallout';

export { WarningCallout };
