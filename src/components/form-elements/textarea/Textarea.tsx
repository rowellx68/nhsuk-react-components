'use client';

import React, {
  Fragment,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import clsx from 'clsx';
import { CharacterCount as NhsCharacterCount } from 'nhsuk-frontend';
import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/form-elements/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';
import { Base } from '@/internal/base/Base';
import { Hint } from '@/components/form-elements/hint/Hint';

export type TextareaProps = BaseFormElementProps &
  ElementProps<'textarea'> &
  (
    | {
        variant: 'character-count';
        maxWords?: undefined;
        maxCharacterLength: number;
        threshold?: number;
      }
    | {
        variant: 'word-count';
        maxWords: number;
        maxCharacterLength?: undefined;
        threshold?: number;
      }
    | {
        variant?: 'textarea';
        maxWords?: undefined;
        maxCharacterLength?: undefined;
        threshold?: undefined;
      }
  );

type TextareaFactory = Factory<{
  props: TextareaProps;
  ref: HTMLTextAreaElement;
}>;

const Textarea = factory<TextareaFactory>(
  (
    {
      variant = 'textarea',
      rows = 5,
      threshold,
      maxCharacterLength,
      maxWords,
      ...props
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);
    const internalRef = useRef<HTMLTextAreaElement>(null);

    const characterCount = variant !== 'textarea';
    const baseProps = {
      as: characterCount ? 'div' : Fragment,
      ...(characterCount
        ? {
            className: 'nhsuk-character-count',
            'data-module': 'nhsuk-character-count',
            'data-maxwords': variant === 'word-count' ? maxWords : undefined,
            'data-maxlength':
              variant === 'character-count' ? maxCharacterLength : undefined,
            'data-threshold': threshold,
          }
        : {}),
    };

    const message = useMemo(() => {
      if (variant === 'character-count') {
        return `You have ${maxCharacterLength} characters remaining`;
      }

      if (variant === 'word-count') {
        return `You have ${maxWords} words remaining`;
      }

      return undefined;
    }, [variant, maxWords, maxCharacterLength]);

    useEffect(() => {
      if (!characterCount) {
        return;
      }

      if (!internalRef.current) {
        return;
      }

      new NhsCharacterCount(
        internalRef.current.closest('[data-module="nhsuk-character-count"]'),
      );
    }, [internalRef, characterCount, maxCharacterLength, maxWords]);

    return (
      <Base<any> {...baseProps}>
        <FormGroup
          as="textarea"
          inputType="textarea"
          withErrorLine
          {...props}
          ref={internalRef}
          render={({ id, name, className, withError, ...rest }) => (
            <>
              <textarea
                id={id}
                name={name}
                className={clsx(
                  'nhsuk-textarea',
                  {
                    'nhsuk-textarea--error': withError,
                    'nhsuk-js-character-count': characterCount,
                  },
                  className,
                )}
                rows={rows}
                {...rest}
              />
              {characterCount && (
                <Hint
                  className="nhsuk-character-count__message"
                  id={`${id}-info`}
                >
                  {message}
                </Hint>
              )}
            </>
          )}
        />
      </Base>
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
