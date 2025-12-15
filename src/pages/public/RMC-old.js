import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MapPin, BookOpen, Target, ArrowRight } from 'lucide-react';
import './RMC.css';

const RMC = () => {
  return (
    <div className="rmc-container">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-rmc-50 to-rmc-100 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="inline-block bg-rmc-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Regional Math Clubs
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-rmc-800 mb-6">
            RMC
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            Monthly Mathematics Contest Program for Schools
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Schools become RMC members and let the top 5 students from grade 5 participate in the Monthly Maths Contest on last Saturday every month.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
              <MapPin className="text-rmc-500" size={20} />
              <span className="font-semibold">Lahore</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
              <MapPin className="text-rmc-500" size={20} />
              <span className="font-semibold">Abbottabad</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
              <MapPin className="text-rmc-500" size={20} />
              <span className="font-semibold">Karachi</span>
            </div>
          </div>

          <Link to="#join" className="inline-flex items-center gap-2 bg-rmc-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-rmc-600 transition-colors">
            Join RMC <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* What is RMC */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">What is RMC?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            RMC (Regional Math Clubs) is a monthly mathematics contest program for schools. Schools become RMC members and let the top 5 students from grade 5 participate in the Monthly Maths Contest for their Grade on last Saturday every month.
            </p>
            <p>
              Every month, club members solve a carefully designed set of <strong>Beast Academy–style problems</strong>,
              preparing them for higher-level contests like <strong>PMC-5</strong>, <strong>VSS</strong>, and eventually
              international math competitions.
            </p>
            <p className="highlight-text">
              RMC is not just a contest – it is a <strong>learning pipeline</strong> that keeps young students excited
              about mathematics all year round.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE WE'RE STARTING */}
      <section className="rmc-section rmc-cities">
        <div className="container">
          <h2 className="section-title">Where are we starting?</h2>
          <p className="section-intro">
            We are launching RMC initially in <strong>three cities</strong>:
          </p>

          <div className="cities-grid">
            <div className="city-card">
              <div className="city-icon">🏛️</div>
              <h3>Lahore</h3>
              <div className="city-stat">
                <span className="stat-number">20</span>
                <span className="stat-label">Member Schools</span>
              </div>
            </div>

            <div className="city-card">
              <div className="city-icon">🏔️</div>
              <h3>Abbottabad</h3>
              <div className="city-stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Member Schools</span>
              </div>
            </div>

            <div className="city-card">
              <div className="city-icon">🌊</div>
              <h3>Karachi</h3>
              <div className="city-stat">
                <span className="stat-number">18</span>
                <span className="stat-label">Member Schools</span>
              </div>
            </div>
          </div>

          <p className="founding-text">
            These schools form the <strong>founding cohort</strong> of the Regional Math Club network.
          </p>
        </div>
      </section>

      {/* FIRST MONTHLY CONTEST */}
      <section id="contest" className="rmc-section rmc-contest">
        <div className="container">
          <h2 className="section-title">First Monthly Contest – 29 November 2025</h2>
          <p className="section-intro">
            The <strong>1st Monthly RMC Contest</strong> is being held <strong>today, 29 November 2025</strong>,
            across Lahore, Abbottabad, and Karachi.
          </p>

          <div className="contest-details">
            <div className="detail-card">
              <div className="detail-icon">📝</div>
              <h3>Format</h3>
              <ul>
                <li>MCQ-based paper</li>
                <li>Approximately <strong>15 high-quality</strong> multiple-choice questions</li>
              </ul>
            </div>

            <div className="detail-card">
              <div className="detail-icon">⏱️</div>
              <h3>Duration</h3>
              <ul>
                <li>Around <strong>30 minutes</strong></li>
                <li>Optimized for Grade 5 attention span and school schedules</li>
              </ul>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📚</div>
              <h3>Syllabus</h3>
              <ul>
                <li>Focused on a <strong>single chapter from Beast Academy 5</strong></li>
                <li>This month: <strong>3D Solids</strong></li>
                <li>Topics: visualization, nets, faces/edges/vertices, real-life 3D reasoning</li>
              </ul>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Grading & Leaderboard</h3>
              <ul>
                <li>Common marking scheme across all cities</li>
                <li><strong>City-wide and school-wise leaderboard</strong></li>
                <li>Students can <strong>track their rating and rank</strong> over time</li>
              </ul>
            </div>
          </div>

          <div className="contest-note">
            <p>
              Over the coming months, each RMC contest will cover a <strong>new chapter from Beast Academy 5</strong>,
              ensuring deep, structured practice rather than random questions.
            </p>
          </div>
        </div>
      </section>

      {/* WHY JOIN RMC */}
      <section className="rmc-section rmc-benefits">
        <div className="container">
          <h2 className="section-title">Why should schools join RMC?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🧩</div>
              <h3>Regular Problem Solving</h3>
              <p>Give your Grade 5 students <strong>regular exposure to non-routine problems</strong></p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Supportive Environment</h3>
              <p>Build a <strong>competitive-yet-supportive environment</strong> for math learning</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📖</div>
              <h3>Curated Content</h3>
              <p>Get access to <strong>curated monthly content</strong> aligned with Beast Academy 5</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>National Pipeline</h3>
              <p>Become part of a <strong>national pipeline</strong> that feeds into PMC-5, VSS, and SundarSTEM School</p>
            </div>
          </div>

          <div className="pipeline-flow">
            <div className="pipeline-item">
              <div className="pipeline-badge">Grade 5</div>
              <strong>RMC</strong>
              <p>Monthly Practice</p>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-item">
              <div className="pipeline-badge">Grade 5</div>
              <strong>PMC-5</strong>
              <p>Pakistan Math Contest</p>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-item">
              <div className="pipeline-badge">Grades 6-7</div>
              <strong>VSS</strong>
              <p>Virtual STEM School</p>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-item">
              <div className="pipeline-badge">Advanced</div>
              <strong>SundarSTEM</strong>
              <p>STEM Pathways</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US CTA */}
      <section id="join" className="rmc-section rmc-cta">
        <div className="container">
          <h2 className="section-title">Join Us – Be Part of This Exciting Journey</h2>

          <div className="cta-content">
            <p className="cta-text">We are just getting started.</p>
            <p className="cta-highlight">
              With <strong>20 schools in Lahore, 15 in Abbottabad, and 18 in Karachi</strong>,
              RMC is quickly becoming a vibrant community of schools committed to <strong>raising the bar
              of math education in Pakistan</strong>.
            </p>
            <p className="cta-invitation">
              Invite your school to become a Regional Math Club member and let your Grade 5 students
              be part of this exciting journey in problem solving and competition.
            </p>

            <div className="cta-buttons">
              <a href="https://virtual.sundarstem.edu.pk/rmc-join" className="btn btn-cta-primary">
                Apply to Join RMC
              </a>
              <a href="https://virtual.sundarstem.edu.pk/rmc-register" className="btn btn-cta-secondary">
                Register Your School
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="rmc-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Virtual STEM School Logo" className="logo-mark" />
              <div>
                <h4>Virtual STEM School</h4>
                <p>by SundarSTEM School, Lahore</p>
              </div>
            </div>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="https://virtual.sundarstem.edu.pk/vss">VSS</a>
              <a href="https://virtual.sundarstem.edu.pk/pmc-5">PMC-5</a>
              <a href="https://ilm.sundarstem.edu.pk">ILM</a>
            </div>
            <div className="footer-contact">
              <p>info@sundarstem.edu.pk</p>
              <p>+92 329 4044024</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 SundarSTEM School</span>
            <span>Making Pakistan a Math Olympiad champion</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RMC;
