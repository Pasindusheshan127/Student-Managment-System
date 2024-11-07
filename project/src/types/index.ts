export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  profileUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  price: number;
  imageUrl: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  enrollmentDate: string;
  status: 'pending' | 'active' | 'completed';
  paymentStatus: 'pending' | 'paid';
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  submissions: AssignmentSubmission[];
}

export interface AssignmentSubmission {
  id: string;
  studentId: string;
  assignmentId: string;
  submissionUrl: string;
  submittedAt: string;
}