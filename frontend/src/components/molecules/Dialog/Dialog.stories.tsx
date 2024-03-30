import type { Meta, StoryObj } from '@storybook/react';

import { Dialog, DialogDescription, DialogTitle } from './Dialog';
import React from 'react';
import { useDisclosure } from '../../../hooks/useDisclosure';
import { Button } from '../../atoms/Button';

const meta: Meta = {
  title: 'molecules/Dialog',
  component: Dialog,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function () {
    const { close, open, isOpen } = useDisclosure();
    const cancelButtonRef = React.useRef(null);
    return (
      <>
        <Button variant="secondary" onClick={open}>Open Modal</Button>
        <Dialog isOpen={isOpen} onClose={close} initialFocus={cancelButtonRef}>
          <div className="inline-block overflow-hidden sm:p-6 px-4 pt-5 pb-4 sm:my-8 sm:w-full sm:max-w-lg text-left align-bottom sm:align-middle bg-white rounded-lg shadow-xl transition-all transform">
            <div className="mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-800">
                Modal Dialog Title
              </DialogTitle>
            </div>
            <div>
              <DialogDescription as="p" className="leading-4 m-4 text-gray-700">
                This is a description for dialog.
              </DialogDescription>
            </div>
            <div className="sm:flex sm:flex-row-reverse mt-5 sm:mt-4">
              <Button
                variant="secondary"
                // className="inline-flex justify-center py-2 px-4 mt-3 sm:mt-0 w-full sm:w-auto text-base sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
                onClick={close}
                ref={cancelButtonRef}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Dialog>
      </>
    );
  }
}
