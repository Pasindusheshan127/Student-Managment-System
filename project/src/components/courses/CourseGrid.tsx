import React from 'react';
import { Course } from '../../types';
import { CourseCard } from './CourseCard';

interface CourseGridProps {
  courses: Course[];
  onCourseClick: (courseId: string) => void;
}

export function CourseGrid({ courses, onCourseClick }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No courses available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onClick={() => onCourseClick(course.id)}
        />
      ))}
    </div>
  );
}