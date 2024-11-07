import React from 'react';
import { CheckCircle, Lock, PlayCircle, Clock, BookOpen } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  isCompleted: boolean;
  isLocked: boolean;
}

interface LessonListProps {
  courseId: string;
}

export function LessonList({ courseId }: LessonListProps) {
  // This would typically come from your backend
  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'Introduction to the Course',
      description: 'Get started with the course fundamentals and setup your development environment.',
      duration: '10:00',
      isCompleted: true,
      isLocked: false,
    },
    {
      id: '2',
      title: 'Getting Started with the Basics',
      description: 'Learn the core concepts and basic principles of the subject matter.',
      duration: '15:30',
      isCompleted: false,
      isLocked: false,
    },
    {
      id: '3',
      title: 'Advanced Concepts',
      description: 'Dive deep into advanced topics and real-world applications.',
      duration: '20:15',
      isCompleted: false,
      isLocked: true,
    },
    {
      id: '4',
      title: 'Building Your First Project',
      description: 'Apply your knowledge by building a practical project from scratch.',
      duration: '25:45',
      isCompleted: false,
      isLocked: true,
    },
    {
      id: '5',
      title: 'Best Practices and Optimization',
      description: 'Learn industry best practices and optimization techniques.',
      duration: '18:20',
      isCompleted: false,
      isLocked: true,
    },
    {
      id: '6',
      title: 'Final Project and Review',
      description: 'Complete your final project and review all course materials.',
      duration: '30:00',
      isCompleted: false,
      isLocked: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className={`flex flex-col p-4 rounded-lg ${
            lesson.isLocked
              ? 'bg-gray-50 cursor-not-allowed'
              : 'bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            {lesson.isCompleted ? (
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
            ) : lesson.isLocked ? (
              <Lock className="h-5 w-5 text-gray-400 flex-shrink-0" />
            ) : (
              <PlayCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
            )}
            <h3
              className={`font-medium ${
                lesson.isLocked ? 'text-gray-400' : 'text-gray-900'
              }`}
            >
              {lesson.title}
            </h3>
          </div>
          
          <p className={`text-sm mb-3 ${lesson.isLocked ? 'text-gray-400' : 'text-gray-600'}`}>
            {lesson.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm mt-auto">
            <div className="flex items-center gap-1">
              <Clock className={`h-4 w-4 ${lesson.isLocked ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={lesson.isLocked ? 'text-gray-400' : 'text-gray-500'}>
                {lesson.duration}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className={`h-4 w-4 ${lesson.isLocked ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={lesson.isLocked ? 'text-gray-400' : 'text-gray-500'}>
                1 lesson
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}