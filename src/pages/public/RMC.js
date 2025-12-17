import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MapPin, BookOpen, Target, ArrowRight, CheckCircle, Trophy, Medal, Award, School } from 'lucide-react';
import NewsSidebar from '../../components/shared/NewsSidebar';
import PhotoGallery from '../../components/shared/PhotoGallery';
import { rmcNews } from '../../data/newsData';
import './RMC.css';

const RMC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with News Sidebar */}
      <section className="bg-gradient-to-br from-rmc-50 to-rmc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="hero-with-news-layout">
            <div className="hero-content-main text-center">
              <div className="inline-block bg-rmc-500 text-white px-4 py-2 text-sm font-semibold mb-4">
                Regional Math Clubs
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-rmc-800 mb-6">
                RMC – Regional Math Clubs
              </h1>
              <p className="text-2xl text-gray-700 mb-4 font-semibold">
                Monthly Grade 5 School Contests
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Monthly mathematics contest program for Grade 5 to build problem-solving habits.
              </p>

              <div className="bg-white shadow-lg p-6 inline-block mb-8 border-2 border-rmc-100">
                <div className="flex items-center gap-2 text-rmc-600">
                  <Calendar size={24} />
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Next RMC Monthly Contest</p>
                    <p className="text-2xl font-bold">31st January 2026</p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  to="/rmc-register"
                  className="inline-flex items-center gap-2 bg-rmc-500 text-white px-8 py-4 text-lg font-semibold hover:bg-rmc-600 transition-colors shadow-lg border-2 border-rmc-700"
                >
                  Register a School / Become a Member
                </Link>
              </div>
              <div className="mt-6">
                <a
                  href="https://drive.google.com/drive/folders/1DB84iCng8g9lzS5JF9HZ4vhVD_TTqRNe?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-rmc-200 font-semibold underline bg-rmc-600/50 px-4 py-2 rounded-none inline-block backdrop-blur-sm border border-rmc-400"
                >
                  Download Content for Next RMC
                </a>
              </div>
            </div>

            {/* News Sidebar */}
            <NewsSidebar news={rmcNews} title="RMC News" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            Builds consistent problem-solving habits through monthly contests. Foundation of SundarSTEM’s talent development.
          </p>
        </div>
      </section >

      {/* Target Participants & Active Cities */}
      < section className="py-16 bg-gray-50" >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Target Participants
              </h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-rmc-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Grade 5 students</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-rmc-500 flex-shrink-0 mt-1" size={20} />
                  <span>Member schools are encouraged to nominate <strong>top 5 students</strong> for monthly participation.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Where RMC is Active
              </h2>
              <p className="text-lg text-gray-700 mb-4">RMC is currently active with member schools across:</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-6 py-3 shadow-md flex items-center gap-2 border-2 border-gray-100">
                  <MapPin className="text-rmc-500" size={20} />
                  <span className="font-semibold text-gray-800">Lahore</span>
                </div>
                <div className="bg-white px-6 py-3 shadow-md flex items-center gap-2 border-2 border-gray-100">
                  <MapPin className="text-rmc-500" size={20} />
                  <span className="font-semibold text-gray-800">Abbottabad</span>
                </div>
                <div className="bg-white px-6 py-3 shadow-md flex items-center gap-2 border-2 border-gray-100">
                  <MapPin className="text-rmc-500" size={20} />
                  <span className="font-semibold text-gray-800">Karachi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Contest Format and Schedule */}
      < section className="py-16 bg-white" >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Contest Format and Schedule
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-rmc-50 p-6 border-2 border-rmc-200">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Target size={24} className="text-rmc-600" /> Format</h3>
              <p className="text-gray-700">Monthly contest format: <strong>multiple-choice</strong>, approximately <strong>15 questions</strong>.</p>
            </div>
            <div className="bg-rmc-50 p-6 border-2 border-rmc-200">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Calendar size={24} className="text-rmc-600" /> Schedule</h3>
              <p className="text-gray-700">Typical schedule: held <strong>monthly</strong>, typically on the <strong>last Saturday</strong>.</p>
            </div>
            <div className="bg-rmc-50 p-6 border-2 border-rmc-200">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Users size={24} className="text-rmc-600" /> Hosting</h3>
              <p className="text-gray-700">Hosting model: hosted by member schools on a <strong>rotational basis</strong>.</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-rmc-200 p-6 border-l-4 border-l-rmc-500">
              <h3 className="font-bold text-xl mb-4">Curriculum Focus</h3>
              <p className="text-gray-700">Each contest systematically follows the <strong>Beast Academy Grade 5 curriculum</strong>, focusing on specific chapters each month.</p>
            </div>
            <div className="border border-rmc-200 p-6 border-l-4 border-l-rmc-500">
              <h3 className="font-bold text-xl mb-4">Materials, Results, and Feedback</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contest materials (question papers, answer keys) are provided <strong>free of charge</strong>.</li>
                <li>• Performance tracking through a <strong>city-wide leaderboard</strong>.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center bg-blue-50 p-6 border-2 border-blue-100">
            <h3 className="font-bold text-xl mb-2">Relationship to ILM and PMC</h3>
            <p className="text-gray-700">RMC supports regular practice and contest readiness and connects naturally into ILM practice and PMC participation within the broader pathway.</p>
          </div>
        </div>
      </section >

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-16 bg-gradient-to-br from-rmc-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rmc-500 text-white px-4 py-2 mb-4">
              <Trophy size={20} />
              <span className="font-semibold">RMC 1st Monthly Contest</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shining Stars & Top Schools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Held on <strong>29 November 2025</strong> across Lahore, Abbottabad and Karachi. Students who scored <strong>60%+ (9/15 or higher)</strong> are highlighted below.
            </p>
          </div>

          {/* Two Column Layout: Main Content + Outstanding Students Sidebar */}
          <div className="grid lg:grid-cols-[1fr_350px] gap-8">

            {/* Main Content Column */}
            <div>
          {/* Top Positions by Venue */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center gap-3">
              <Medal className="text-rmc-500" size={32} />
              Top Positions from Each Venue
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lahore */}
              <div className="bg-white p-6 shadow-lg border-l-4 border-l-rmc-500">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="text-yellow-500" size={24} />
                  <h4 className="font-bold text-xl text-gray-900">Lahore</h4>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">Abdul Rauf</p>
                <p className="text-sm text-gray-600 mb-2">King Way Science School</p>
                <div className="inline-block bg-rmc-100 text-rmc-800 px-3 py-1 font-bold">
                  12/15
                </div>
              </div>

              {/* Abbottabad */}
              <div className="bg-white p-6 shadow-lg border-l-4 border-l-rmc-500">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="text-yellow-500" size={24} />
                  <h4 className="font-bold text-xl text-gray-900">Abbottabad</h4>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">Saifullah Shakir</p>
                <p className="text-sm text-gray-600 mb-2">Mansehra Public School and College</p>
                <div className="inline-block bg-rmc-100 text-rmc-800 px-3 py-1 font-bold">
                  12/15
                </div>
              </div>

              {/* Karachi - Habib Public School */}
              <div className="bg-white p-6 shadow-lg border-l-4 border-l-rmc-500">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="text-yellow-500" size={24} />
                  <h4 className="font-bold text-xl text-gray-900">Karachi - HPS</h4>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">Ebad Ullah Azeem</p>
                <p className="text-sm text-gray-600 mb-2">Habib Public School</p>
                <div className="inline-block bg-rmc-100 text-rmc-800 px-3 py-1 font-bold">
                  15/15
                </div>
              </div>

              {/* Karachi - Dar e Arqam Jauhar */}
              <div className="bg-white p-6 shadow-lg border-l-4 border-l-rmc-500">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="text-yellow-500" size={24} />
                  <h4 className="font-bold text-xl text-gray-900">Karachi - DAJ</h4>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">M. Eisa</p>
                <p className="text-sm text-gray-600 mb-2">Dar e Arqam Jauhar Boys Campus</p>
                <div className="inline-block bg-rmc-100 text-rmc-800 px-3 py-1 font-bold">
                  12/15
                </div>
              </div>

              {/* Karachi - Dar e Arqam T Block - Co-toppers */}
              <div className="bg-white p-6 shadow-lg border-l-4 border-l-rmc-500 md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="text-yellow-500" size={24} />
                  <h4 className="font-bold text-xl text-gray-900">Karachi - DAT (Co-toppers)</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-base font-semibold text-gray-800">Basil</p>
                    <p className="text-xs text-gray-600">Dar e Arqam T Block</p>
                    <div className="inline-block bg-rmc-100 text-rmc-800 px-2 py-1 text-sm font-bold mt-1">15/15</div>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-800">M. Shaheen Mohsanin</p>
                    <p className="text-xs text-gray-600">Dar e Arqam T Block</p>
                    <div className="inline-block bg-rmc-100 text-rmc-800 px-2 py-1 text-sm font-bold mt-1">15/15</div>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-800">M. Usman Baqai</p>
                    <p className="text-xs text-gray-600">Dar e Arqam T Block</p>
                    <div className="inline-block bg-rmc-100 text-rmc-800 px-2 py-1 text-sm font-bold mt-1">15/15</div>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-800">M. Arham Naeem</p>
                    <p className="text-xs text-gray-600">Dar e Arqam Metroville</p>
                    <div className="inline-block bg-rmc-100 text-rmc-800 px-2 py-1 text-sm font-bold mt-1">15/15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Schools by Venue */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center gap-3">
              <School className="text-rmc-500" size={32} />
              Top Schools by Venue
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-rmc-500 to-rmc-600 text-white p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-yellow-300" size={20} />
                  <p className="font-semibold text-sm">Lahore</p>
                </div>
                <p className="text-lg font-bold">King Way Science School</p>
                <p className="text-xs text-rmc-100 mt-1">Hosted at: Superior College Pak Arab Society</p>
              </div>

              <div className="bg-gradient-to-br from-rmc-500 to-rmc-600 text-white p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-yellow-300" size={20} />
                  <p className="font-semibold text-sm">Abbottabad</p>
                </div>
                <p className="text-lg font-bold">Mansehra Public School and College</p>
                <p className="text-xs text-rmc-100 mt-1">Hosted at: MODERNAGE Public School & College</p>
              </div>

              <div className="bg-gradient-to-br from-rmc-500 to-rmc-600 text-white p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-yellow-300" size={20} />
                  <p className="font-semibold text-sm">Karachi - HPS Venue</p>
                </div>
                <p className="text-lg font-bold">Habib Public School</p>
                <p className="text-xs text-rmc-100 mt-1">Hosted at: Habib Public School</p>
              </div>

              <div className="bg-gradient-to-br from-rmc-500 to-rmc-600 text-white p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-yellow-300" size={20} />
                  <p className="font-semibold text-sm">Karachi - DAJ Venue</p>
                </div>
                <p className="text-lg font-bold">Dar e Arqam Jauhar Boys Campus</p>
                <p className="text-xs text-rmc-100 mt-1">Hosted at: Dar e Arqam Jauhar Girls Campus</p>
              </div>

              <div className="bg-gradient-to-br from-rmc-500 to-rmc-600 text-white p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-yellow-300" size={20} />
                  <p className="font-semibold text-sm">Karachi - DAT Venue</p>
                </div>
                <p className="text-lg font-bold">Dar e Arqam T Block Campus</p>
                <p className="text-xs text-rmc-100 mt-1">Hosted at: Dar e Arqam T Block Campus</p>
              </div>
            </div>
          </div>

          {/* Thank You to Host Schools */}
          <div className="bg-white p-8 shadow-xl border-2 border-rmc-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Thank You to Our Club Member & Host Schools
            </h3>
            <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto">
              A heartfelt thank you to all RMC club member schools for sending their students and supporting this initiative.
            </p>
            <p className="text-gray-900 font-semibold text-center mb-4">Special appreciation to our host schools:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-3 bg-rmc-50 border border-rmc-200">
                <School className="text-rmc-600 flex-shrink-0" size={20} />
                <span className="text-sm text-gray-800">Superior College Pak Arab Society, Lahore</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-rmc-50 border border-rmc-200">
                <School className="text-rmc-600 flex-shrink-0" size={20} />
                <span className="text-sm text-gray-800">MODERNAGE Public School & College, Abbottabad</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-rmc-50 border border-rmc-200">
                <School className="text-rmc-600 flex-shrink-0" size={20} />
                <span className="text-sm text-gray-800">Habib Public School, Karachi</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-rmc-50 border border-rmc-200">
                <School className="text-rmc-600 flex-shrink-0" size={20} />
                <span className="text-sm text-gray-800">Dar e Arqam Jauhar Girls Campus, Karachi</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-rmc-50 border border-rmc-200">
                <School className="text-rmc-600 flex-shrink-0" size={20} />
                <span className="text-sm text-gray-800">Dar e Arqam T Block Campus, Karachi</span>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-6 italic">
              Your support and your students' hard work made the RMC 1st Monthly Contest a memorable and confident start. 🌟
            </p>
          </div>
            </div>
            {/* End Main Content Column */}

            {/* Outstanding Students Sidebar */}
            <div className="lg:sticky lg:top-4 lg:self-start">
              <div className="bg-white shadow-xl border-2 border-rmc-300 overflow-hidden">
                <div className="bg-gradient-to-r from-rmc-500 to-rmc-600 text-white p-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Award size={24} />
                    Outstanding Students by Venue
                  </h3>
                  <p className="text-xs text-rmc-100 mt-1">60%+ Scorers (9/15 or higher)</p>
                </div>

                <div className="max-h-[800px] overflow-y-auto">
                  {/* Lahore */}
                  <div className="border-b-2 border-rmc-100">
                    <div className="bg-rmc-50 px-4 py-3 sticky top-0 z-10">
                      <h4 className="font-bold text-rmc-800 flex items-center gap-2">
                        <MapPin size={16} />
                        Lahore
                      </h4>
                    </div>
                    <div className="px-4 py-3 space-y-2">
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Abdul Rauf</p>
                        <p className="text-xs text-gray-600">King Way Science School</p>
                        <p className="text-xs font-bold text-rmc-600">12/15 (80%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Taha Mugis</p>
                        <p className="text-xs text-gray-600">Ravian Foundation</p>
                        <p className="text-xs font-bold text-gray-600">11/15 (73%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Ahmed Ibrar</p>
                        <p className="text-xs text-gray-600">King Way Science School</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Ayesha Zakria</p>
                        <p className="text-xs text-gray-600">King Way Science School</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <details className="text-sm">
                        <summary className="cursor-pointer text-rmc-600 hover:text-rmc-700 font-semibold">Show 13 more students (60%)</summary>
                        <div className="mt-2 space-y-2">
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Ammara</p>
                            <p className="text-xs text-gray-600">The Apex Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Angel Sunil</p>
                            <p className="text-xs text-gray-600">The Life Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Bareera Sajid</p>
                            <p className="text-xs text-gray-600">The Life Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Eva Asif</p>
                            <p className="text-xs text-gray-600">The Life Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Isra Fatima</p>
                            <p className="text-xs text-gray-600">The Apex Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Maaz Yousaf</p>
                            <p className="text-xs text-gray-600">Hashmi Model School</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Nuzat Ara</p>
                            <p className="text-xs text-gray-600">The Life Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Rayan Abid</p>
                            <p className="text-xs text-gray-600">Al Umar School</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Rehan Siddique</p>
                            <p className="text-xs text-gray-600">The Apex Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Sameer Naveed</p>
                            <p className="text-xs text-gray-600">The Apex Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Sidra Shakkel</p>
                            <p className="text-xs text-gray-600">The Apex Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Ubaid Ullah</p>
                            <p className="text-xs text-gray-600">Hashmi Model School</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Zoha Eman</p>
                            <p className="text-xs text-gray-600">The Life Grammar</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>

                  {/* Abbottabad */}
                  <div className="border-b-2 border-rmc-100">
                    <div className="bg-rmc-50 px-4 py-3 sticky top-0 z-10">
                      <h4 className="font-bold text-rmc-800 flex items-center gap-2">
                        <MapPin size={16} />
                        Abbottabad
                      </h4>
                    </div>
                    <div className="px-4 py-3 space-y-2">
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Saifullah Shakir</p>
                        <p className="text-xs text-gray-600">Mansehra Public School and College</p>
                        <p className="text-xs font-bold text-rmc-600">12/15 (80%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Abdullah Ilyas</p>
                        <p className="text-xs text-gray-600">Mansehra Public School and College</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Sinan Shah</p>
                        <p className="text-xs text-gray-600">The Peace Group of Schools and Colleges, Haripur</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Shahfay</p>
                        <p className="text-xs text-gray-600">MODERNAGE Public School & College</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <details className="text-sm">
                        <summary className="cursor-pointer text-rmc-600 hover:text-rmc-700 font-semibold">Show 6 more students (60%)</summary>
                        <div className="mt-2 space-y-2">
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">M. Asadullah</p>
                            <p className="text-xs text-gray-600">The Peace Group of Schools and Colleges, Haripur</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">M. Hassan Islam</p>
                            <p className="text-xs text-gray-600">MODERNAGE Public School & College</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">M. Shaaf</p>
                            <p className="text-xs text-gray-600">MODERNAGE Public School & Girls College</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Nawal</p>
                            <p className="text-xs text-gray-600">MODERNAGE Public School & Girls College</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">Zujaja Zaib</p>
                            <p className="text-xs text-gray-600">MODERNAGE Public School & College</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-2">
                            <p className="font-semibold text-gray-800">M. Yahya</p>
                            <p className="text-xs text-gray-600">Mansehra Public School and College</p>
                            <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>

                  {/* Karachi - Venue 1: Habib Public School */}
                  <div className="border-b-2 border-rmc-100">
                    <div className="bg-rmc-50 px-4 py-3 sticky top-0 z-10">
                      <h4 className="font-bold text-rmc-800 flex items-center gap-2">
                        <MapPin size={16} />
                        Karachi - Habib Public School
                      </h4>
                    </div>
                    <div className="px-4 py-3 space-y-2">
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Ebad Ullah Azeem</p>
                        <p className="text-xs text-gray-600">Habib Public</p>
                        <p className="text-xs font-bold text-rmc-600">15/15 (100%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Osama Jangda</p>
                        <p className="text-xs text-gray-600">Academia Civitas</p>
                        <p className="text-xs font-bold text-rmc-600">13/15 (87%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Noel Umar</p>
                        <p className="text-xs text-gray-600">Academia Civitas</p>
                        <p className="text-xs font-bold text-rmc-600">12/15 (80%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">S. A. Hadi</p>
                        <p className="text-xs text-gray-600">Habib Public</p>
                        <p className="text-xs font-bold text-gray-600">11/15 (73%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Ehan Sawani</p>
                        <p className="text-xs text-gray-600">Academia Civitas</p>
                        <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Abubakar Adil</p>
                        <p className="text-xs text-gray-600">Habib Public</p>
                        <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Syed Zaviyar Ali</p>
                        <p className="text-xs text-gray-600">Bay View High</p>
                        <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                      </div>
                    </div>
                  </div>

                  {/* Karachi - Venue 2: DAS Jauhar */}
                  <div className="border-b-2 border-rmc-100">
                    <div className="bg-rmc-50 px-4 py-3 sticky top-0 z-10">
                      <h4 className="font-bold text-rmc-800 flex items-center gap-2">
                        <MapPin size={16} />
                        Karachi - DAS Jauhar
                      </h4>
                    </div>
                    <div className="px-4 py-3 space-y-2">
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Eisa</p>
                        <p className="text-xs text-gray-600">DAS Jauhar</p>
                        <p className="text-xs font-bold text-rmc-600">12/15 (80%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">S. Almeer</p>
                        <p className="text-xs text-gray-600">DAS Jauhar</p>
                        <p className="text-xs font-bold text-gray-600">11/15 (73%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Hafiza Zainab</p>
                        <p className="text-xs text-gray-600">DAS Jauhar</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Hamza Shah</p>
                        <p className="text-xs text-gray-600">DAS Jauhar</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Sudais</p>
                        <p className="text-xs text-gray-600">DAS Jauhar</p>
                        <p className="text-xs font-bold text-gray-600">10/15 (67%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Nahayan Khan</p>
                        <p className="text-xs text-gray-600">DAS Jauhar</p>
                        <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Rohan Rashid</p>
                        <p className="text-xs text-gray-600">DAS Jauhar</p>
                        <p className="text-xs font-bold text-gray-600">9/15 (60%)</p>
                      </div>
                    </div>
                  </div>

                  {/* Karachi - Venue 3: DAS T Block */}
                  <div className="border-b-2 border-rmc-100">
                    <div className="bg-rmc-50 px-4 py-3 sticky top-0 z-10">
                      <h4 className="font-bold text-rmc-800 flex items-center gap-2">
                        <MapPin size={16} />
                        Karachi - DAS T Block
                      </h4>
                    </div>
                    <div className="px-4 py-3 space-y-2">
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Basil</p>
                        <p className="text-xs text-gray-600">DAS T Block</p>
                        <p className="text-xs font-bold text-rmc-600">15/15 (100%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Arham Naeem</p>
                        <p className="text-xs text-gray-600">DAS Metroville</p>
                        <p className="text-xs font-bold text-rmc-600">15/15 (100%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Shaheen Mohsanin</p>
                        <p className="text-xs text-gray-600">DAS T Block</p>
                        <p className="text-xs font-bold text-rmc-600">15/15 (100%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">M. Usman Baqai</p>
                        <p className="text-xs text-gray-600">DAS T Block</p>
                        <p className="text-xs font-bold text-rmc-600">15/15 (100%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Adil Awan</p>
                        <p className="text-xs text-gray-600">DAS Metroville</p>
                        <p className="text-xs font-bold text-rmc-600">14/15 (93%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Manahil Kashif</p>
                        <p className="text-xs text-gray-600">DAS Metroville</p>
                        <p className="text-xs font-bold text-rmc-600">14/15 (93%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Samreen Rehman</p>
                        <p className="text-xs text-gray-600">DAS T Block</p>
                        <p className="text-xs font-bold text-rmc-600">14/15 (93%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Sania</p>
                        <p className="text-xs text-gray-600">DAS Metroville</p>
                        <p className="text-xs font-bold text-rmc-600">14/15 (93%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Syed Yahya Ali</p>
                        <p className="text-xs text-gray-600">DAS T Block</p>
                        <p className="text-xs font-bold text-rmc-600">14/15 (93%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-rmc-300 pl-2">
                        <p className="font-semibold text-gray-800">Uroosa Ahmed</p>
                        <p className="text-xs text-gray-600">DAS T Block</p>
                        <p className="text-xs font-bold text-rmc-600">14/15 (93%)</p>
                      </div>
                      <div className="text-sm border-l-2 border-gray-300 pl-2">
                        <p className="font-semibold text-gray-800">Rahim Sheraz</p>
                        <p className="text-xs text-gray-600">DAS T Block</p>
                        <p className="text-xs font-bold text-gray-600">13/15 (87%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Outstanding Students Sidebar */}

          </div>
          {/* End Two Column Layout */}
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery
        title="RMC Events Gallery"
        photos={[
          require('../../images/rmc/rmc-01.jpg'),
          require('../../images/rmc/rmc-02.jpg'),
          require('../../images/rmc/rmc-03.jpg'),
          require('../../images/rmc/rmc-04.jpg'),
          require('../../images/rmc/rmc-05.jpg')
        ]}
      />

      {/* Join RMC */}
      < section id="join" className="py-16 bg-gradient-to-br from-rmc-500 to-rmc-700 text-white" >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join RMC Here
          </h2>
          <p className="text-xl mb-8 text-rmc-50">
            Nominate a mathematics coordinator. Receive monthly materials via email/WhatsApp.
          </p>
          <div className="bg-white p-6 inline-block border-2 border-white">
            <div className="flex items-center gap-2 text-rmc-600">
              <Calendar size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Next RMC Monthly Contest Date</p>
                <p className="text-2xl font-bold">31st January 2026</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/rmc-register"
              className="inline-flex items-center gap-2 bg-white text-rmc-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-rmc-200"
            >
              Register Your School <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section >

      {/* Back to Home */}
      < section className="py-12 bg-white" >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-rmc-600 hover:text-rmc-700 font-semibold text-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </section >
    </div >
  );
};

export default RMC;
