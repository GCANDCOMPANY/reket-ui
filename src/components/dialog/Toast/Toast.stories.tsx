import { Meta, StoryObj } from '@storybook/react';
import useDialog from '../../../hooks/useDialog';
import { Button } from '../../button';
import { AlertInterface, ToastInterface } from '../../../types/app';
import { setIntroText } from '../../../utils/storybookDos';
import Toast from '.';

const DEMO_CODE = `
`;

const meta: Meta<typeof Toast> = {
  title: 'Component/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: DEMO_CODE,
      },
      description: {
        component: setIntroText('useDialog'),
      },
    },
  },
  argTypes: {},
};
export default meta;

const ToastButton = ({ args }: { args: ToastInterface }) => {
  const { toast } = useDialog();

  return (
    <div>
      <Button
        text="Open Toast"
        color="purple"
        size="m"
        option="filled"
        onClick={() => {
          toast({
            title: 'title',
            content: 'content',
            type: 'info',
          });
        }}
      />
    </div>
  );
};

export const Base: StoryObj<typeof Toast> = {
  render: (args: any) => <ToastButton args={args} />,
  args: {},
};
