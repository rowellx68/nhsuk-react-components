import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { List } from '@/components/typography/list/List';
import { Paragraph } from '@/components/typography/paragraph/Paragraph';

/**
 * Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.
 *
 * https://service-manual.nhs.uk/design-system/components/card
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Navigation/Card',
  component: Card,
  subcomponents: {
    'Card.Content': Card.Content,
    'Card.Description': Card.Description,
    'Card.Heading': Card.Heading,
    'Card.Image': Card.Image,
    'Card.Link': Card.Link,
    'Card.Group': Card.Group,
    'Card.GroupItem': Card.GroupItem,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Content>
            <Card.Heading as="h3">
              If you need help now, but it's not an emergency
            </Card.Heading>
            <Card.Description>
              Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const DefaultWithHtml: Story = {
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Content>
            <Card.Heading as="h3">Help from NHS 111</Card.Heading>
            <p className="nhsuk-body">
              If you're worried about a symptom and not sure what help you need,
              NHS 111 can tell you what to do next.
            </p>
            <p className="nhsuk-body">
              Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.
            </p>
            <p className="nhsuk-body">
              For a life-threatening emergency call 999.
            </p>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const Clickable: Story = {
  args: {
    clickable: true,
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Content>
            <Card.Heading>
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their
              carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const Feature: Story = {
  args: {
    variant: 'feature',
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Content>
            <Card.Heading>Feature card heading</Card.Heading>
            <Card.Description>Feature card description</Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const CareCardEmergency: Story = {
  args: {
    variant: 'emergency',
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Heading visuallyHiddenText="Immediate action required: ">
            Call 999 if you have sudden chest pain that:
          </Card.Heading>
          <Card.Content>
            <List variant="unordered">
              <List.Item>spreads to your arms, back, neck or jaw</List.Item>
              <List.Item>makes your chest feel tight or heavy</List.Item>
              <List.Item>
                also started with shortness of breath, sweating and feeling or
                being sick
              </List.Item>
            </List>
            <Paragraph>
              You could be having a heart attack. Call 999 immediately as you
              need immediate treatment in hosParagraphital.
            </Paragraph>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const CareCardNonUrgent: Story = {
  args: {
    variant: 'non-urgent',
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Heading visuallyHiddenText="Non-urgent advice: ">
            Speak to a GP if:
          </Card.Heading>
          <Card.Content>
            <List variant="unordered">
              <List.Item>you're not sure it's chickenpox</List.Item>
              <List.Item>
                the skin around the blisters is red, hot or painful (signs of
                infection)
              </List.Item>
              <List.Item>
                your child is <a href="#">dehydrated</a>
              </List.Item>
              <List.Item>
                you're concerned about your child or they get worse
              </List.Item>
            </List>
            <Paragraph>
              Tell the receptionist you think it's chickenpox before going in.
              They may recommend a special appointment time if other patients
              are at risk.
            </Paragraph>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const CareCardUrgent: Story = {
  args: {
    variant: 'urgent',
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Heading visuallyHiddenText="Urgent advice: ">
            Ask for an urgent GP appointment if:
          </Card.Heading>
          <Card.Content>
            <List variant="unordered">
              <List.Item>you're an adult and have chickenpox</List.Item>
              <List.Item>
                you're pregnant and haven't had chickenpox before and you've
                been near someone with it
              </List.Item>
              <List.Item>
                you have a weakened immune system and you've been near someone
                with chickenpox
              </List.Item>
              <List.Item>you think your newborn baby has chickenpox</List.Item>
            </List>
            <Paragraph>
              In these situations, your GP can prescribe medicine to prevent
              complications. You need to take it within 24 hours of the spots
              coming out.
            </Paragraph>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    clickable: true,
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Breast screening</Card.Link>
            </Card.Heading>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const PrimaryWithDescription: Story = {
  args: {
    variant: 'primary',
    clickable: true,
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Content>
            <Card.Heading>
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their
              carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    clickable: true,
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card {...args}>
          <Card.Content>
            <Card.Heading>
              <Card.Link href="#">Urgent and emergency care services</Card.Link>
            </Card.Heading>
            <Card.Description>
              Services the NHS provides if you need urgent or emergency medical
              help
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const TopTask: Story = {
  args: {
    clickable: true,
    variant: 'top-task',
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable {...args}>
          <Card.Content>
            <Card.Heading as="h5">
              <Card.Link href="#">Order a repeat prescription</Card.Link>
            </Card.Heading>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable {...args}>
          <Card.Image src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" />
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Exercise</Card.Link>
            </Card.Heading>
            <Card.Description>
              Programmes, workouts and tips to get you moving and improve your
              fitness and wellbeing
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};
