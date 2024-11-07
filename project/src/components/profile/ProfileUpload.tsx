import React from 'react';
import { Upload } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { uploadFile } from '../../services/storage';

export function ProfileUpload() {
  const { state, dispatch } = useApp();
  const [isUploading, setIsUploading] = React.useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !state.currentUser) return;

    try {
      setIsUploading(true);
      const fileId = await uploadFile(file, 'profile');
      
      // Update user profile
      dispatch({
        type: 'SET_USER',
        payload: {
          ...state.currentUser,
          profileUrl: fileId,
        },
      });
    } catch (error) {
      console.error('Failed to upload profile picture:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative group">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={isUploading}
      />
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        disabled={isUploading}
      >
        <Upload className="h-4 w-4" />
        {isUploading ? 'Uploading...' : 'Upload Photo'}
      </button>
    </div>
  );
}