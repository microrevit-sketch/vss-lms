import React from 'react';
import { Calendar } from 'lucide-react';
import { programColors } from '../../data/newsData';
import './NewsSidebar.css';

const NewsSidebar = ({ news, title = "Latest News & Updates" }) => {
  return (
    <div className="news-sidebar">
      <h3 className="news-sidebar-title">{title}</h3>
      <div className="news-box-sidebar">
        {news.map((item) => (
          <div
            key={item.id}
            className="news-item-sidebar"
            style={{ borderLeftColor: programColors[item.program] || '#gray' }}
          >
            <div
              className="news-type-badge"
              style={{ backgroundColor: programColors[item.program] || '#gray' }}
            >
              {item.type}
            </div>
            <h4 className="news-title">{item.title}</h4>
            <p className="news-description">{item.description}</p>
            <div className="news-date">
              <Calendar size={14} />
              <span>
                {new Date(item.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSidebar;
