'use client';

import React, { useEffect, useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { Button as NhsButton } from 'nhsuk-frontend';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type ButtonProps = {
  modifier?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'secondary-solid'
    | 'reverse'
    | 'warning'
    | 'login';
  disabled?: boolean;
  preventDoubleClick?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & BaseProps;

type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
}>;

const Button = polymorphicFactory<ButtonFactory>(
  (
    {
      className,
      children,
      modifier = 'default',
      disabled,
      preventDoubleClick,
      type = 'button',
      as: component = 'button',
      ...props
    }: ButtonProps & AsElementProps,
    ref,
  ) => {
    const internalRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLButtonElement);

    useEffect(() => {
      if (!internalRef.current || !preventDoubleClick) {
        return;
      }

      new NhsButton(internalRef.current);
    }, [internalRef, preventDoubleClick]);

    const notButton = component !== 'button';

    const notButtonProps = notButton
      ? {
          role: 'button',
          draggable: 'false',
        }
      : {
          type,
          disabled,
        };

    return (
      <Base<any>
        as={component}
        className={clsx(
          'nhsuk-button',
          {
            [`nhsuk-button--${modifier}`]:
              modifier !== 'primary' && modifier !== 'default',
            'nhsuk-button--disabled': disabled,
          },
          className,
        )}
        data-module="nhsuk-button"
        aria-disabled={disabled ? 'true' : undefined}
        data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
        {...notButtonProps}
        {...props}
        ref={internalRef}
      >
        {children}
      </Base>
    );
  },
);

Button.displayName = 'Button';

export { Button };
