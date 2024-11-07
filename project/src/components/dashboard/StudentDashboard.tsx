import React from 'react';
import { useApp } from '../../context/AppContext';
import { CourseCard } from '../CourseCard';
import { AssignmentList } from '../assignments/AssignmentList';

export function StudentDashboard() {
  const { state } = useApp();
  const enrolledCourses = state.courses.filter((course) =>
    state.enrollments.some(
      (e) => e.courseId === course.id && e.studentId === state.currentUser?.id
    )
  );

  const pendingAssignments = state.assignments.filter((assignment) =>
    enrolledCourses.some((course) => course.id === assignment.courseId)
  );

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Courses</h2>
        {enrolledCourses.length === 0 ? (
          <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Pending Assignments
        </h2>
        <AssignmentList assignments={pendingAssignments} />
      </section>
    </div>
  );
}