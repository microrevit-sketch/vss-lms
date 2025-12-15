import React from 'react';
import { Calendar } from 'lucide-react';
import { programColors } from '../../data/newsData';

const NewsSection = ({ news, title = "Latest News & Updates" }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}>
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              style={{
                borderRadius: 0,
                borderLeft: `5px solid ${programColors[item.program] || '#gray'}`,
              }}
            >
              <div
                className="inline-block px-3 py-1 text-white text-xs font-bold mb-3"
                style={{
                  backgroundColor: programColors[item.program] || '#gray',
                  borderRadius: 0,
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                {item.type}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-700 mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif", lineHeight: 1.6 }}
              >
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
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
    </section>
  );
};

export default NewsSection;
