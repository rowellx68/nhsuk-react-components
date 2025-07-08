import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';

/**
 * Use the appropriate header at the top of every page to show users they are on an NHS service and help them get started in finding what they need.
 *
 * https://service-manual.nhs.uk/design-system/components/header
 */
const meta: Meta<typeof Header> = {
  title: 'Components/Navigation/Header',
  component: Header,
  subcomponents: {
    'Header.Container': Header.Container,
    'Header.Service': Header.Service,
    'Header.ServiceLogo': Header.ServiceLogo,
    'Header.ServiceNameLink': Header.ServiceNameLink,
    'Header.Search': Header.Search,
    'Header.Nav': Header.Nav,
    'Header.NavList': Header.NavList,
    'Header.NavItem': Header.NavItem,
    'Header.Account': Header.Account,
    'Header.AccountItem': Header.AccountItem,
    'Header.AccountLink': Header.AccountItemLink,
    'Header.AccountForm': Header.AccountItemForm,
    'Header.AccountButton': Header.AccountButton,
  } as Record<string, React.ComponentType<any>>,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo modifier="logo-only" href="#" />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Health A to Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const ServiceWhiteWithAccountLoggedIn: Story = {
  args: {
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
        <Header.Account>
          <Header.AccountItemLink href="#" modifier="icon">
            florence.nightingale@nhs.net
          </Header.AccountItemLink>
          <Header.AccountItemForm action="#" method="post">
            <Header.AccountButton>Log out</Header.AccountButton>
          </Header.AccountItemForm>
        </Header.Account>
      </Header.Container>
    </Header>
  ),
};

export const ServiceWhiteWithAccountLoggedOut: Story = {
  args: {
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
        <Header.Account>
          <Header.AccountItemLink href="#">Login</Header.AccountItemLink>
        </Header.Account>
      </Header.Container>
    </Header>
  ),
};

export const DefaultWhiteNavigationJustified: Story = {
  args: {
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo modifier="logo-only" href="#" />
        </Header.Service>
      </Header.Container>
      <Header.Nav modifier="justified">
        <Header.NavList>
          <Header.NavItem href="#">Health A to Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const OrganisationalWhiteWithSearch: Story = {
  args: {
    modifier: 'organisation',
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

export const OrganisationalWhiteWithSearchNavigation: Story = {
  args: {
    modifier: 'organisation',
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem href="#" active>
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Join our team</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const OrganisationalWhiteWithSearchNavigationCustomLogo: Story = {
  args: {
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            modifier="logo-only"
            logo={{
              src: 'https://nhsuk.github.io/nhsuk-frontend/assets/example-logo.svg',
              width: 280,
              alt: 'Great Ormond Street Hospital for Children NHS Foundation Trust logo',
            }}
            href="#"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem href="#" active>
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Join our team</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const OrganisationalWhiteWithSearchNavigationWhite: Story = {
  args: {
    modifier: 'organisation',
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav colour="white">
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem href="#" active>
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Join our team</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const ServiceWhiteWithSearch: Story = {
  args: {
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Prototype kit" />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

export const ServiceWhiteSeparateWithSearch: Story = {
  args: {
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#nhs" modifier="logo-only" />
          <Header.ServiceNameLink href="#">
            Find your NHS number
          </Header.ServiceNameLink>
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

export const ServiceWhiteSeparateUnlinkedWithSearch: Story = {
  args: {
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#nhs" modifier="logo-only" unlinked />
          <Header.ServiceNameLink href="#">
            Find your NHS number
          </Header.ServiceNameLink>
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

export const OrganisationalWithSearch: Story = {
  args: {
    modifier: 'organisation',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

export const OrganisationalWithSearchNavigation: Story = {
  args: {
    modifier: 'organisation',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem href="#" active>
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Join our team</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

// Remove items below

export const WithServiceName: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Digital service manual" />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">NHS service standard</Header.NavItem>
          <Header.NavItem href="#">Design system</Header.NavItem>
          <Header.NavItem href="#">Content guide</Header.NavItem>
          <Header.NavItem href="#">Accessibility</Header.NavItem>
          <Header.NavItem href="#">Community and contribution</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const LogoAndServiceName: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
      </Header.Container>
    </Header>
  ),
};

export const SearchBar: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo modifier="logo-only" href="#" />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

export const Navigation: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo modifier="logo-only" href="#" />
        </Header.Service>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">NHS service standard</Header.NavItem>
          <Header.NavItem active href="#">
            Design system
          </Header.NavItem>
          <Header.NavItem href="#">Content guide</Header.NavItem>
          <Header.NavItem href="#">Accessibility</Header.NavItem>
          <Header.NavItem href="#">Community and contribution</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const AccountInformationAndLinks: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
        <Header.Account>
          <Header.AccountItem>
            <Header.AccountItemLink href="#" modifier="icon">
              Florence Nightingale
            </Header.AccountItemLink>
          </Header.AccountItem>
          <Header.AccountItem>
            <Header.AccountItemForm action="#" method="post">
              <Header.AccountButton>Log out</Header.AccountButton>
            </Header.AccountItemForm>
          </Header.AccountItem>
        </Header.Account>
      </Header.Container>
    </Header>
  ),
};

export const ComplexAccountInformationAndLinks: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
        <Header.Account>
          <Header.AccountItem>
            <Header.AccountItemLink href="#" modifier="icon">
              Florence Nightingale (Regional Manager)
            </Header.AccountItemLink>
          </Header.AccountItem>
          <Header.AccountItem>
            <Header.AccountItemLink href="#">
              Change role
            </Header.AccountItemLink>
          </Header.AccountItem>
          <Header.AccountItem>
            <Header.AccountItemForm action="#" method="post">
              <Header.AccountButton>Log out</Header.AccountButton>
            </Header.AccountItemForm>
          </Header.AccountItem>
        </Header.Account>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Home</Header.NavItem>
          <Header.NavItem href="#">Add new patient</Header.NavItem>
          <Header.NavItem href="#">Find a patient</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const BlueOrganisationHeader: Story = {
  args: {
    modifier: 'organisation',
    colour: 'default',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem active href="#">
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Our research</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const WhiteOrganisationHeader: Story = {
  args: {
    modifier: 'organisation',
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav colour="white">
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem active href="#">
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Our research</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const WhiteOrganisationHeaderBlueNavigation: Story = {
  args: {
    modifier: 'organisation',
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem active href="#">
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Our research</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};
