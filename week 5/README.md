# CSS Lingo: Selectors, Pseudo Selectors, Pseudo Elements

## Goals

The goal of today's toy problem is to help students learn precisely how different css properties behave, as well as precision in selecting html elements. Students should show an increased understanding of complex selectors, pseudo selectors, and pseudo elements.

## Important Pseudo Selectors

- :hover

  - i.e. exactly what you think

- :active

  - i.e. when a button is clicked

- :focus

  - e.g. when an input is selected with focus, its default behavior is to have a glowing outline

- :visited

  - e.g. when an \<a\> tag has been clicked its default behavior is to become a different color

- :nth-child(n) & :nth-last-child(n)

  - i.e. selecting an element if it is the specified number (n) child of its parent, counting either forward or backward

  - e.g. **h1:nth-child(1)** will only select \<h1\> tags if they are the first child of their parent element

- :nth-of-type(n) & :nth-last-of-type(n)

  - i.e. selecting an element if it is the specified number (n) of its type

  - e.g. **div:nth-last-of-type(3)** will start counting at the last \<div\> and (within the same parent) select the \<div\> two above it.

## Important Complex Selectors

### - Other selectors

  - Select everything (*) 

  - Ignore everything except this (!important)

### - Selecting Children

  - Descendant Selector (space)

    - Select all elements listed on the right, that are nested **at any level** within the element on the left

    - i.e. **div a {}** will select all \<a\> tags found within any \<div\> at any level, as in the examples below:

      - **\<div\> \<a href='...'\> \</div\>** *AND* **\<div\> \<p\> \<a href='...'\> \</p\> \</div\>**

  - Direct Child Selector (>)

    - Select all elements listed on the right, that are nested **directly within** the element on the left

    - i.e. **div > a {}** will select *only* the \<a\> tags found directly within a \<div\> and not \<a\> tags nested within other elements, as shown below:

      - **\<div\> \<a href='...'\> \</div\>** *BUT NOT* **\<div\> \<p\> \<a href='...'\> \</p\> \</div\>**

### - Selecting Siblings

  - General Sibling Selector (~)

    - Select all elements listed on the right, that share the same parent as the element on the left **and come after it**.

      - i.e. **h2 ~ p** will select *all* \<p\> tags found after an \<h2\> provided both tags share the same parent.

  - Adjacent Sibling Selector (+)

    - Select the **first** element listed on the right, that share the same parent as the element on the left **and comes after it**

## Important Pseudo Elements

- :before
- :after
- :first-letter
- :placeholder
- the content property

## Important CSS Properties

1. position:
    - static
    - relative
    - absolute
    - fixed
    - sticky
2. display:
    - none
    - inline
    - block
    - inline-block
    - flex
    - grid
3. background-
    - -color
    - -image
    - -repeat
    - -position
    - -size
4. overflow: (also overflow-x:, overflow-y:)
    - visible
    - hidden
    - clip
    - scroll
5. text-transform:
    - capitalize
    - uppercase
    - lowercase
6. text-shadow: & box-shadow:
    - x-offset, y-offset, blur, color
