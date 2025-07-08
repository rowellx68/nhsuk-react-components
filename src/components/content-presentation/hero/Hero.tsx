import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';
import {
  Container,
  ContainerProps,
} from '@/components/layout/container/Container';
import { Base } from '@/internal/base/Base';
import { Column, Row } from '@/components/layout/grid/Grid';
import { Heading } from '@/components/typography/heading/Heading';
import { Paragraph } from '@/components/typography/paragraph/Paragraph';

export type HeroProps = (
  | {
      modifier?: undefined;
      imageUrl?: undefined;
    }
  | {
      modifier?: 'image-only' | 'image-and-content';
      imageUrl: string;
    }
  | {
      modifier?: 'content-only';
      imageUrl?: undefined;
    }
) &
  ElementProps<'section'>;

type HeroFactory = Factory<{
  props: HeroProps;
  ref: HTMLDivElement;
  staticComponents: {
    Container: typeof HeroContainer;
    Heading: typeof HeroHeading;
    Paragraph: typeof HeroParagraph;
  };
}>;

const Hero = factory<HeroFactory>(
  (
    { className, children, imageUrl, modifier = 'content-only', ...props },
    ref,
  ) => {
    const hasImage = modifier?.includes('image-') && imageUrl;

    return (
      <section
        className={clsx(
          'nhsuk-hero',
          {
            'nhsuk-hero--image': hasImage,
            'nhsuk-hero--image-description':
              modifier === 'image-and-content' && imageUrl,
          },
          className,
        )}
        {...props}
        style={hasImage ? { backgroundImage: `url('${imageUrl}')` } : {}}
        ref={ref}
      >
        {modifier === 'image-only' ? (
          <div className="nhsuk-hero__overlay" />
        ) : (
          children
        )}
      </section>
    );
  },
);

export type HeroContainerProps = {
  modifier?: 'overlay' | 'full';
} & Omit<ContainerProps, 'modifier'> &
  ElementProps<'div'>;

const HeroContainer = ({
  children,
  modifier = 'full',
  className,
  ...props
}: HeroContainerProps) => {
  const baseProps =
    modifier === 'overlay'
      ? { as: 'div', className: 'nhsuk-hero__overlay' }
      : { as: Fragment };

  return (
    <Base<any> {...baseProps}>
      <Container {...props}>
        <Row>
          <Column width="two-thirds">
            <div
              className={clsx(
                {
                  'nhsuk-hero__wrapper': modifier !== 'overlay',
                  'nhsuk-hero-content': modifier === 'overlay',
                },
                className,
              )}
            >
              {children}
              {modifier === 'overlay' && (
                <span className="nhsuk-hero__arrow" aria-hidden="true"></span>
              )}
            </div>
          </Column>
        </Row>
      </Container>
    </Base>
  );
};

export type HeroHeadingProps = ElementProps<'h1'>;

const HeroHeading = ({ className, ...props }: HeroHeadingProps) => (
  <Heading
    as="h1"
    className={clsx('nhsuk-u-margin-bottom-3', className)}
    {...props}
  />
);

export type HeroParagraphProps = ElementProps<'p'>;

const HeroParagraph = ({ className, ...props }: HeroParagraphProps) => (
  <Paragraph
    modifier="lead"
    className={clsx('nhsuk-u-margin-bottom-0', className)}
    {...props}
  />
);

Hero.displayName = 'Hero';
HeroContainer.displayName = 'Hero.Container';
HeroHeading.displayName = 'Hero.Heading';
HeroParagraph.displayName = 'Hero.Paragraph';

Hero.Container = HeroContainer;
Hero.Heading = HeroHeading;
Hero.Paragraph = HeroParagraph;

export { Hero, HeroContainer, HeroHeading, HeroParagraph };
