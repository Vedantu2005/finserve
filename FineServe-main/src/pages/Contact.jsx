import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { addContactSubmission } from '../firebase';

const ContactPage = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Save to Admin Dashboard (Firebase)
            await addContactSubmission(formData);

            // 2. Send Email using Environment Variables
            // These values are loaded from your .env file
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
                await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
                console.log('Email sent successfully');
            } else {
                console.warn('EmailJS keys are missing in .env file. Email not sent.');
            }
            
            alert('✅ Thank you! Your message has been sent.');
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form

        } catch (error) {
            console.error('Error:', error);
            // Even if EmailJS fails, if Firebase worked, we consider it a partial success
            alert('Message saved, but we had trouble sending the email notification.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
                <div className="bg-blue-950 text-white py-44 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                            Have questions about our financial services? Our team is here to help.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-1 border border-gray-100 h-fit">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><Mail size={24} /></div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email Us</p>
                                        <p className="text-gray-600 text-sm">info@finserve360.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><Phone size={24} /></div>
                                    <div><p className="font-semibold text-gray-900">By Appointment Only</p></div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><MapPin size={24} /></div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Visit Us</p>
                                        <p className="text-gray-600 text-sm">Salt Lake City, Utah</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                            <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white outline-none transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white outline-none transition-all"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select
                                        name="subject"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition-all"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Support">Customer Support</option>
                                        <option value="Billing">Billing Question</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition-all resize-none"
                                        placeholder="How can we help you today?"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full md:w-auto px-8 py-3.5 bg-[#6BA9EF] text-white font-semibold rounded-lg shadow-lg transition-all flex items-center justify-center space-x-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-500'}`}
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;