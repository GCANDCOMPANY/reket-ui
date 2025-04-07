# @reket/ui

<strong>REKET UI Library</strong> Based on `React` and `Tailwind CSS`

<br />

## 📦 Install

```sh
// with npm
npm install @reket/ui

// with yarn
yarn add @reket/ui
```

<br />

## ✔️ How to use

```jsx
import { Button } from '@reket/ui';

const YourComponent = () => {
  return <Button text="Button Text" color="purple" size="xl" option="filled" />;
};
```

<br />

## 📒 Storybook

### Link

<a href="https://gcandcompany.github.io/reket-ui/" target="_blank">REKET UI Storybook Page</a>

<br />

### Code Snippets

To create a Storybook file quickly, you can use this snippet:

1. Make a new file called `YourComponent.stories.tsx`.
2. In that file, write "storybook".
3. Then, the code below will be added to the file automatically:

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import ${ComponentName} from './${ComponentName}';
import { generateDocsIntro } from '../../utils/storybook/docsHelper';
// Update the import path based on this component's location

const meta: Meta<typeof ${ComponentName}> = {
  component: ${ComponentName},
  title: 'Component/${ComponentName}',
  parameters: {
    docs: {
      description: {
        component: generateDocsIntro('${ComponentName}'),
      },
    },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ${ComponentName}>;

export const Default: Story = {
  args: {},
};
```
