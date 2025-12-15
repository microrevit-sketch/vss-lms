import React, { useState, useEffect } from 'react';
import './Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        student_name: '',
        gender: '',
        dob: '',
        yob: '',
        grade: '',
        student_phone: '',
        email: '',
        father_name: '',
        father_cnic: '',
        father_phone: '',
        school: '',
        district: '',
        city: '',
        address: '',
        formb_id: '',
        agree: false
    });

    const [files, setFiles] = useState({
        photo: null
    });

    const [photoPreview, setPhotoPreview] = useState(null);
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Date constraints
    const GLOBAL_MAX_DATE = '2019-01-01'; // No one born after this
    const VSS_MIN_DATE = '2012-01-01';    // Grade 6/7: born on/after this
    const PMC_MIN_DATE = '2014-01-01';    // Grade 5: born on/after this

    const [minDate, setMinDate] = useState(VSS_MIN_DATE); // Default to widest range initially, or dynamic

    useEffect(() => {
        // Adjust min date based on selected grade
        if (formData.grade === 'Grade 5') {
            setMinDate(PMC_MIN_DATE);
        } else {
            // Grade 6 or 7, or not selected (default to strictly VSS range or allow user to pick)
            // User requested: "for VSS 01-01-2012 ... no one can enter less then this"
            setMinDate(VSS_MIN_DATE);
        }
    }, [formData.grade]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else if (type === 'radio') {
            setFormData(prev => ({ ...prev, [name]: value }));
            // For grade change, we effect minDate in useEffect
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // Clear status on input
        if (status.type === 'err') setStatus({ type: '', msg: '' });
    };

    const handleFileChange = (e) => {
        const { name, files: selectedFiles } = e.target;
        const file = selectedFiles[0];
        if (!file) return;

        // Validation: JPG/PNG, size limit 2MB
        const maxSize = 2 * 1024 * 1024;

        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            alert('Photo must be JPG or PNG.');
            e.target.value = '';
            return;
        }

        if (file.size > maxSize) {
            alert(`Photo too large. Max size is 2 MB.`);
            e.target.value = '';
            return;
        }

        setFiles(prev => ({ ...prev, [name]: file }));

        if (name === 'photo') {
            const url = URL.createObjectURL(file);
            setPhotoPreview(url);
        }
    };

    const validateForm = () => {
        // Regex patterns
        const phoneRegex = /^\+92\d{10}$/;
        const cnicRegex = /^\d{13}$/;

        if (!formData.student_name) return "Student name is required.";
        if (!formData.gender) return "Gender is required.";
        if (!formData.dob) return "Date of Birth is required.";

        // Date Logic Check
        if (formData.dob < minDate) {
            return `Date of Birth cannot be before ${minDate} for the selected grade.`;
        }
        if (formData.dob > GLOBAL_MAX_DATE) {
            return `Date of Birth cannot be after ${GLOBAL_MAX_DATE}.`;
        }

        if (!formData.grade) return "Grade is required.";

        // Check Grade vs DOB Logic again to be safe
        if (formData.grade === 'Grade 5' && formData.dob < PMC_MIN_DATE) {
            return "For Grade 5 (PMC-5), Student must be born on or after 01-01-2014.";
        }
        if ((formData.grade === 'Grade 6' || formData.grade === 'Grade 7') && formData.dob < VSS_MIN_DATE) {
            return "For VSS (Grade 6/7), Student must be born on or after 01-01-2012.";
        }

        if (!phoneRegex.test(formData.student_phone)) return "Invalid Student WhatsApp. Use +92XXXXXXXXXX format.";
        if (!formData.email) return "Email is required.";
        if (!formData.father_name) return "Father's name is required.";
        if (!cnicRegex.test(formData.father_cnic)) return "Father's CNIC must be 13 digits (no dashes).";
        if (!phoneRegex.test(formData.father_phone)) return "Invalid Father's WhatsApp. Use +92XXXXXXXXXX format.";
        if (!formData.school) return "School name is required.";
        if (!formData.district) return "District is required.";
        if (!formData.city) return "City is required.";
        if (!formData.address) return "Address is required.";
        if (!cnicRegex.test(formData.formb_id)) return "Student Form-B/Smart Card ID must be 13 digits.";

        if (!files.photo) return "Student photo is required.";

        if (!formData.agree) return "You must agree to the declaration.";

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setStatus({ type: 'err', msg: error });
            // Scroll to top or show error visible
            window.scrollTo(0, 0);
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', msg: '' });

        // Simulate API call since we don't have a real backend endpoint provided in instructions
        // In a real scenario, we'd use FormData to send files and text

        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating network req
            // Success
            setStatus({ type: 'ok', msg: '✅ Your registration has been submitted successfully (Simulated).' });

            // Reset form
            setFormData({
                student_name: '', gender: '', dob: '', yob: '', grade: '', student_phone: '', email: '',
                father_name: '', father_cnic: '', father_phone: '', school: '', district: '', city: '',
                address: '', formb_id: '', agree: false
            });
            setFiles({ photo: null });
            setPhotoPreview(null);
            window.scrollTo(0, 0);
        } catch (err) {
            setStatus({ type: 'err', msg: 'Submission failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="registration-page">
            {/* Hero Section */}
            <div className="bg-red-50 py-12 mb-8 border-b border-red-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-sundar-red">Virtual STEM School (VSS) — Spring 2025</h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Nationwide Evening Program for Grades 5, 6 & 7 · Organized by SundarSTEM School
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white border border-red-100 shadow-sm px-6 py-3 rounded-lg">
                                <p className="text-sm text-red-600 uppercase tracking-wider font-bold mb-1">Admission Test</p>
                                <p className="text-xl font-bold text-gray-900">24 Jan 2026</p>
                            </div>
                            <div className="bg-white border border-red-100 shadow-sm px-6 py-3 rounded-lg">
                                <p className="text-sm text-red-600 uppercase tracking-wider font-bold mb-1">Register By</p>
                                <p className="text-xl font-bold text-gray-900">18 Jan 2026</p>
                            </div>
                            <div className="bg-white border border-red-100 shadow-sm px-6 py-3 rounded-lg">
                                <p className="text-sm text-red-600 uppercase tracking-wider font-bold mb-1">Grades</p>
                                <p className="text-xl font-bold text-gray-900">5, 6 & 7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 mb-20">
                <div className="max-w-4xl mx-auto">
                    {/* Eligibility */}
                    <section className="bg-white p-8 border-l-4 border-sundar-red shadow-md mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            Eligibility Criteria
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-sundar-red mt-1">•</span>
                                    <span>Currently enrolled in <strong>Grade 5, 6 or 7</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sundar-red mt-1">•</span>
                                    <span><strong>Grade 5 (PMC-5):</strong> Born on or after <strong>01 Jan 2014</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sundar-red mt-1">•</span>
                                    <span><strong>Grade 6/7 (VSS):</strong> Born on or after <strong>01 Jan 2012</strong>.</span>
                                </li>
                            </ul>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-sundar-red mt-1">•</span>
                                    <span><strong>Upper Age Limit:</strong> Born on or before <strong>01 Jan 2019</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sundar-red mt-1">•</span>
                                    <span>Open to <strong>boys and girls</strong> across Pakistan.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sundar-red mt-1">•</span>
                                    <span><strong>Test Format:</strong> Online from home under AI invigilation.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Form */}
                    <form className="reg-form shadow-xl" onSubmit={handleSubmit} noValidate>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Registration Form</h2>
                            <p className="text-gray-600">Please fill all fields marked with <span className="text-red-500">*</span> correctly.</p>
                        </div>

                        {status.type === 'err' && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700">{status.msg}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {status.type === 'ok' && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-green-700">{status.msg}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Student Name */}
                            <div>
                                <label className="reg-label" htmlFor="student_name">Student Full Name <span className="reg-req">*</span></label>
                                <input id="student_name" name="student_name" type="text" className="reg-input"
                                    value={formData.student_name} onChange={handleInputChange} required placeholder="As per Form‑B" />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="reg-label">Gender <span className="reg-req">*</span></label>
                                <div className="flex gap-6 mt-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleInputChange} className="w-4 h-4 text-sundar-red focus:ring-sundar-red" />
                                        <span>Male</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleInputChange} className="w-4 h-4 text-sundar-red focus:ring-sundar-red" />
                                        <span>Female</span>
                                    </label>
                                </div>
                            </div>

                            {/* Grade */}
                            <div className="md:col-span-2">
                                <label className="reg-label" htmlFor="grade">Current Class/Grade <span className="reg-req">*</span></label>
                                <div className="grid sm:grid-cols-3 gap-4 mt-2">
                                    {['Grade 5', 'Grade 6', 'Grade 7'].map((g) => (
                                        <label key={g} className={`
                                            flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all
                                            ${formData.grade === g ? 'border-sundar-red bg-red-50 text-sundar-red font-bold' : 'border-gray-200 hover:border-gray-300'}
                                        `}>
                                            <input type="radio" name="grade" value={g} checked={formData.grade === g} onChange={handleInputChange} className="sr-only" />
                                            <span>{g} {g === 'Grade 5' ? '(PMC-5)' : '(VSS)'}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* DOB */}
                            <div>
                                <label className="reg-label" htmlFor="dob">Date of Birth <span className="reg-req">*</span></label>
                                <input id="dob" name="dob" type="date" className="reg-input"
                                    value={formData.dob} onChange={handleInputChange}
                                    min={minDate} max={GLOBAL_MAX_DATE} required />
                                <div className="reg-hint mt-1">Allowed: {minDate} to {GLOBAL_MAX_DATE}</div>
                            </div>

                            {/* Student WhatsApp */}
                            <div>
                                <label className="reg-label" htmlFor="student_phone">Student WhatsApp <span className="reg-req">*</span></label>
                                <input id="student_phone" name="student_phone" type="tel" className="reg-input"
                                    value={formData.student_phone} onChange={handleInputChange}
                                    placeholder="+923001234567" required />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="reg-label" htmlFor="email">Active Email <span className="reg-req">*</span></label>
                                <input id="email" name="email" type="email" className="reg-input"
                                    value={formData.email} onChange={handleInputChange} required />
                            </div>

                            {/* Father's Name */}
                            <div>
                                <label className="reg-label" htmlFor="father_name">Father's Full Name <span className="reg-req">*</span></label>
                                <input id="father_name" name="father_name" type="text" className="reg-input"
                                    value={formData.father_name} onChange={handleInputChange} required />
                            </div>

                            {/* Father's CNIC */}
                            <div>
                                <label className="reg-label" htmlFor="father_cnic">Father's CNIC <span className="reg-req">*</span></label>
                                <input id="father_cnic" name="father_cnic" type="text" className="reg-input"
                                    value={formData.father_cnic} onChange={handleInputChange}
                                    placeholder="13 digits (no dashes)" maxLength="13" required />
                            </div>

                            {/* Father's WhatsApp */}
                            <div>
                                <label className="reg-label" htmlFor="father_phone">Father's WhatsApp <span className="reg-req">*</span></label>
                                <input id="father_phone" name="father_phone" type="tel" className="reg-input"
                                    value={formData.father_phone} onChange={handleInputChange}
                                    placeholder="+923001234567" required />
                            </div>

                            {/* School */}
                            <div className="md:col-span-2">
                                <label className="reg-label" htmlFor="school">School Name <span className="reg-req">*</span></label>
                                <input id="school" name="school" type="text" className="reg-input"
                                    value={formData.school} onChange={handleInputChange} required />
                            </div>

                            {/* District */}
                            <div>
                                <label className="reg-label" htmlFor="district">District <span className="reg-req">*</span></label>
                                <input id="district" name="district" type="text" className="reg-input"
                                    value={formData.district} onChange={handleInputChange} required />
                            </div>

                            {/* City */}
                            <div>
                                <label className="reg-label" htmlFor="city">City <span className="reg-req">*</span></label>
                                <input id="city" name="city" type="text" className="reg-input"
                                    value={formData.city} onChange={handleInputChange} required />
                            </div>

                            {/* Address */}
                            <div className="md:col-span-2">
                                <label className="reg-label" htmlFor="address">Complete Residential Address <span className="reg-req">*</span></label>
                                <textarea id="address" name="address" className="reg-textarea"
                                    value={formData.address} onChange={handleInputChange} required rows={3}></textarea>
                            </div>

                            {/* Form-B */}
                            <div className="md:col-span-2">
                                <label className="reg-label" htmlFor="formb_id">Student Form‑B / Smart Card ID <span className="reg-req">*</span></label>
                                <input id="formb_id" name="formb_id" type="text" className="reg-input"
                                    value={formData.formb_id} onChange={handleInputChange}
                                    placeholder="13 digits (no dashes)" maxLength="13" required />
                            </div>

                            {/* Photo Upload */}
                            <div className="md:col-span-2">
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 text-center">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Student Photo Upload</h3>
                                    <p className="text-sm text-gray-500 mb-4">Upload a clear photo or use your device camera. JPG/PNG only, max 2MB.</p>

                                    <div className="flex flex-col items-center justify-center gap-4">
                                        {photoPreview ? (
                                            <div className="relative">
                                                <img src={photoPreview} alt="Preview" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg" />
                                                <button
                                                    type="button"
                                                    onClick={() => { setFiles({ ...files, photo: null }); setPhotoPreview(null); }}
                                                    className="absolute bottom-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                                                    title="Remove photo"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                </button>
                                            </div>
                                        ) : (
                                            <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-50 transition-colors">
                                                <span>Choose File</span>
                                                <input
                                                    id="photo"
                                                    name="photo"
                                                    type="file"
                                                    accept="image/jpeg,image/png"
                                                    capture="user"
                                                    onChange={handleFileChange}
                                                    required
                                                    className="hidden"
                                                />
                                            </label>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Consent */}
                            <div className="md:col-span-2">
                                <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <input id="agree" name="agree" type="checkbox" checked={formData.agree} onChange={handleInputChange} required className="mt-1 w-5 h-5 text-sundar-red focus:ring-sundar-red rounded border-gray-300" />
                                    <span className="text-sm text-gray-700">I confirm that all information and documents provided are true and I consent to their use for VSS admissions and verification. I understand that incorrect information may lead to disqualification.</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                className={`
                                    w-full md:w-auto px-8 py-4 bg-sundar-red text-white text-lg font-bold rounded-lg shadow-lg hover:bg-red-800 transition-all transform hover:-translate-y-1
                                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                                `}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting Registration...' : 'Submit Registration'}
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-12 text-gray-500 text-sm">
                        <p>Need help? Contact Admissions Office</p>
                        <p className="mt-1">
                            <a href="mailto:admissions@virtual.sundarstem.edu.pk" className="text-sundar-red hover:underline">admissions@virtual.sundarstem.edu.pk</a>
                            <span className="mx-2">·</span>
                            <a href="tel:+923217276806" className="text-sundar-red hover:underline">+92-321-7276806</a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Registration;
