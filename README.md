# @reket/ui

REKET UI Library Based on `React` and `Tailwind CSS`

<br />

## Installation

```sh
// with npm
npm install @reket/ui

// with yarn
yarn add @reket/ui
```

<br />

## How to use

```jsx
import { Button } from '@reket/ui';

const YourComponent = () => {
  return <Button text="Button Text" color="purple" size="xl" option="filled" />;
};
```

### `<Button />` Props

| **Prop**    | **Type**                                                 | **Default** |
| ----------- | -------------------------------------------------------- | ----------- |
| `text`      | string                                                   |             |
| `option`    | `filled` `outline`                                       | `outline`   |
| `color`     | `dark` `purple` `red` `gray`                             | `gray`      |
| `size`      | `xs` `s` `m` `l` `xl`                                    | `s`         |
| `display`   | `block` `inline`                                         | `inline`    |
| `onClick`   | `(e: React.MouseEvent<HTMLElement, MouseEvent>) => void` |             |
| `className` | string                                                   |             |

<br />

🚧...work in progress...🚧
