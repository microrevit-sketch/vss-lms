import React, { useState } from 'react';
import { School, MapPin, User, Phone, CheckCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const RMCMembership = () => {
    const [formData, setFormData] = useState({
        school_name: '',
        city: '',
        address: '',
        principal_name: '',
        principal_phone: '',
        focal_person_name: '',
        focal_person_phone: '',
        agree: false
    });

    const [status, setStatus] = useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', msg: '' });

        // Simulate API call
        setTimeout(() => {
            setStatus({ type: 'ok', msg: '✅ Your school membership request has been submitted successfully.' });
            setFormData({
                school_name: '', city: '', address: '',
                principal_name: '', principal_phone: '',
                focal_person_name: '', focal_person_phone: '',
                agree: false
            });
            setIsSubmitting(false);
            window.scrollTo(0, 0);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-rmc-50 border-b border-rmc-100 py-12 mb-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-white rounded-full shadow-md">
                                <School className="text-rmc-600" size={32} />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-rmc-800">
                            RMC School Membership
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Join the Regional Math Clubs network to empower your Grade 5 students with regular mathematics practice and contests.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white border border-rmc-100 shadow-sm px-6 py-3 rounded-lg flex items-center gap-2">
                                <CheckCircle className="text-green-600" size={18} />
                                <span className="font-semibold text-gray-800">Free Membership</span>
                            </div>
                            <div className="bg-white border border-rmc-100 shadow-sm px-6 py-3 rounded-lg flex items-center gap-2">
                                <CheckCircle className="text-green-600" size={18} />
                                <span className="font-semibold text-gray-800">Monthly Contests</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 mb-20">
                <div className="max-w-3xl mx-auto">

                    {/* Form */}
                    <form className="bg-white shadow-xl rounded-xl p-8 border border-gray-100" onSubmit={handleSubmit}>
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Membership Registration Form</h2>
                            <p className="text-gray-600">Please provide your school's official details.</p>
                        </div>

                        {status.type === 'ok' && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-green-700 font-medium">{status.msg}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* School Details */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <School size={20} className="text-rmc-600" /> School Details
                                </h3>
                                <div className="grid gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">School Name <span className="text-red-500">*</span></label>
                                        <input
                                            name="school_name"
                                            type="text"
                                            required
                                            value={formData.school_name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rmc-500 focus:border-rmc-500 outline-none transition-all"
                                            placeholder="e.g. Iqra Public School"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                                            <input
                                                name="city"
                                                type="text"
                                                required
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rmc-500 focus:border-rmc-500 outline-none transition-all"
                                                placeholder="e.g. Lahore"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
                                            <input
                                                name="address"
                                                type="text"
                                                required
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rmc-500 focus:border-rmc-500 outline-none transition-all"
                                                placeholder="Street Address, Area"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Principal Details */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <User size={20} className="text-rmc-600" /> Principal Details
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Name <span className="text-red-500">*</span></label>
                                        <input
                                            name="principal_name"
                                            type="text"
                                            required
                                            value={formData.principal_name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rmc-500 focus:border-rmc-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Phone <span className="text-red-500">*</span></label>
                                        <input
                                            name="principal_phone"
                                            type="tel"
                                            required
                                            value={formData.principal_phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rmc-500 focus:border-rmc-500 outline-none transition-all"
                                            placeholder="+92..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Focal Person Details */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <Phone size={20} className="text-rmc-600" /> Focal Person Details
                                </h3>
                                <p className="text-sm text-gray-500 mb-4 -mt-2">
                                    This person will coordinate with RMC team for contest materials and results.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Focal Person Name <span className="text-red-500">*</span></label>
                                        <input
                                            name="focal_person_name"
                                            type="text"
                                            required
                                            value={formData.focal_person_name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rmc-500 focus:border-rmc-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Focal Person Phone <span className="text-red-500">*</span></label>
                                        <input
                                            name="focal_person_phone"
                                            type="tel"
                                            required
                                            value={formData.focal_person_phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rmc-500 focus:border-rmc-500 outline-none transition-all"
                                            placeholder="+92..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Consent */}
                            <div>
                                <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
                                    <input
                                        name="agree"
                                        type="checkbox"
                                        checked={formData.agree}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 w-5 h-5 text-rmc-600 focus:ring-rmc-500 rounded border-gray-300"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I confirm that the provided information is correct and I am authorized to register this school for RMC membership.
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`
                                    w-full py-4 bg-rmc-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-rmc-700 transition-all transform hover:-translate-y-1
                                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                                `}
                            >
                                {isSubmitting ? 'Submitting...' : 'Register School for RMC'}
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-12 text-gray-500 text-sm">
                        <p>Need help? Contact RMC Coordinator</p>
                        <p className="mt-1 flex justify-center items-center gap-4">
                            <span className="flex items-center gap-1"><Mail size={14} /> info@rmc.sundarstem.edu.pk</span>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RMCMembership;
