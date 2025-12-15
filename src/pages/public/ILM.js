import React from 'react';
import { BookOpen, CheckCircle, Clock, BarChart, ArrowRight, Star } from 'lucide-react';
import './ILM.css';
import '../../../src/sundarstem.css';

const ILM = () => {
    return (
        <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Roboto', 'Open Sans', sans-serif" }}>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-ilm-50 to-ilm-100 py-20">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-ilm-500 text-white px-4 py-2 mb-6" style={{ borderRadius: 0, fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
                            <BookOpen size={20} />
                            <span className="font-semibold">Grade 5 Online Math Practice</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}>
                            ILM – I Love Math
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            Grade 5 online practice with instant feedback and solutions.
                        </p>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://ilm.sundarstem.edu.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-ilm-500 text-white px-8 py-4 text-lg font-semibold hover:bg-ilm-600 transition-colors shadow-lg border-2 border-ilm-700"
                            style={{ borderRadius: 0, fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
                        >
                            Start Practice <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-8" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}>
                        Overview
                    </h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            Online question bank for Grade 5, aligned with RMC and PMC-5. Accessible 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who Can Join & How It Works */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Who Can Join */}
                        <div className="bg-white p-8 shadow-lg border-t-4 border-ilm-500" style={{ borderRadius: 0 }}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
                                <Star className="text-ilm-500" size={24} />
                                Who Can Join
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-ilm-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>Grade 5 students</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-ilm-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>Students from RMC member schools</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-ilm-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>Top PMC performers</span>
                                </li>
                            </ul>
                        </div>

                        {/* How ILM Works */}
                        <div className="bg-white p-8 shadow-lg border-t-4 border-ilm-500" style={{ borderRadius: 0 }}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
                                <Clock className="text-ilm-500" size={24} />
                                How ILM Works
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-ilm-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>Practice questions online at any time (24/7).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-ilm-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>Receive instant right/wrong feedback and correct solutions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <BarChart className="text-ilm-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>Track performance over time through progress indicators.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Alignment */}
            <section className="py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}>
                        Content Alignment
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        Aligned with <strong>RMC monthly contests</strong> and the <strong>PMC-5 syllabus and style</strong>.
                    </p>
                </div>
            </section>


            {/* Access and Cost */}
            <section className="py-16 bg-gradient-to-br from-ilm-500 to-ilm-600 text-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}>
                        Access and Cost
                    </h2>
                    <p className="text-xl mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        <strong>Free of cost.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://ilm.sundarstem.edu.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-ilm-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-ilm-200"
                            style={{ borderRadius: 0, fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
                        >
                            Start Practice Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ILM;
