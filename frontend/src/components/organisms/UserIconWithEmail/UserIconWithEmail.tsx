import { User } from '@/types/users';
import Image from 'next/image';
import React from 'react';

type Props = {
  user: User;
};

export const UserIconWithEmail: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-gray-700">{user.email}</p>
      <Image className="rounded-full mx-4" src={user.image_url} alt="" width={40} height={40} />
    </div>
  );
};
