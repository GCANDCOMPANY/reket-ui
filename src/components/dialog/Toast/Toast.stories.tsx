import { Meta, StoryObj } from '@storybook/react';
import useDialog from '../../../hooks/useDialog';
import { Button } from '../../element';
import { ToastInterface } from '../../../types/app';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';
import Toast from '.';

const meta: Meta<typeof Toast> = {
  title: 'Component/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: generateDocsIntro('useDialog'),
      },
    },
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['success', 'error', 'warn', 'info'],
      description: 'Determine color of toast',
      table: {
        type: {
          summary: 'success | error | warn| info',
        },
      },
    },
  },
};
export default meta;

const ToastButton = ({ args }: { args: ToastInterface }) => {
  const { toast } = useDialog();

  return (
    <div>
      <Button
        text="Open Toast"
        color="dark"
        size="m"
        option="filled"
        onClick={() => {
          toast({
            title: args.title,
            content: args.content,
            type: args.type,
          });
        }}
      />
    </div>
  );
};

export const Base: StoryObj<typeof Toast> = {
  render: (args: any) => <ToastButton args={args} />,
  args: {
    title: 'Title',
    content: 'content',
    type: 'success',
  },
};
