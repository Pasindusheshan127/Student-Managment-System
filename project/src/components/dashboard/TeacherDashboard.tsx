import React from 'react';
import { PlusCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CourseCard } from '../CourseCard';
import { CourseForm } from '../courses/CourseForm';

export function TeacherDashboard() {
  const { state } = useApp();
  const [isCreatingCourse, setIsCreatingCourse] = React.useState(false);

  const teacherCourses = state.courses.filter(
    (course) => course.teacherId === state.currentUser?.id
  );

  return (
    <div className="space-y-8">
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
          <button
            onClick={() => setIsCreatingCourse(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            Create Course
          </button>
        </div>

        {teacherCourses.length === 0 ? (
          <p className="text-gray-600">You haven't created any courses yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>

      {isCreatingCourse && (
        <CourseForm onClose={() => setIsCreatingCourse(false)} />
      )}
    </div>
  );
}