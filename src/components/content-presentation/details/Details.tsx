'use client';

import React, { useEffect, useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import { Details as NhsDetails } from 'nhsuk-frontend';
import { ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type DetailsProps = {
  modifier?: 'default' | 'expander';
} & ElementProps<'details'>;

type DetailsFactory = Factory<{
  props: DetailsProps;
  ref: HTMLDetailsElement;
  staticComponents: {
    Summary: typeof DetailsSummary;
    Text: typeof DetailsText;
    ExpanderGroup: typeof DetailsExpanderGroup;
  };
}>;

const Details = factory<DetailsFactory>(
  ({ modifier, className, ...props }: DetailsProps, ref) => {
    const internalRef = useRef<HTMLDetailsElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLDetailsElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      new NhsDetails(internalRef.current);
    }, [internalRef]);

    return (
      <details
        className={clsx(
          'nhsuk-details',
          { 'nhsuk-expander': modifier === 'expander' },
          className,
        )}
        {...props}
        ref={internalRef}
      />
    );
  },
);

export type DetailsSummaryProps = ElementProps<'summary'>;

const DetailsSummary = ({
  className,
  children,
  ...props
}: DetailsSummaryProps) => {
  return (
    <summary className={clsx('nhsuk-details__summary', className)} {...props}>
      <span className="nhsuk-details__summary-text">{children}</span>
    </summary>
  );
};

export type DetailsTextProps = ElementProps<'div'>;

const DetailsText = ({ className, ...props }: DetailsTextProps) => {
  return <div className={clsx('nhsuk-details__text', className)} {...props} />;
};

export type ExpanderGroupProps = ElementProps<'div'>;

const DetailsExpanderGroup = ({
  children,
  className,
  ...props
}: ExpanderGroupProps) => {
  return (
    <div className={clsx('nhsuk-expander-group', className)} {...props}>
      {children}
    </div>
  );
};

Details.displayName = 'Details';
DetailsSummary.displayName = 'Details.Summary';
DetailsText.displayName = 'Details.Text';
DetailsExpanderGroup.displayName = 'Details.ExpanderGroup';

Details.Summary = DetailsSummary;
Details.Text = DetailsText;
Details.ExpanderGroup = DetailsExpanderGroup;

export { Details, DetailsSummary, DetailsText, DetailsExpanderGroup };
