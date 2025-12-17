import { Link } from 'react-router-dom';
import { Award, MapPin, BookOpen, Laptop, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import './Home.css';
import { allNews, programColors } from '../../data/newsData';

const Home = () => {
  // Use the latest 4 news items from all programs
  const newsUpdates = allNews.slice(0, 4).map(item => ({
    ...item,
    color: programColors[item.program]
  }));

  return (
    <div className="home-container">
      {/* Hero Section with News */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-with-news">
            {/* Left: ILM Hero Content */}
            <div className="hero-content">
              <div className="hero-badge">
                <BookOpen size={20} />
                <span>Free Online Math Practice</span>
              </div>
              <h1 className="hero-title">
                <span className="ilm-acronym">ILM</span>
                <span className="ilm-full">I Love Math</span>
              </h1>
              <p className="hero-subtitle">
                Master Grade 5 Mathematics with Interactive Practice
              </p>
              <p className="hero-description">
                Build confidence and excel in mathematics with instant feedback, personalized progress tracking, and comprehensive Grade 5 curriculum coverage.
              </p>
              <div className="hero-actions">
                <a href="https://ilm.sundarstem.edu.pk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <BookOpen size={18} />
                  Start Learning Now
                </a>
                <a href="#programs" className="btn btn-outline">
                  Explore All Programs
                </a>
              </div>
            </div>

            {/* Right: News & Updates */}
            <div className="news-sidebar">
              <h3 className="news-sidebar-title">Latest News & Updates</h3>
              <div className="news-box-sidebar">
                {newsUpdates.map((news) => {
                  const NewsWrapper = ({ children }) => {
                    if (news.link) {
                      const isExternal = news.link.startsWith('http');
                      if (isExternal) {
                        return <a href={news.link} target="_blank" rel="noopener noreferrer" className="news-item-link">{children}</a>;
                      }
                      return <Link to={news.link} className="news-item-link">{children}</Link>;
                    }
                    return <>{children}</>;
                  };

                  return (
                    <NewsWrapper key={news.id}>
                      <div className={`news-item-sidebar ${news.link ? 'clickable' : ''}`} style={{ borderLeftColor: news.color }}>
                        <div className="news-type-badge" style={{ backgroundColor: news.color }}>
                          {news.type}
                        </div>
                        <h4 className="news-title">{news.title}</h4>
                        <p className="news-description">{news.description}</p>
                        <div className="news-date">
                          <Calendar size={14} />
                          <span>{new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                    </NewsWrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section py-16">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Programs</h2>

          <div className="programs-grid">
            {/* RMC */}
            <Link to="/rmc" className="program-card card-rmc">
              <div className="card-icon">
                <MapPin size={32} />
              </div>
              <h3>RMC</h3>
              <p className="program-name">Regional Math Clubs</p>
              <p className="program-desc">Monthly school contests to build habits.</p>
              <span className="card-link">Explore RMC <ArrowRight size={16} /></span>
            </Link>

            {/* PMC */}
            <Link to="/pmc-5" className="program-card card-pmc">
              <div className="card-icon">
                <Award size={32} />
              </div>
              <h3>PMC-5</h3>
              <p className="program-name">Pakistan Math Contest</p>
              <p className="program-desc">National contest for Grade 5 only.</p>
              <span className="card-link">Explore PMC-5 <ArrowRight size={16} /></span>
            </Link>

            {/* VSS */}
            <Link to="/vss" className="program-card card-vss">
              <div className="card-icon">
                <Laptop size={32} />
              </div>
              <h3>VSS</h3>
              <p className="program-name">Virtual STEM School</p>
              <p className="program-desc">Rigorous online program for top performers.</p>
              <span className="card-link">Explore VSS <ArrowRight size={16} /></span>
            </Link>
            {/* ILM (Highlighted) */}
            <Link to="/login" className="program-card card-ilm card-ilm-featured">
              <div className="featured-badge">
                <CheckCircle size={14} />
                <span>Free Access</span>
              </div>
              <div className="card-icon">
                <BookOpen size={32} />
              </div>
              <h3>ILM</h3>
              <p className="program-name">I Love Math</p>
              <p className="program-desc">Interactive online practice designed specifically for Grade 5 students with instant feedback.</p>
              <span className="card-link">Start Practice <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Learning Philosophy</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Focus on <strong>conceptual understanding</strong> and logical reasoning rather than rote memorization.
          </p>
        </div>
      </section>

      {/* Pathways to SundarSTEM School */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Pathways to SundarSTEM School</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            SundarSTEM School offers two routes for talented students to join our rigorous Mathematics, Computer Science, and Robotics programs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Route 1: VSS */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 flex items-center justify-center">
                  <Laptop className="text-red-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Route 1: VSS</h3>
              </div>
              <h4 className="text-lg font-semibold text-red-600 mb-3">Admission through Virtual STEM School</h4>
              <p className="text-gray-700 mb-4">
                Free online program for Grade 6 & 7 students. High-level training in Math, Computer Science, and English.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Three intakes per year:</strong> Spring, Summer, and Fall semesters.
              </p>

              {/* Intake Schedule */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-blue-50 p-3 text-center border border-blue-200">
                  <Calendar className="mx-auto mb-1 text-blue-600" size={16} />
                  <p className="text-sm font-semibold text-gray-900">Spring</p>
                  <p className="text-xs text-gray-600">January</p>
                </div>
                <div className="bg-orange-50 p-3 text-center border border-orange-200">
                  <Calendar className="mx-auto mb-1 text-orange-600" size={16} />
                  <p className="text-sm font-semibold text-gray-900">Summer</p>
                  <p className="text-xs text-gray-600">May</p>
                </div>
                <div className="bg-green-50 p-3 text-center border border-green-200">
                  <Calendar className="mx-auto mb-1 text-green-600" size={16} />
                  <p className="text-sm font-semibold text-gray-900">Fall</p>
                  <p className="text-xs text-gray-600">September</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 border-l-4 border-blue-500 mb-3">
                <p className="text-sm text-gray-700">
                  <strong>Top-performing boys</strong> from VSS are offered admission into <strong>SundarSTEM Middle School</strong> at the end of each semester.
                </p>
              </div>
              <div className="bg-purple-50 p-4 border-l-4 border-purple-500">
                <p className="text-sm text-gray-700">
                  Best pathway for young students to join SundarSTEM School's advanced track for middle school, leading to high school Olympiad training.
                </p>
              </div>
            </div>

            {/* Route 2: PMC-5 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center">
                  <Award className="text-green-700" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Route 2: PMC-5</h3>
              </div>
              <h4 className="text-lg font-semibold text-green-700 mb-3">Admission through Pakistan Math Contest 5</h4>
              <p className="text-gray-700 mb-4">
                Direct admission to <strong>top performers</strong> of PMC-5, Pakistan's prestigious nationwide mathematics competition.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Three PMC-5 contests per year:</strong> at the end of each semester.
              </p>

              {/* Contest Schedule */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-blue-50 p-3 text-center border border-blue-200">
                  <Calendar className="mx-auto mb-1 text-blue-600" size={16} />
                  <p className="text-sm font-semibold text-gray-900">Spring</p>
                  <p className="text-xs text-gray-600">January</p>
                </div>
                <div className="bg-orange-50 p-3 text-center border border-orange-200">
                  <Calendar className="mx-auto mb-1 text-orange-600" size={16} />
                  <p className="text-sm font-semibold text-gray-900">Summer</p>
                  <p className="text-xs text-gray-600">May</p>
                </div>
                <div className="bg-green-50 p-3 text-center border border-green-200">
                  <Calendar className="mx-auto mb-1 text-green-600" size={16} />
                  <p className="text-sm font-semibold text-gray-900">Fall</p>
                  <p className="text-xs text-gray-600">September</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 border-l-4 border-green-600">
                <p className="text-sm text-gray-700">
                  Identifies and celebrates outstanding young mathematical talent across Pakistan, offering direct entry to SundarSTEM School.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
