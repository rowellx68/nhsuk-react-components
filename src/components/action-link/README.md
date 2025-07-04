# Action link

Use action links to help users get to the next stage of a journey quickly by signposting the start of a digital service.

https://service-manual.nhs.uk/design-system/components/action-link

## Implementation notes

This component does not use the `openInNewWindow` property from `nhsuk-frontend`; use the `target` property instead.

## Usage with frameworks and routers

### `next.js`

```tsx
import { ActionLink } from 'nhsuk-react-components';
import Link from 'next/link';

<ActionLink as={Link} href="/next-step">
  Start your journey
</ActionLink>;
```

### `react-router`

```tsx
import { ActionLink } from 'nhsuk-react-components';
import { Link } from 'react-router';

<ActionLink as={Link} to="/next-step">
  Start your journey
</ActionLink>;
```

### `@tanstack/react-router`

```tsx
import { forwardRef } from 'react';
import {
  ActionLink as $ActionLink,
  type ActionLinkProps as $ActionLinkProps,
} from 'nhsuk-react-components';
import { createLink, LinkComponent } from '@tanstack/react-router';

const CreatedActionLink = createLink(
  forwardRef<HTMLAnchorElement, $ActionLinkProps>((props, ref) => (
    <$ActionLink {...props} ref={ref} />
  )),
);

export const ActionLink: LinkComponent<typeof CreatedActionLink> = (props) => (
  <CreatedActionLink {...props} />
);
```
