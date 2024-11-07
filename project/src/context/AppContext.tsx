import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { User, Course, Enrollment, Assignment } from '../types';

interface AppState {
  currentUser: User | null;
  courses: Course[];
  enrollments: Enrollment[];
  assignments: Assignment[];
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_COURSES'; payload: Course[] }
  | { type: 'ADD_COURSE'; payload: Course }
  | { type: 'ADD_ENROLLMENT'; payload: Enrollment }
  | { type: 'UPDATE_ENROLLMENT'; payload: Enrollment }
  | { type: 'ADD_ASSIGNMENT'; payload: Assignment };

const initialState: AppState = {
  currentUser: null,
  courses: [
    {
      id: '1',
      title: 'Introduction to Web Development',
      description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
      teacherId: '1',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: '2',
      title: 'Advanced React Patterns',
      description: 'Master advanced React concepts and patterns used in modern web applications.',
      teacherId: '1',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: '3',
      title: 'UI/UX Design Principles',
      description: 'Learn the core principles of user interface and user experience design.',
      teacherId: '2',
      price: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: '4',
      title: 'Data Structures & Algorithms',
      description: 'A comprehensive guide to fundamental data structures and algorithms.',
      teacherId: '2',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: '5',
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native.',
      teacherId: '1',
      price: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: '6',
      title: 'Cloud Computing Basics',
      description: 'Introduction to cloud computing concepts and AWS services.',
      teacherId: '2',
      price: 74.99,
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    },
  ],
  enrollments: [],
  assignments: [],
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => null });

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    case 'SET_COURSES':
      return { ...state, courses: action.payload };
    case 'ADD_COURSE':
      return { ...state, courses: [...state.courses, action.payload] };
    case 'ADD_ENROLLMENT':
      return { ...state, enrollments: [...state.enrollments, action.payload] };
    case 'UPDATE_ENROLLMENT':
      return {
        ...state,
        enrollments: state.enrollments.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case 'ADD_ASSIGNMENT':
      return { ...state, assignments: [...state.assignments, action.payload] };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}