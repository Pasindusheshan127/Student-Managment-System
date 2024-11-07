import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LessonList } from '../components/courses/LessonList';

export function CourseDetailsPage() {
  const { courseId } = useParams();
  const { state } = useApp();
  const course = state.courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-500">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </button>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-64 sm:h-96">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 weeks</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>24 students enrolled</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>12 lessons</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About this course
            </h2>
            <p className="text-gray-600">{course.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Course Content
            </h2>
            <LessonList courseId={course.id} />
          </div>
        </div>
      </div>
    </div>
  );
}