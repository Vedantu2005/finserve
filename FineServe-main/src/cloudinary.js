// Cloudinary unsigned upload helper
// Requires these env vars in your .env (Vite needs VITE_ prefix):
// VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_UPLOAD_PRESET

export async function uploadImageToCloudinary(file) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary not configured. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET')
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
  const fd = new FormData()
  fd.append('file', file)
  fd.append('upload_preset', uploadPreset)

  const res = await fetch(url, { method: 'POST', body: fd })
  if (!res.ok) {
    const text = await res.text()
    throw new Error('Cloudinary upload failed: ' + text)
  }

  const data = await res.json()
  // secure_url is the recommended URL
  return data.secure_url || data.url
}
