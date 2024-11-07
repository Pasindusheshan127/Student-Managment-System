import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CourseGrid } from '../components/courses/CourseGrid';
import { WelcomeBanner } from '../components/dashboard/WelcomeBanner';

export function DashboardPage() {
  const { state } = useApp();
  const navigate = useNavigate();

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  if (!state.currentUser) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <WelcomeBanner user={state.currentUser} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Available Courses</h2>
        <CourseGrid courses={state.courses} onCourseClick={handleCourseClick} />
      </div>
    </div>
  );
}