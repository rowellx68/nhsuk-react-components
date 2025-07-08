# Upgrade to v6.0

This new version introduces a significant way of enabling modifiers for components. Instead of using `boolean` properties, you now use a `modifier`. A modifier could also narrow the properties you can pass to the component.

Another change is that input elements now exposes the `ref` property which makes it easier to work with form libraries like `react-hook-form` or `@tanstack/react-form`. In a similar way, some components can now be rendered as another element type or component by using the `as` property.

---

## Content Presentation

### Details

It's possible to just pass in the `expander` modifier to the `Details` component but it is much better to use the `Expander` component instead.

```tsx
// v5
<Details expander>
  <Details.Summary>Summary</Details.Summary>
  <Details.Text>Text</Details.Text>
</Details>

// v6
<Details modifier="expander">
  <Details.Summary>Summary</Details.Summary>
  <Details.Text>Text</Details.Text>
</Details>
```

### DoAndDontList

The `DoAndDontList` now uses a modifier and the component has been split into more sub-components. This allows you to more access to the underlying heading, list and list items.

```tsx
// v5
<DoAndDontList
  listType="do"
  heading="Do"
  headingLevel="h2"
>
  <DoAndDontList.Item>Do this</DoAndDontList.Item>
  <DoAndDontList.Item>Do that</DoAndDontList.Item>
</DoAndDontList>

// v6
<DoAndDontList modifier="do">
  <DoAndDontList.Label as="h2">Do</DoAndDontList.Label>
  <DoAndDontList.List>
    <DoAndDontList.Item>Do this</DoAndDontList.Item>
    <DoAndDontList.Item>Do that</DoAndDontList.Item>
  </DoAndDontList.List>
</DoAndDontList>
```

## Expander

```tsx
// v5
<Details.ExpanderGroup>
  <Details expander>
    <Details.Summary>Summary 1</Details.Summary>
    <Details.Text>Text 1</Details.Text
  </Details>
</Details.ExpanderGroup>

// v6
<Expander.Group>
  <Expander>
    <Expander.Summary>Summary 1</Expander.Summary>
    <Expander.Text>Text 1</Expander.Text>
  </Expander>
</Expander.Group>
```

## Hero

TODO

## Images

The `Images` component has been renamed to `Figure` and split into sub-components. The `Figure.Image` component now allows you to render it as a different component, for example, as an `Image` from `next/image`.

```tsx
// v5
<Images
  caption="Caption"
  src="/path/to/image.jpg"
  alt="Image description"
/>

// v6
<Figure>
  <Figure.Image
    src="/path/to/image.jpg"
    alt="Image description"
  />
  <Figure.Caption>Caption</Figure.Caption>
</Figure>

// as a different component
<Figure>
  <Figure.Image
    as={Image} // from next/image
    src="/path/to/image.jpg"
    alt="Image description"
  />
  <Figure.Caption>Caption</Figure.Caption>
</Figure>
```

## InsetText

The `visuallyHiddenText` does not accept `false` as a value and it now defaults to `'Information: '` if not provided.

```tsx
// v5
<InsetText visuallyHiddenText={false}>
  This is some inset text.
</InsetText>

// v6
<InsetText>
  This is some inset text.
</InsetText>
```

## SummaryList