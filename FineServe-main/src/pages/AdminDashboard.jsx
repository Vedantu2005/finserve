import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addArticle, getArticles } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { uploadImageToCloudinary } from '../cloudinary';

export default function AdminDashboard() {
  // Track which article is being edited
  const [editingId, setEditingId] = useState(null)

  // Delete article handler
  async function handleDelete(id) {
    if (!window.confirm('Delete this article?')) return
    try {
      const { default: db } = await import('../firebase')
      const { doc, deleteDoc } = await import('firebase/firestore')
      await deleteDoc(doc(db, 'articles', id))
      setArticles(articles.filter(a => a.id !== id))
      alert('Article deleted successfully')
    } catch (err) {
      alert('Delete failed: ' + err.message)
    }
  }

  // Edit article handler (prefill form and set editing state)
  function handleEdit(article) {
    setForm({
      title: article.title || '',
      excerpt: article.excerpt || '',
      author: article.author || '',
      category: article.category || '',
      image: article.image || '',
      date: article.date || ''
    })
    setEditingId(article.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigate = useNavigate()
  const [authorized, setAuthorized] = useState(false)
  const [form, setForm] = useState({ title: '', excerpt: '', author: '', category: '', image: '', date: '' })
  const [status, setStatus] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [articles, setArticles] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(true)

  useEffect(() => {
    const ok = localStorage.getItem('adminAuth') === 'true'
    setAuthorized(ok)
    if (!ok) navigate('/admin')
    // Fetch articles
    async function fetchAll() {
      setLoadingArticles(true)
      const data = await getArticles()
      setArticles(data)
      setLoadingArticles(false)
    }
    fetchAll()
  }, [navigate])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let articlePayload = { ...form }

      if (imageFile) {
        setStatus('Uploading image...')
        try {
          const imageUrl = await uploadImageToCloudinary(imageFile)
          articlePayload.image = imageUrl
        } catch (upErr) {
          setStatus('Image upload failed: ' + upErr.message)
          return
        }
      }

      if (editingId) {
        setStatus('Updating...')
        const { default: db } = await import('../firebase')
        const { doc, updateDoc } = await import('firebase/firestore')
        await updateDoc(doc(db, 'articles', editingId), articlePayload)
        setStatus('Updated successfully')
      } else {
        setStatus('Saving...')
        await addArticle({ ...articlePayload })
        setStatus('Saved successfully')
      }
      setForm({ title: '', excerpt: '', author: '', category: '', image: '', date: '' })
      setImageFile(null)
      setEditingId(null)
    } catch (err) {
      setStatus((editingId ? 'Update' : 'Save') + ' failed: ' + err.message)
    }
    // Refresh articles list
    const data = await getArticles()
    setArticles(data)
  }

  if (!authorized) return null

  const adminEmail = (typeof window !== 'undefined' && localStorage.getItem('adminEmail')) || ''

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3776BE] to-white min-h-[calc(100vh-72px)]">

      <main className="min-h-[calc(100vh-72px)] py-16 flex items-start justify-center px-6">
        <div className="w-full max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="bg-gradient-to-r from-[#3776BE] via-[#2B86D8] to-[#1B96F2] p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Admin Dashboard</h1>
                {adminEmail && (
                  <p className="text-sm text-white/90 mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Signed in as <span className="font-semibold">{adminEmail}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{editingId ? 'Edit Article' : 'Add New Article'}</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#3776BE] to-[#1B96F2] rounded-full"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input 
                    name="title" 
                    value={form.title} 
                    onChange={handleChange} 
                    placeholder="Enter article title" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#3776BE] focus:ring-4 focus:ring-blue-50 transition-all outline-none bg-white"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt / Body</label>
                  <textarea 
                    name="excerpt" 
                    value={form.excerpt} 
                    onChange={handleChange} 
                    placeholder="Write a short excerpt or the article body" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#3776BE] focus:ring-4 focus:ring-blue-50 transition-all outline-none min-h-[180px] resize-y bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
                    <input 
                      name="author" 
                      value={form.author} 
                      onChange={handleChange} 
                      placeholder="Author name" 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#3776BE] focus:ring-4 focus:ring-blue-50 transition-all outline-none bg-white"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <input 
                      name="category" 
                      value={form.category} 
                      onChange={handleChange} 
                      placeholder="Category" 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#3776BE] focus:ring-4 focus:ring-blue-50 transition-all outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Image</label>
                    <div className="relative">
                      <input
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#3776BE] focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#3776BE] hover:file:bg-blue-100 file:cursor-pointer bg-white"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                    <input 
                      name="date" 
                      value={form.date} 
                      onChange={handleChange} 
                      placeholder="e.g. Aug 2025" 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#3776BE] focus:ring-4 focus:ring-blue-50 transition-all outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-3">
                    <button 
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-to-r from-[#3776BE] to-[#1B96F2] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {editingId ? 'Update Article' : 'Save Article'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={() => { setForm({ title: '', excerpt: '', author: '', category: '', image: '', date: '' }); setEditingId(null); setImageFile(null); }}
                        className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        Cancel Edit
                      </button>
                    )}
                    <button 
                      type="button" 
                      onClick={() => { 
                        localStorage.removeItem('adminAuth'); 
                        localStorage.removeItem('adminEmail'); 
                        navigate('/admin') 
                      }} 
                      className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                    >
                      Logout
                    </button>
                  </div>
                  {status && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <p className="text-sm font-medium text-blue-700">{status}</p>
                    </div>
                  )}
                </div>
              </form>

              {/* Articles list */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-gray-900 mb-4">All Articles</h3>
                {loadingArticles ? (
                  <p className="text-gray-500">Loading articles…</p>
                ) : articles.length === 0 ? (
                  <p className="text-gray-500">No articles found.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map(article => (
                      <div
                        key={article.id}
                        className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow transition-all duration-300 hover:bg-[#4794EB1F] hover:shadow-xl hover:border-[#4794EB]"
                      >
                        <div className="relative h-48 sm:h-60 overflow-hidden">
                          <img
                            src={article.image || '/assets/person1.png'}
                            alt={article.title}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Hover overlay for actions */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              type="button"
                              className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
                              onClick={() => handleEdit(article)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="mx-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-all"
                              onClick={() => handleDelete(article.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight min-h-14 transition-colors duration-300 group-hover:text-[#4794EB]">
                            {article.title}
                          </h3>
                          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <span>By {article.author}</span>
                              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                              <span>{article.category}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-3">{article.date || (article.createdAt ? new Date(article.createdAt).toLocaleDateString() : '')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}