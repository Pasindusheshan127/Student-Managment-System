import React from 'react';
import { BookOpen } from 'lucide-react';
import { User } from '../../types';

interface WelcomeBannerProps {
  user: User;
}

export function WelcomeBanner({ user }: WelcomeBannerProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-100 rounded-full">
          <BookOpen className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Continue your learning journey as a {user.role}.
          </p>
        </div>
      </div>
    </div>
  );
}