import React, { useState } from 'react';
import { addReferralSubmission } from '../firebase';

// Component for Input Fields (Updated to accept state props)
const FormInput = ({ label, placeholder, type = 'text', rows, required = true, name, value, onChange }) => (
  <div className="flex flex-col space-y-1 w-full">
    <label className="font-sfpro text-gray-700 text-sm font-semibold">{label}</label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full p-4 bg-white border border-[#0000001C] rounded-xl transition shadow-sm font-sfpro text-gray-800 resize-none h-60 md:h-full"
        aria-label={label}
      />
    ) : (
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-white border border-[#0000001C] rounded-xl  transition shadow-sm font-sfpro text-gray-800"
        aria-label={label}
      />
    )}
  </div>
);

// Main Component
const ReferralForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addReferralSubmission(formData);
      alert("✅ Form submitted successfully!");
      setFormData({ fullName: '', companyName: '', email: '', phone: '', notes: '' });
    } catch (error) {
      console.error(error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;0,600;1,400;1,600&display=swap');

          .font-sfpro {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", 
                      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          }

          .font-instrument {
            font-family: 'Instrument Serif', serif;
          }

          .grid-bg {
            background-color: #ffffff;
            background-image: linear-gradient(to right, rgba(144, 202, 249, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(144, 202, 249, 0.15) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}
      </style>

      <div className="grid-bg flex items-center justify-center p-4 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl p-8 md:p-12 bg-white/60 backdrop-blur-md rounded-2xl transform transition duration-500 hover:shadow-3xl"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="font-sfpro inline-block px-4 py-1 mb-6 text-xs font-semibold text-blue-600 bg-white border border-blue-300 rounded-full shadow-md">
              Start Earning With FinServe360
            </span>

            <h1 className="text-[52px] leading-[52px] font-bold text-center text-gray-900 mb-4 font-sfpro">
              Apply
              <span className="font-normal italic mx-2 font-instrument">
                to Join
              </span>
              Our Referral Network
            </h1>

            <p className="font-sfpro text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Fill out the form below to introduce a business or inquire about being a referral partner.
              Our team will reach out within 2-3 business days to explore opportunities together.
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <div className="flex-1 space-y-4">
              <FormInput 
                label="Full Name" 
                placeholder="Full Name" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
              />
              <FormInput 
                label="Company Name" 
                placeholder="Company Name" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
              />
              <FormInput 
                label="Email Address" 
                placeholder="Email Address" 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
              <FormInput 
                label="Phone Number" 
                placeholder="Phone Number" 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>

            <div className="flex-1 flex flex-col space-y-1">
              <FormInput
                label="Message / Referral Notes..."
                placeholder="Your Note..."
                rows={10}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 text-white text-xl font-bold rounded-xl shadow-lg transition duration-300 transform active:scale-98
                        bg-gradient-to-r from-blue-500 to-sky-400 
                        hover:from-blue-600 hover:to-sky-500 
                        focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 
                        font-sfpro tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit & Join'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReferralForm;