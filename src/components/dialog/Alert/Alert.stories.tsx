import { Meta, StoryObj } from '@storybook/react';
import useDialog from '../../../hooks/useDialog';
import { Button } from '../../button';
import { AlertInterface } from '../../../types/app';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';
import Alert from './index';

const DEMO_CODE = `
import { useDialog } from '@reket/ui';

const App = () => {
  const dialog = useDialog();
    
  return (
    <Button
       text="Open Alert"
       color="purple"
       size="m"
       option="filled"
       onClick={() => {
         dialog.alert({
           title: "This is title",
           content: "Write content...",
           type: "confirm",
           onOk: () => { /* handle OK */ },
           onCancel: () => { /* handle Cancel */ },
         });
       }}
    />
  );
};
`;

const meta: Meta<typeof Alert> = {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: DEMO_CODE,
      },
      description: {
        component: generateDocsIntro('useDialog'),
      },
    },
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['confirm', 'success', 'error', 'info'],
      description: 'Determine the icon style of the alert dialog.',
      table: {
        type: {
          summary: 'confirm | success | error | info',
        },
      },
    },
    title: { control: 'text', description: 'Title of alert.' },
    content: { control: 'text', description: 'Content of alert.' },
    onOk: { action: 'ok clicked', description: `It runs when you click the '확인' button.` },
    onCancel: {
      action: 'cancel clicked',
      description: `It runs when you click the '취소' button.`,
    },
  },
};
export default meta;

const AlertButton = ({ args }: { args: AlertInterface }) => {
  const { alert } = useDialog();

  return (
    <div>
      <Button
        text="Open Alert"
        color="purple"
        size="m"
        option="filled"
        onClick={() => {
          alert({
            title: args.title,
            content: args.content,
            type: args.type,
            onOk: () => {},
            onCancel: () => {},
          });
        }}
      />
    </div>
  );
};

export const Base: StoryObj<typeof Alert> = {
  render: (args: any) => <AlertButton args={args} />,
  args: {
    type: 'confirm',
    title: 'This is title',
    content: 'Write content...',
  },
};
