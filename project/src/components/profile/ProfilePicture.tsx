import React from 'react';
import { User } from '../../types';
import { getImageUrl } from '../../services/storage';

interface ProfilePictureProps {
  user: User;
  size?: 'sm' | 'md' | 'lg';
}

export function ProfilePicture({ user, size = 'md' }: ProfilePictureProps) {
  const dimensions = {
    sm: 'h-16 w-16',
    md: 'h-32 w-32',
    lg: 'h-48 w-48',
  };

  return (
    <div className={`${dimensions[size]} rounded-full overflow-hidden bg-gray-100`}>
      {user.profileUrl ? (
        <img
          src={getImageUrl(user.profileUrl, size)}
          alt={`${user.name}'s profile`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600 text-2xl font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}