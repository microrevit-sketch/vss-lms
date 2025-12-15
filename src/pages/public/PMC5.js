import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Users, Award, CheckCircle, Target, ArrowRight, BookOpen, Laptop } from 'lucide-react';
import NewsSidebar from '../../components/shared/NewsSidebar';
import PhotoGallery from '../../components/shared/PhotoGallery';
import { pmcNews } from '../../data/newsData';
import './PMC5.css';

const PMC5 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with News Sidebar */}
      <section className="bg-gradient-to-br from-pmc-50 to-pmc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="hero-with-news-layout">
            <div className="hero-content-main">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-pmc-500 text-white px-4 py-2 mb-6">
                  <Trophy size={20} />
                  <span className="font-semibold">National Math Competition (Grade 5)</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Pakistan Math Contest (PMC)
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  National contest to identify and reward top mathematics talent.
                </p>
              </div>

              <div className="bg-white shadow-xl p-8 mb-8 border-2 border-pmc-100">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-pmc-600 font-bold text-lg mb-2">Next Contest</div>
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                      <Calendar size={20} />
                      <span>24 Jan 2026</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-pmc-600 font-bold text-lg mb-2">Grade Level</div>
                    <div className="flex flex-col items-center justify-center text-gray-700">
                      <span><strong>Grade 5</strong></span>
                      <span className="text-sm text-gray-600 mt-2">(VSS for Grades 6 & 7)</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-pmc-600 font-bold text-lg mb-2">Location</div>
                    <div className="text-gray-700">Nationwide</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-pmc-500 text-white px-8 py-4 text-lg font-semibold hover:bg-pmc-600 transition-colors shadow-lg border-2 border-pmc-700"
                >
                  Register for PMC <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* News Sidebar */}
            <NewsSidebar news={pmcNews} title="PMC News" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Overview
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Identify, challenge, and reward top mathematical talent across Pakistan.
            </p>
            <div className="bg-pmc-50 p-6 inline-block mt-4 border-2 border-pmc-200">
              <h3 className="font-bold text-xl mb-2">Question Design</h3>
              <p className="text-gray-700">Thinking-based and reasoning-focused.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contest Format Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Multi-Round Format
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Round 1 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-pmc-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pmc-100 flex items-center justify-center border-2 border-pmc-200">
                  <BookOpen className="text-pmc-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Round 1</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 text-lg">60-minute, 30-question test taken from home with AI invigilation.</p>
              </div>
            </div>

            {/* Round 2 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-pmc-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pmc-100 flex items-center justify-center border-2 border-pmc-200">
                  <Trophy className="text-pmc-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Round 2</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 text-lg">Computer-based test conducted at selected centers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incentives and Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Incentives and Recognition
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Top performers receive substantial incentives
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pmc-50 to-white p-6 shadow-md text-center border-2 border-pmc-100">
              <div className="w-16 h-16 bg-pmc-500 flex items-center justify-center mx-auto mb-4 border-2 border-pmc-700">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cash Awards</h3>
              <p className="text-gray-700">
                Cash awards up to <strong>Rs 100,000</strong> for first place.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pmc-50 to-white p-6 shadow-md text-center border-2 border-pmc-100">
              <div className="w-16 h-16 bg-pmc-500 flex items-center justify-center mx-auto mb-4 border-2 border-pmc-700">
                <Laptop className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Laptops</h3>
              <p className="text-gray-700">
                Laptops for study.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pmc-50 to-white p-6 shadow-md text-center border-2 border-pmc-100">
              <div className="w-16 h-16 bg-pmc-500 flex items-center justify-center mx-auto mb-4 border-2 border-pmc-700">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Courses</h3>
              <p className="text-gray-700">
                Free enrollment in online “Math Crash Courses” from VSS.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 text-center max-w-3xl mx-auto border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pathway to VSS</h3>
            <p className="text-lg text-gray-700">
              Highest-performing PMC students may be offered entry into the <strong>Virtual STEM School (VSS)</strong> for advanced long-term training.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            How to Register
          </h2>

          <div className="bg-white shadow-xl p-8 mb-8 border-2 border-pmc-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Can Register?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-pmc-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700"><strong>Grade 5 students</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-pmc-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Date of Birth: On or after 01 January 2014</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-pmc-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Open to: Boys and Girls across Pakistan</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Grades 6 & 7 students can apply to <strong>VSS (Virtual STEM School)</strong> for advanced training.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Dates</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-pmc-50 p-3 border border-pmc-200">
                    <Calendar className="text-pmc-600" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Next PMC</p>
                      <p className="text-gray-600">24 Jan 2026</p>
                      <p className="text-sm text-red-600 mt-1">Registration closes: 18 Jan 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-pmc-500 text-white px-8 py-4 text-lg font-semibold hover:bg-pmc-600 transition-colors shadow-lg border-2 border-pmc-700"
            >
              Register Now <ArrowRight size={20} />
            </Link>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1aCvB0n6grWbJMNjvS6r6QcAtMh4pF1Y4/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pmc-600 hover:text-pmc-700 font-semibold underline"
              >
                Download Resource Book for PMC
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery
        title="PMC 2025 Highlights"
        photos={[
          require('../../images/pmc5/pmc5-01.jpg'),
          require('../../images/pmc5/pmc5-02.jpg'),
          require('../../images/pmc5/pmc5-03.jpg'),
          require('../../images/pmc5/pmc5-04.jpg'),
          require('../../images/pmc5/pmc5-05.jpg')
        ]}
      />

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-pmc-500 to-pmc-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Compete?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of Grade 5 students in this exciting challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-pmc-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-pmc-200"
            >
              Register Now
            </Link>
            <a
              href="mailto:info@virtual.sundarstem.edu.pk"
              className="bg-pmc-700 text-white px-8 py-4 text-lg font-semibold hover:bg-pmc-800 transition-colors shadow-lg border-2 border-pmc-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PMC5;
