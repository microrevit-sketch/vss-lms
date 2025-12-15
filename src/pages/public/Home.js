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
              <h3>PMC</h3>
              <p className="program-name">Pakistan Math Contest</p>
              <p className="program-desc">National contest for Grades 5-7.</p>
              <span className="card-link">Explore PMC <ArrowRight size={16} /></span>
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

    </div>
  );
};

export default Home;
