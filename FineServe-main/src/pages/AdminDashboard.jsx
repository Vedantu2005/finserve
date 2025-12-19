import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getArticles, 
  getContactSubmissions, 
  getReferralSubmissions, 
  addArticle 
} from '../firebase';
import { uploadImageToCloudinary } from '../cloudinary';
import db from '../firebase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

// Icons
const IconFile = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path></svg>;
const IconMail = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M22 6l-10 7L2 6"></path></svg>;
const IconUsers = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>;
const IconLogOut = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const IconEdit = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const IconTrash = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('articles');
  const [loading, setLoading] = useState(true);
  
  const [articles, setArticles] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [referrals, setReferrals] = useState([]);

  // Form State
  const [form, setForm] = useState({ title: '', excerpt: '', author: '', category: '', image: '', date: '' });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('adminAuth') !== 'true') {
      navigate('/admin');
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [art, con, ref] = await Promise.all([
        getArticles(),
        getContactSubmissions(),
        getReferralSubmissions()
      ]);
      setArticles(art || []);
      setContacts(con || []);
      setReferrals(ref || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let payload = { ...form };
      if (imageFile) payload.image = await uploadImageToCloudinary(imageFile);
      
      if (editingId) {
        await updateDoc(doc(db, 'articles', editingId), payload);
        alert('Updated!');
      } else {
        await addArticle(payload);
        alert('Published!');
      }
      handleCancel();
      loadData();
    } catch (e) { alert(e.message); } 
    finally { setIsSubmitting(false); }
  };

  const handleCancel = () => {
    setForm({ title: '', excerpt: '', author: '', category: '', image: '', date: '' });
    setImageFile(null);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this article?')) return;
    await deleteDoc(doc(db, 'articles', id));
    loadData();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
    setActiveTab('articles');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white fixed h-full flex flex-col z-20 shadow-xl">
        <div className="p-6 border-b border-slate-800 text-xl font-bold text-blue-400">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('articles')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${activeTab === 'articles' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
            <IconFile /> Articles
          </button>
          <button onClick={() => setActiveTab('contacts')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${activeTab === 'contacts' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
            <IconMail /> Contacts
          </button>
          <button onClick={() => setActiveTab('referrals')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${activeTab === 'referrals' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
            <IconUsers /> Referrals
          </button>
        </nav>
        <button onClick={handleLogout} className="p-6 border-t border-slate-800 flex items-center gap-3 text-slate-400 hover:text-red-400">
          <IconLogOut /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6 capitalize">{activeTab} Management</h2>
        
        {loading ? <div className="text-gray-500 py-10 text-center">Loading data...</div> : (
          <div className="space-y-8">
            
            {activeTab === 'articles' && (
              <>
                 {/* Article Form */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-xl text-slate-800">{editingId ? 'Edit Article' : 'Add New Article'}</h3>
                    </div>
                    
                    <form onSubmit={handleArticleSubmit} className="grid grid-cols-2 gap-6">
                       <div className="col-span-2 md:col-span-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                          <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Article Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
                       </div>
                       <div className="col-span-2 md:col-span-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                          <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Author Name" value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
                       </div>
                       <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Content / Excerpt</label>
                          <textarea className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Write something..." value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} required />
                       </div>
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                          <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Finance" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
                       </div>
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                          <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Aug 2025" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
                       </div>
                       <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
                          <input type="file" onChange={e => setImageFile(e.target.files[0])} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                       </div>
                       
                       <div className="col-span-2 flex gap-4">
                         <button type="submit" disabled={isSubmitting} className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
                            {isSubmitting ? 'Processing...' : editingId ? 'Update Article' : 'Publish Article'}
                         </button>
                         <button type="button" onClick={handleCancel} className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition">
                            Cancel
                         </button>
                       </div>
                    </form>
                 </div>

                 {/* Blog Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map(a => (
                       <div key={a.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col group">
                          {/* Image Box */}
                          <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                             {a.image ? (
                               <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                             ) : (
                               <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                             )}
                             <div className="absolute top-3 right-3">
                                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-700 shadow-sm uppercase tracking-wide">
                                  {a.category || 'Blog'}
                                </span>
                             </div>
                          </div>
                          
                          {/* Content Box */}
                          <div className="p-5 flex-1 flex flex-col">
                             <h4 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2 leading-tight">{a.title}</h4>
                             <p className="text-xs text-gray-500 mb-4 font-medium uppercase">{a.date} • {a.author}</p>
                             <p className="text-sm text-gray-600 mb-4 line-clamp-3">{a.excerpt}</p>
                             
                             <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100">
                                <button onClick={() => handleEdit(a)} className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-100 transition text-sm">
                                   <IconEdit /> Edit
                                </button>
                                <button onClick={() => handleDelete(a.id)} className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-lg font-medium hover:bg-red-100 transition text-sm">
                                   <IconTrash /> Delete
                                </button>
                             </div>
                          </div>
                       </div>
                    ))}
                    {articles.length === 0 && (
                      <div className="col-span-full py-12 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                        No articles found.
                      </div>
                    )}
                 </div>
              </>
            )}

            {/* Contacts Table */}
            {activeTab === 'contacts' && (
               <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b">
                      <tr>
                        <th className="p-4 font-semibold text-gray-600">Name</th>
                        <th className="p-4 font-semibold text-gray-600">Email</th>
                        <th className="p-4 font-semibold text-gray-600">Message</th>
                        <th className="p-4 font-semibold text-gray-600">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                       {contacts.map(c => (
                          <tr key={c.id} className="border-b hover:bg-slate-50">
                            <td className="p-4 font-medium text-slate-800">{c.name}</td>
                            <td className="p-4 text-slate-600">{c.email}</td>
                            <td className="p-4 text-sm text-slate-500 max-w-xs truncate">{c.message}</td>
                            <td className="p-4 text-xs text-slate-400">{new Date(c.createdAt).toLocaleDateString()}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
            )}

            {/* Referrals Table */}
            {activeTab === 'referrals' && (
               <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b">
                      <tr>
                        <th className="p-4 font-semibold text-gray-600">Name</th>
                        <th className="p-4 font-semibold text-gray-600">Company</th>
                        <th className="p-4 font-semibold text-gray-600">Notes</th>
                        <th className="p-4 font-semibold text-gray-600">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                       {referrals.map(r => (
                          <tr key={r.id} className="border-b hover:bg-slate-50">
                            <td className="p-4 font-medium text-slate-800">{r.fullName}</td>
                            <td className="p-4 text-slate-600">{r.companyName}</td>
                            <td className="p-4 text-sm text-slate-500 max-w-xs truncate">{r.notes}</td>
                            <td className="p-4 text-xs text-slate-400">{new Date(r.createdAt).toLocaleDateString()}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}