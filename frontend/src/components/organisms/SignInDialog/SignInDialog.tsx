'use client';

import { useDisclosure } from '@/hooks/useDisclosure';
import React from 'react';
import { Button } from '../../atoms/Button';
import { Dialog } from '../../molecules/Dialog';
import { GoogleAuthButton } from '@/components/molecules/GoogleAuthButton/GoogleAuthButton';

export const SignInDialog: React.FC = () => {
  const { close, open, isOpen } = useDisclosure();
  const cancelButtonRef = React.useRef(null);

  return (
    <>
      <Button variant="primary" onClick={open}>
        Sign in
      </Button>
      <Dialog isOpen={isOpen} onClose={close} initialFocus={cancelButtonRef}>
        <div className="inline-block overflow-hidden sm:p-6 px-4 pt-5 pb-4 sm:my-8 sm:w-full sm:max-w-lg text-left align-bottom sm:align-middle bg-white rounded-lg shadow-xl transition-all transform">
          <div className="sm:flex sm:flex-row-reverse mt-5 sm:mt-4">
            <GoogleAuthButton />
          </div>
        </div>
      </Dialog>
    </>
  );
};
