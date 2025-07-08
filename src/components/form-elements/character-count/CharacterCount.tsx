import React from 'react';
import {
  Textarea,
  TextareaProps,
} from '@/components/form-elements/textarea/Textarea';
import { Factory, factory } from '@/internal/factory/factory';

export type CharacterCountProps = (
  | {
      modifier: 'character-count';
      maxWords?: undefined;
      maxCharacterLength: number;
    }
  | {
      modifier: 'word-count';
      maxWords: number;
      maxCharacterLength?: undefined;
    }
) &
  Omit<TextareaProps, 'modifier'>;

type CharacterCountFactory = Factory<{
  props: CharacterCountProps;
  ref: HTMLTextAreaElement;
}>;

const CharacterCount = factory<CharacterCountFactory>((props, ref) => {
  return <Textarea {...props} ref={ref} />;
});

CharacterCount.displayName = 'CharacterCount';

export { CharacterCount };
