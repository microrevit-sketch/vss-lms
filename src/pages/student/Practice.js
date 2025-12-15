import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, TrendingUp, Award, CheckCircle } from 'lucide-react';

const Practice = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Mock data - will be replaced with API
  const topics = [
    {
      id: 1,
      name: 'Algebra Basics',
      icon: '🔢',
      totalSets: 12,
      completed: 8,
      avgAccuracy: 85,
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      name: 'Fractions & Decimals',
      icon: '🍕',
      totalSets: 10,
      completed: 5,
      avgAccuracy: 78,
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 3,
      name: 'Geometry',
      icon: '📐',
      totalSets: 8,
      completed: 3,
      avgAccuracy: 92,
      color: 'from-green-400 to-green-600',
    },
    {
      id: 4,
      name: 'Word Problems',
      icon: '📖',
      totalSets: 15,
      completed: 10,
      avgAccuracy: 72,
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 5,
      name: 'Number Theory',
      icon: '🎯',
      totalSets: 9,
      completed: 2,
      avgAccuracy: 88,
      color: 'from-red-400 to-red-600',
    },
    {
      id: 6,
      name: 'Patterns & Sequences',
      icon: '🔄',
      totalSets: 11,
      completed: 7,
      avgAccuracy: 81,
      color: 'from-pink-400 to-pink-600',
    },
  ];

  const practiceSets = [
    {
      id: 1,
      name: 'Easy Practice',
      difficulty: 'easy',
      questions: 10,
      completed: true,
      accuracy: 90,
      icon: '⭐',
    },
    {
      id: 2,
      name: 'Mixed Practice',
      difficulty: 'medium',
      questions: 15,
      completed: false,
      accuracy: 0,
      icon: '⭐⭐',
    },
    {
      id: 3,
      name: 'Challenge Set',
      difficulty: 'hard',
      questions: 12,
      completed: false,
      accuracy: 0,
      icon: '⭐⭐⭐',
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (selectedTopic) {
    const topic = topics.find(t => t.id === selectedTopic);
    
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setSelectedTopic(null)}
            className="mb-6 px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-xl font-semibold transition-all flex items-center"
          >
            ← Back to Topics
          </button>

          {/* Topic Header */}
          <div className={`card bg-gradient-to-br ${topic.color} text-white mb-6 fade-in`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl mb-2">{topic.icon}</div>
                <h1 className="text-3xl font-bold mb-2">{topic.name}</h1>
                <p className="text-white/90">Choose a practice set to get started!</p>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-3xl font-bold">{topic.avgAccuracy}%</div>
                <p className="text-sm text-white/90">Avg Accuracy</p>
              </div>
            </div>
          </div>

          {/* Practice Sets */}
          <div className="space-y-4">
            {practiceSets.map((set) => (
              <Link key={set.id} to={`/student/practice/set/${set.id}`}>
                <div className="card-hover">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-3xl`}>
                        {set.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{set.name}</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                          <span className="flex items-center">
                            <BookOpen size={16} className="mr-1" />
                            {set.questions} questions
                          </span>
                          <span className={`px-3 py-1 rounded-full font-semibold border-2 ${getDifficultyColor(set.difficulty)}`}>
                            {set.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {set.completed ? (
                        <div className="flex items-center text-green-600">
                          <CheckCircle size={24} className="mr-2" />
                          <div>
                            <p className="font-bold text-2xl">{set.accuracy}%</p>
                            <p className="text-sm text-gray-600">Completed</p>
                          </div>
                        </div>
                      ) : (
                        <button className="btn-primary">
                          Start Practice
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Practice Topics</h1>
          <p className="text-gray-600 text-lg">Choose a topic to start practicing</p>
        </div>

        {/* Topic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className="card-hover cursor-pointer fade-in"
            >
              {/* Topic Header */}
              <div className={`bg-gradient-to-br ${topic.color} text-white rounded-2xl p-6 mb-4`}>
                <div className="text-5xl mb-3">{topic.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{topic.name}</h3>
                <p className="text-white/90 text-sm">{topic.totalSets} practice sets</p>
              </div>

              {/* Progress */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-semibold">Progress</span>
                  <span className="text-primary-600 font-bold">
                    {topic.completed}/{topic.totalSets} sets
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(topic.completed / topic.totalSets) * 100}%` }}
                  />
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp size={16} className="mr-1 text-primary-500" />
                    <span className="font-semibold">{topic.avgAccuracy}% accuracy</span>
                  </div>
                  {topic.completed === topic.totalSets && (
                    <div className="flex items-center text-sm text-green-600 font-semibold">
                      <CheckCircle size={16} className="mr-1" />
                      Completed
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Practice */}
        <div className="mt-12 card bg-gradient-to-r from-primary-500 to-purple-500 text-white fade-in">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Star size={24} className="mr-2" />
                <h3 className="text-xl font-bold">Recommended for You</h3>
              </div>
              <p className="text-white/90 mb-4">
                Based on your performance, we recommend practicing Word Problems
              </p>
              <button
                onClick={() => setSelectedTopic(4)}
                className="bg-white text-primary-600 px-6 py-3 rounded-2xl font-semibold hover:bg-primary-50 transition-all"
              >
                Start Practicing
              </button>
            </div>
            <Award size={80} className="text-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
