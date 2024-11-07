export async function uploadFile(file: File, type: 'homework' | 'profile') {
  // In production, this would call your backend to get a presigned URL
  const { uploadUrl, fileId } = await fetch('/api/get-upload-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fileType: file.type, uploadType: type }),
  }).then(r => r.json());

  await fetch(uploadUrl, {
    method: 'PUT',
    body: file,
    headers: { 'Content-Type': file.type },
  });

  return fileId;
}

export function getImageUrl(fileId: string, size: 'sm' | 'md' | 'lg' = 'md') {
  const dimensions = {
    sm: '64x64',
    md: '256x256',
    lg: '512x512',
  };
  return `${import.meta.env.VITE_CDN_URL}/images/${dimensions[size]}/${fileId}`;
}