'use client';

import React, {
  Fragment,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import clsx from 'clsx';
import { Header as NhsHeader } from 'nhsuk-frontend';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { Factory, factory } from '@/internal/factory/factory';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import {
  AsElementProps,
  ElementProps,
  WithVisuallyHiddenTextProps,
} from '@/types/shared';
import { SearchIcon } from '@/icons/search/Search';
import { ChevronDownIcon } from '@/icons/chevron-down/ChevronDown';
import { NhsLogo } from '@/assets/NhsLogo';

export type HeaderProps = {
  variant?: 'default' | 'organisation';
  colour?: 'default' | 'white';
} & ElementProps<'header', 'color'>;

type HeaderFactory = Factory<{
  props: HeaderProps;
  ref: HTMLDivElement;
  staticComponents: {
    Container: typeof HeaderContainer;
    Service: typeof HeaderService;
    ServiceLogo: typeof HeaderServiceLogo;
    ServiceNameLink: typeof HeaderServiceNameLink;
    Nav: typeof HeaderNav;
    NavList: typeof HeaderNavList;
    NavItem: typeof HeaderNavItem;
    Account: typeof HeaderAccount;
    AccountItem: typeof HeaderAccountItem;
    AccountItemLink: typeof HeaderAccountItemLink;
    AccountItemForm: typeof HeaderAccountItemForm;
    AccountButton: typeof HeaderAccountButton;
    Search: typeof HeaderSearch;
  };
}>;

const Header = factory<HeaderFactory>(
  (
    {
      children,
      className,
      variant = 'default',
      colour = 'default',
      ...props
    }: HeaderProps,
    ref,
  ) => {
    return (
      <header
        className={clsx(
          'nhsuk-header',
          {
            'nhsuk-header--organisation': variant === 'organisation',
            'nhsuk-header--white': colour === 'white',
          },
          className,
        )}
        role="banner"
        {...props}
        ref={ref}
      >
        {children}
      </header>
    );
  },
);

export type HeaderContainerProps = ElementProps<'div'>;

const HeaderContainer = ({
  children,
  className,
  ...props
}: HeaderContainerProps) => {
  return (
    <div
      className={clsx(
        'nhsuk-header__container nhsuk-width-container',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export type HeaderServiceProps = ElementProps<'div'>;

const HeaderService = ({
  children,
  className,
  ...props
}: HeaderServiceProps) => {
  return (
    <div className={clsx('nhsuk-header__service', className)} {...props}>
      {children}
    </div>
  );
};

export type HeaderServiceLogoProps = Omit<BaseProps, 'children'> &
  (
    | {
        variant: 'logo-only';
        /**
         * If `true`, the logo will not be wrapped with a link or link-type component.
         */
        unlinked?: true;
        serviceName?: undefined;
        organisationName?: undefined;
        organisationSplit?: undefined;
        organisationDescriptor?: undefined;
      }
    | {
        variant?: 'default';
        unlinked?: undefined;
        serviceName: string;
        organisationName?: undefined;
        organisationSplit?: undefined;
        organisationDescriptor?: undefined;
      }
    | {
        variant?: 'default';
        unlinked?: undefined;
        serviceName?: undefined;
        organisationName: string;
        organisationSplit?: string;
        organisationDescriptor: string;
      }
  ) & {
    logo?: ElementProps<'img'>;
  };

type HeaderServiceLogoFactory = PolymorphicFactory<{
  props: HeaderServiceLogoProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderServiceLogo = polymorphicFactory<HeaderServiceLogoFactory>(
  (
    {
      className,
      as: component = 'a',
      unlinked,
      logo,
      serviceName,
      organisationName,
      organisationSplit,
      organisationDescriptor,
      ...props
    }: HeaderServiceLogoProps & AsElementProps,
    ref,
  ) => {
    const { className: logoClassName, ...logoProps } = logo || {};

    if (unlinked) {
      return logo ? (
        <img
          className={clsx('nhsuk-header__organisation-logo', logoClassName)}
          {...logoProps}
        />
      ) : (
        <NhsLogo className="nhsuk-header__logo" />
      );
    }

    return (
      <Base
        as={component}
        {...props}
        className={clsx('nhsuk-header__service-logo', className)}
        ref={ref}
      >
        {logo ? (
          <img
            className={clsx('nhsuk-header__organisation-logo', logoClassName)}
            {...logoProps}
          />
        ) : (
          <NhsLogo className="nhsuk-header__logo" />
        )}
        {serviceName && (
          <span className="nhsuk-header__service-name">{serviceName}</span>
        )}
        {organisationName && (
          <span className="nhsuk-header__organisation-name">
            {organisationName}
            {organisationSplit && (
              <>
                {' '}
                <span className="nhsuk-header__organisation-name-split">
                  {organisationSplit}
                </span>
              </>
            )}
          </span>
        )}
        {organisationDescriptor && (
          <span className="nhsuk-header__organisation-name-descriptor">
            {organisationDescriptor}
          </span>
        )}
      </Base>
    );
  },
);

export type HeaderServiceNameLinkProps = BaseProps;

type HeaderServiceNameLinkFactory = PolymorphicFactory<{
  props: HeaderServiceNameLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderServiceNameLink = polymorphicFactory<HeaderServiceNameLinkFactory>(
  (
    { className, as: component = 'a', children, ...props }: HeaderServiceNameLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-header__service-name', className)}
        {...props}
        ref={ref}
      >
        {children}
      </Base>
    );
  },
);

export type HeaderNavProps = {
  variant?: 'default' | 'justified';
  colour?: 'default' | 'white';
} & ElementProps<'div', 'color'>;

const HeaderNav = ({
  children,
  variant = 'default',
  colour = 'default',
  className,
  ...props
}: HeaderNavProps) => {
  return (
    <nav
      className={clsx(
        'nhsuk-header__navigation',
        {
          'nhsuk-header__navigation--justified': variant === 'justified',
          'nhsuk-header__navigation--white': colour === 'white',
        },
        className,
      )}
      aria-label="Menu"
      {...props}
    >
      <div className="nhsuk-header__navigation-container nhsuk-width-container">
        {children}
      </div>
    </nav>
  );
};

export type HeaderNavListProps = ElementProps<'ul'>;

type HeaderNavListFactory = Factory<{
  props: HeaderNavListProps;
  ref: HTMLUListElement;
}>;

const HeaderNavList = factory<HeaderNavListFactory>(
  ({ children, className, ...props }: HeaderNavListProps, ref) => {
    const internalRef = useRef<HTMLUListElement>(null);
    const header = useRef<NhsHeader>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLUListElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      if (header.current) {
        // TODO: do something here to reinitialise part of the header functionality
      }

      const target = internalRef.current.closest('.nhsuk-header');

      header.current = new NhsHeader(target);
    }, [internalRef, children]);

    return (
      <ul
        className={clsx('nhsuk-header__navigation-list', className)}
        {...props}
        ref={internalRef}
      >
        {children}
        <li className="nhsuk-header__menu" hidden>
          <button
            className={clsx(
              'nhsuk-header__menu-toggle nhsuk-header__navigation-link',
              className,
            )}
            id="toggle-menu"
            aria-expanded="false"
            type="button"
          >
            <VisuallyHidden>Browse</VisuallyHidden> More
            <ChevronDownIcon />
          </button>
        </li>
      </ul>
    );
  },
);

export type HeaderNavItemProps = { active?: boolean } & BaseProps;

type HeaderNavItemFactory = PolymorphicFactory<{
  props: HeaderNavItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderNavItem = polymorphicFactory<HeaderNavItemFactory>(
  (
    {
      className,
      active = false,
      as: component = 'a',
      children,
      ...props
    }: HeaderNavItemProps & AsElementProps,
    ref,
  ) => {
    const linkProps = active ? { 'aria-current': true, ...props } : props;
    const currentFallbackProps = active
      ? { className: 'nhsuk-header__navigation-item-current-fallback' }
      : {};

    return (
      <li
        className={clsx('nhsuk-header__navigation-item', {
          'nhsuk-header__navigation-item--current': active,
        })}
      >
        <Base
          as={component}
          className={clsx('nhsuk-header__navigation-link', className)}
          {...linkProps}
          ref={ref}
        >
          <Base<any> as={active ? 'span' : Fragment} {...currentFallbackProps}>
            {children}
          </Base>
        </Base>
      </li>
    );
  },
);

export type HeaderAccountProps = ElementProps<'ul'>;

export type HeaderAccountFactory = Factory<{
  props: HeaderAccountProps;
  ref: HTMLUListElement;
}>;

const HeaderAccount = factory<HeaderAccountFactory>(
  ({ children, className, ...props }: HeaderAccountProps, ref) => {
    return (
      <nav className="nhsuk-header__account" aria-label="Account">
        <ul
          className={clsx('nhsuk-header__account-list', className)}
          {...props}
          ref={ref}
        >
          {children}
        </ul>
      </nav>
    );
  },
);

export type HeaderAccountItemProps = ElementProps<'li'>;

type HeaderAccountItemFactory = Factory<{
  props: HeaderAccountItemProps;
  ref: HTMLLIElement;
}>;

const HeaderAccountItem = factory<HeaderAccountItemFactory>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        className={clsx('nhsuk-header__account-item', className)}
        {...props}
        ref={ref}
      >
        {children}
      </li>
    );
  },
);

export type HeaderAccountItemLinkProps = {
  variant?: 'default' | 'icon';
} & BaseProps;

type HeaderAccountItemLinkFactory = PolymorphicFactory<{
  props: HeaderAccountItemLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderAccountItemLink = polymorphicFactory<HeaderAccountItemLinkFactory>(
  (
    {
      className,
      variant = 'default',
      as: component = 'a',
      children,
      ...props
    }: HeaderAccountItemLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <HeaderAccountItem>
        <Base
          as={component}
          className={clsx('nhsuk-header__account-link', className)}
          {...props}
          ref={ref}
        >
          {variant === 'icon' && (
            <svg
              className="nhsuk-icon nhsuk-icon__user"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z"></path>
            </svg>
          )}
          {children}
        </Base>
      </HeaderAccountItem>
    );
  },
);

export type HeaderAccountItemFormProps = ElementProps<'form'>;

type HeaderAccountItemFormFactory = Factory<{
  props: HeaderAccountItemFormProps;
  ref: HTMLFormElement;
}>;

const HeaderAccountItemForm = factory<HeaderAccountItemFormFactory>(
  ({ className, children, ...props }: HeaderAccountItemFormProps, ref) => {
    return (
      <HeaderAccountItem>
        <form
          className={clsx('nhsuk-header__account-form', className)}
          {...props}
          ref={ref}
        >
          {children}
        </form>
      </HeaderAccountItem>
    );
  },
);

export type HeaderAccountButtonProps = BaseProps;

type HeaderAccountButtonFactory = PolymorphicFactory<{
  props: HeaderAccountButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
}>;

const HeaderAccountButton = polymorphicFactory<HeaderAccountButtonFactory>(
  (
    {
      className,
      as: component = 'button',
      children,
      ...props
    }: HeaderAccountButtonProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-header__account-button', className)}
        {...props}
        ref={ref}
      >
        {children}
      </Base>
    );
  },
);

export type HeaderSearchProps = (
  | { children?: undefined; inputProps?: undefined; buttonProps?: undefined }
  | { children: ReactNode; inputProps?: undefined; buttonProps?: undefined }
  | {
      children?: undefined;
      inputProps: HeaderSearchInputProps;
      buttonProps: HeaderSearchButtonProps;
    }
) &
  ElementProps<'form', 'children'>;

type HeaderSearchFactory = Factory<{
  props: HeaderSearchProps;
  ref: HTMLFormElement;
  staticComponents: {
    Input: typeof HeaderSearchInput;
    Button: typeof HeaderSearchButton;
  };
}>;

const HeaderSearch = factory<HeaderSearchFactory>(
  (
    {
      children,
      className,
      inputProps = { visuallyHiddenText: 'Search the NHS website' },
      buttonProps = { visuallyHiddenText: 'Search' },
      ...props
    },
    ref,
  ) => {
    return (
      <search className="nhsuk-header__search">
        <form
          className={clsx('nhsuk-header__search-form', className)}
          {...props}
          ref={ref}
        >
          {children || (
            <>
              <HeaderSearchInput {...inputProps} />
              <HeaderSearchButton {...buttonProps} />
            </>
          )}
        </form>
      </search>
    );
  },
);

export type HeaderSearchInputProps = ElementProps<'input'> &
  WithVisuallyHiddenTextProps;

type HeaderSearchInputFactory = Factory<{
  props: HeaderSearchInputProps;
  ref: HTMLInputElement;
}>;

const HeaderSearchInput = factory<HeaderSearchInputFactory>(
  (
    { visuallyHiddenText, className, placeholder = 'Search', ...props },
    ref,
  ) => {
    return (
      <>
        <label className="nhsuk-u-visually-hidden" htmlFor="search-field">
          {visuallyHiddenText}
        </label>
        <input
          className={clsx('nhsuk-header__search-input nhsuk-input', className)}
          id="search-field"
          name="search-field"
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          {...props}
          ref={ref}
        />
      </>
    );
  },
);

export type HeaderSearchButtonProps = ElementProps<'button'> &
  WithVisuallyHiddenTextProps;

type HeaderSearchButtonFactory = Factory<{
  props: HeaderSearchButtonProps;
  ref: HTMLButtonElement;
}>;

const HeaderSearchButton = factory<HeaderSearchButtonFactory>(
  ({ visuallyHiddenText, className, ...props }, ref) => {
    return (
      <button
        className={clsx('nhsuk-header__search-submit', className)}
        {...props}
        type="submit"
        ref={ref}
      >
        <SearchIcon />
        <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
      </button>
    );
  },
);

Header.displayName = 'Header';
HeaderContainer.displayName = 'Header.Container';
HeaderService.displayName = 'Header.Service';
HeaderServiceLogo.displayName = 'Header.ServiceLogo';
HeaderServiceNameLink.displayName = 'Header.ServiceNameLink';
HeaderNav.displayName = 'Header.Nav';
HeaderNavList.displayName = 'Header.NavList';
HeaderNavItem.displayName = 'Header.NavItem';
HeaderAccount.displayName = 'Header.Account';
HeaderAccountItem.displayName = 'Header.AccountItem';
HeaderAccountItemLink.displayName = 'Header.AccountItemLink';
HeaderAccountItemForm.displayName = 'Header.AccountItemForm';
HeaderAccountButton.displayName = 'Header.AccountButton';
HeaderSearch.displayName = 'Header.Search';
HeaderSearchInput.displayName = 'Header.Search.Input';
HeaderSearchButton.displayName = 'Header.Search.Button';

HeaderSearch.Input = HeaderSearchInput;
HeaderSearch.Button = HeaderSearchButton;

Header.Container = HeaderContainer;
Header.Service = HeaderService;
Header.ServiceLogo = HeaderServiceLogo;
Header.ServiceNameLink = HeaderServiceNameLink;
Header.Nav = HeaderNav;
Header.NavList = HeaderNavList;
Header.NavItem = HeaderNavItem;
Header.Account = HeaderAccount;
Header.AccountItem = HeaderAccountItem;
Header.AccountItemLink = HeaderAccountItemLink;
Header.AccountItemForm = HeaderAccountItemForm;
Header.AccountButton = HeaderAccountButton;
Header.Search = HeaderSearch;

export {
  Header,
  HeaderContainer,
  HeaderService,
  HeaderServiceLogo,
  HeaderServiceNameLink,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  HeaderAccount,
  HeaderAccountItem,
  HeaderAccountItemLink,
  HeaderAccountItemForm,
  HeaderAccountButton,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchButton,
};
