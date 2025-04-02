import { Meta, StoryObj } from '@storybook/react';
import useDialog from '../../../hooks/useDialog';
import { Button } from '../../button';
import { AlertInterface } from '../../../types/app';
import Alert from './index';

const meta: Meta<typeof Alert> = {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `Use this component with @reket/ui's custom hook, useDialog.`,
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
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
        text={args.type}
        color="dark"
        size="l"
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
  render: (args) => <AlertButton args={args} />,
  args: {
    type: 'confirm',
    title: 'This is title',
    content: 'Write content...',
  },
};
