import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import LetsTalk from "../components/LetsTalk"
import { useParams, Link } from 'react-router-dom' // Using Link for better routing
import { getArticleById } from '../firebase'
import Navbar from "../components/Navbar"

function ArticleDetails() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load() {
      if (!id) {
        setLoading(false)
        return
      }
      setLoading(true)
      const a = await getArticleById(id)
      if (!mounted) return
      setArticle(a)
      setLoading(false)
    }
    load()
    return () => { mounted = false }
  }, [id])

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* 1. Dynamic Hero Header */}
      <div className="relative pt-[72px] bg-[#3776BE]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3776BE] to-[#4794EB] opacity-90"></div>
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <Link to="/article" className="inline-flex items-center text-sm text-blue-100 hover:text-white mb-8 transition-colors group">
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to articles
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
                {article?.category || 'Insights'}
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {article ? article.title : 'Loading...'}
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-blue-100">
                <p>By <strong>{article?.author || 'Admin'}</strong></p>
                <span>•</span>
                <p>{article?.date || 'Today'}</p>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={article?.image || '/assets/about.jpg'}
                  alt={article?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Article Content Body */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {loading ? (
          <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : !article ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Article not found</h2>
            <p className="text-gray-600 mb-6">The post you are looking for has been moved or deleted.</p>
            <Link to="/article" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Return to Blog</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content Area */}
            <article className="flex-1">
              <div className="prose prose-lg prose-blue max-w-none">
                {/* Rendering content with split for paragraphs */}
                {article.excerpt ? (
                  article.excerpt.split('\n').map((p, i) => (
                    <p key={i} className="text-gray-700 mb-6 leading-relaxed text-lg lg:text-xl">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="italic text-gray-400">No content available for this post.</p>
                )}
              </div>
            </article>

            {/* 3. Responsive Sticky Sidebar */}
            <aside className="w-full lg:w-80">
              <div className="sticky top-28 space-y-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">Category</p>
                      <p className="text-gray-900 font-medium">{article.category || 'General'}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">Published</p>
                      <p className="text-gray-900 font-medium">
                        {article.date || (article.createdAt ? new Date(article.createdAt).toLocaleDateString() : 'N/A')}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">Reading Time</p>
                      <p className="text-gray-900 font-medium">5 min read</p>
                    </div>
                  </div>
                </div>

                {/* Call to action inside sidebar */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl shadow-blue-200">
                  <h4 className="text-lg font-bold mb-2">Need advice?</h4>
                  <p className="text-sm text-blue-100 mb-4">Let our experts help you uncover hidden costs in your business.</p>
                  <a href="#contact" className="block text-center bg-white text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition">
                    Contact Us
                  </a>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      <LetsTalk />
      <Footer />
    </div>
  )
}

export default ArticleDetails