---
id: button
title: Button
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Button

<p>To trigger an action on the page.</p>

```jsx title="Import"
import { button } from '@package/component'
```

## Examples

### Default Button

<Tabs>
  <TabItem value="lit" label="Lit" default>
   ```html
    <button>Button</button>
    ```
  </TabItem>
  <TabItem value="react" label="React">
   ```jsx
    <Button>Button</Button>
    ```
  </TabItem>
</Tabs>

## Properties

<table class="markdown-table">
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>`variant`</td>
    <td>Controls the styling of the button</td>
    <td>`""`</td>
    <td>`string`</td>
  </tr>
  <tr>
    <td>`className`</td>
    <td>Additional css classes can be applied</td>
    <td>`""`</td>
    <td>`string`</td>
  </tr>
</table>

## CSS Variables

```css
--button-background-color: #000;
--button-color: #fff;
```
