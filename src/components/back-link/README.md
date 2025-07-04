# Back link

Use back links to help users go back to the previous page in a multi-page transaction.

https://service-manual.nhs.uk/design-system/components/back-link

## Implementation notes

To render this as a `button` use the `as` property.

```tsx
import { BackLink } from 'nhsuk-react-components';

<BackLink as="button" onClick={() => window.history.back()}>
  Back
</BackLink>;
```

## Usage with frameworks and routers

### `next.js`

```tsx
import { BackLink } from 'nhsuk-react-components';
import Link from 'next/link';

<BackLink as={Link} href="/next-step">
  Start your journey
</BackLink>;
```

### `react-router`

```tsx
import { BackLink } from 'nhsuk-react-components';
import { Link } from 'react-router';

<BackLink as={Link} to="/next-step">
  Start your journey
</BackLink>;
```

### `@tanstack/react-router`

```tsx
import { forwardRef } from 'react';
import {
  BackLink as $BackLink,
  type BackLinkProps as $BackLinkProps,
} from 'nhsuk-react-components';
import { createLink, LinkComponent } from '@tanstack/react-router';

const CreatedBackLink = createLink(
  forwardRef<HTMLAnchorElement, $BackLinkProps>((props, ref) => (
    <$BackLink {...props} ref={ref} />
  )),
);

export const BackLink: LinkComponent<typeof CreatedBackLink> = (props) => (
  <CreatedBackLink {...props} />
);
```
