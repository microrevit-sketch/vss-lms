import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, BookOpen, Code, FileText, CheckCircle, Target, ArrowRight, Users } from 'lucide-react';
import NewsSidebar from '../../components/shared/NewsSidebar';
import { vssNews } from '../../data/newsData';
import './VSS.css';

const VSS = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with News Sidebar */}
      <section className="bg-gradient-to-br from-vss-50 to-vss-100 py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="hero-with-news-layout">
            <div className="hero-content-main">
              <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-vss-500 text-white px-4 py-2 mb-6">
              <GraduationCap size={20} />
              <span className="font-semibold">Advanced STEM Training (Free)</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Virtual STEM School (VSS)
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Intensive online program for Math, CS, and English.
            </p>
          </div>

          <div className="bg-white shadow-xl p-8 mb-8 border-2 border-vss-100">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-vss-600 font-bold text-lg mb-2">Duration</div>
                <p className="text-gray-700">16 Months / 4 Semesters</p>
              </div>
              <div className="text-center">
                <div className="text-vss-600 font-bold text-lg mb-2">Grade Level</div>
                <p className="text-gray-700">Grade 6 & 7</p>
              </div>
              <div className="text-center">
                <div className="text-vss-600 font-bold text-lg mb-2">Next Admission</div>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <Calendar size={20} />
                  <span>24 Jan 2026</span>
                </div>
                <div className="text-sm text-red-600 mt-1">Registration closes: 18 Jan 2026</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="text-vss-600" size={24} />
                <span className="text-gray-700">Mathematics</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Code className="text-vss-600" size={24} />
                <span className="text-gray-700">Computer Science</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FileText className="text-vss-600" size={24} />
                <span className="text-gray-700">English</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/register"
              className="bg-white text-vss-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-vss-600"
            >
              Register for Admission Test
            </Link>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1fs54Li9MsTDMT5g5_iRx6VXD1zvUXRyi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-vss-100 font-semibold underline bg-vss-600/50 px-4 py-2 rounded-none inline-block backdrop-blur-sm border border-vss-400"
              >
                Download Resource Book for VSS 6 & 7 Admission
              </a>
            </div>
          </div>
            </div>

            {/* News Sidebar */}
            <NewsSidebar news={vssNews} title="VSS News" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Overview
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Accelerate development of talented students through rigorous training in Math, Computer Science, and English.
            </p>
            <div className="bg-vss-50 p-6 text-center border-2 border-vss-200">
              <h3 className="font-bold text-xl mb-4 text-vss-800">Primary Goal</h3>
              <p className="text-lg text-gray-700">
                Provide the <strong>top 1%</strong> of talented students with rigorous training, preparing them for global competitions and leading universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Participants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Target Participants
            </h2>
            <ul className="text-lg text-gray-700 space-y-4">
              <li className="flex items-center justify-center gap-2">
                <CheckCircle className="text-vss-500" size={24} />
                Motivated students in <strong>Grades 6 and 7</strong>
              </li>
              <li className="flex items-center justify-center gap-2">
                <CheckCircle className="text-vss-500" size={24} />
                Preparatory course for top <strong>Grade 5</strong> PMC performers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum & Delivery */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Curriculum
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            A comprehensive 16-month journey
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-vss-200 p-6 border-l-4 border-l-vss-500">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-vss-600" size={24} />
                <h3 className="font-bold text-xl">Mathematics (AoPS)</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><span className="font-semibold">Semester 1:</span> Prealgebra</li>
                <li><span className="font-semibold">Semester 2:</span> Intro to Algebra A; Counting & Probability</li>
                <li><span className="font-semibold">Semester 3:</span> Intro to Algebra B; Number Theory</li>
                <li><span className="font-semibold">Semester 4:</span> Intro to Geometry</li>
              </ul>
            </div>
            <div className="border border-vss-200 p-6 border-l-4 border-l-vss-500">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-vss-600" size={24} />
                <h3 className="font-bold text-xl">Computer Science</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><span className="font-semibold">Semester 1:</span> Scratch + Intro to Programming (Python)</li>
                <li><span className="font-semibold">Semester 2:</span> Intermediate Programming (Python)</li>
                <li><span className="font-semibold">Semester 3:</span> Intro to Competitive Programming (C++)</li>
                <li><span className="font-semibold">Semester 4:</span> Intermediate Competitive Programming (C++)</li>
              </ul>
            </div>
            <div className="border border-vss-200 p-6 border-l-4 border-l-vss-500">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-vss-600" size={24} />
                <h3 className="font-bold text-xl">English</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><span className="font-semibold">Semester 1:</span> Basic communication, vocabulary, everyday scenarios</li>
                <li><span className="font-semibold">Semester 2:</span> Opinions, discussions, analyzing texts, critical thinking</li>
                <li><span className="font-semibold">Semester 3:</span> Advanced discussions, debates, persuasive writing</li>
                <li><span className="font-semibold">Semester 4:</span> Research, professional communication, TED Talks</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-vss-50 p-8 max-w-4xl mx-auto border-2 border-vss-200">
            <h3 className="text-2xl font-bold text-center mb-6">Delivery and Support</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle className="text-vss-500 mt-1" size={18} /> <span>Learning managed via <strong>Google Meet</strong> (live classes) and <strong>Google Classroom</strong> (coursework).</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-vss-500 mt-1" size={18} /> <span>Program access is <strong>free</strong>.</span></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle className="text-vss-500 mt-1" size={18} /> <span>Live evening classes approximately 2–3 hours on weekdays.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-vss-500 mt-1" size={18} /> <span><strong>Chromebooks provided</strong> to deserving students to support equitable participation.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-vss-500 to-vss-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your STEM Journey?
          </h2>
          <p className="text-xl mb-8">
            The admission test for the next cohort is on 24 January 2026. Register now to secure your spot and start your 16-month journey in Mathematics, Computer Science, and English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-vss-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-vss-600"
            >
              Register for Admission Test
            </Link>
            <a
              href="mailto:info@virtual.sundarstem.edu.pk"
              className="bg-vss-700 text-white px-8 py-4 text-lg font-semibold hover:bg-vss-800 transition-colors shadow-lg border-2 border-vss-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VSS;
