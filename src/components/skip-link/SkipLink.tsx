'use client';

import React, { useEffect, useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import { SkipLink as NhsSkipLink } from 'nhsuk-frontend';
import { ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type SkipLinkProps = ElementProps<'a'>;

type SkipLinkFactory = Factory<{
  props: SkipLinkProps;
  ref: HTMLAnchorElement;
}>;

const SkipLink = factory<SkipLinkFactory>(
  ({ children, className, href = '#maincontent', ...props }, ref) => {
    const internalRef = useRef<HTMLAnchorElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLAnchorElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      new NhsSkipLink(internalRef.current);
    }, [internalRef]);

    return (
      <a
        className={clsx('nhsuk-skip-link', className)}
        href={href}
        tabIndex={0}
        {...props}
        ref={internalRef}
      >
        {children}
      </a>
    );
  },
);

SkipLink.displayName = 'SkipLink';

export { SkipLink };
