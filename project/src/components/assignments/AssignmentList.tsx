import React from 'react';
import { Assignment } from '../../types';
import { AssignmentSubmissionForm } from './AssignmentSubmissionForm';

interface AssignmentListProps {
  assignments: Assignment[];
}

export function AssignmentList({ assignments }: AssignmentListProps) {
  const [selectedAssignment, setSelectedAssignment] = React.useState<Assignment | null>(null);

  return (
    <div className="space-y-4">
      {assignments.length === 0 ? (
        <p className="text-gray-600">No pending assignments.</p>
      ) : (
        assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {assignment.title}
            </h3>
            <p className="text-gray-600 mb-4">{assignment.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Due: {new Date(assignment.dueDate).toLocaleDateString()}
              </span>
              <button
                onClick={() => setSelectedAssignment(assignment)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Submit Assignment
              </button>
            </div>
          </div>
        ))
      )}

      {selectedAssignment && (
        <AssignmentSubmissionForm
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
        />
      )}
    </div>
  );
}