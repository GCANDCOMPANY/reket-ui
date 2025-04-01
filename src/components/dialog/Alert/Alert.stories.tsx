import { Meta, StoryObj } from '@storybook/react';
import { UIProvider } from '../../../UIProvider';
import useDialog from '../../../hooks/useDialog';
import { Button } from '../../button';
import Alert from './index';
import { AlertInterface } from '../../../types/app';

export default {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `You can use this component by using @reket/ui's custom hook, useDialog.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <UIProvider>
        <Story />
      </UIProvider>
    ),
  ],
} satisfies Meta<typeof Alert>;

const Template = ({ args }: { args: AlertInterface }) => {
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
  render: (args) => <Template args={args} />,
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
  args: {
    type: 'confirm',
    title: 'This is title',
    content: 'Write content...',
  },
};
