import { Meta, StoryObj } from '@storybook/react';
import Modal from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';
import { Button } from '../../element';
import { useState } from 'react';

const DEMO_CODE = `
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
      <Button
        text="Open Modal"
        color="purple"
        size="m"
        option="filled"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="mb-8 text-18 font-bold">Modal Title</h2>
        <p>Write content here...</p>
      </Modal>
    </div>
  );
};
`;

const meta: Meta<typeof Modal> = {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: DEMO_CODE,
      },
      description: {
        component: generateDocsIntro('Modal'),
      },
    },
  },
  argTypes: {
    isOpen: { description: 'handle Modal openable' },
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
    children: {
      description: 'add custom element inside the button element',
    },
  },
};
export default meta;

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        text="Open Modal"
        color="purple"
        size="m"
        option="filled"
        onClick={() => {
          setIsOpen(true);
        }}
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="mb-8 text-18 font-bold">Modal Title</h2>
        <p>Write content here...</p>
      </Modal>
    </div>
  );
};

export const Base: StoryObj<typeof Modal> = {
  render: () => <ModalButton />,
};
