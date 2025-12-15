import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  BookOpen, 
  Award, 
  Calendar, 
  TrendingUp, 
  Target, 
  Flame,
  Trophy,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();

  // Mock data - will be replaced with API calls
  const stats = {
    questionsThisWeek: 42,
    currentStreak: 7,
    resilience: 85,
    comebackPower: 72,
    hardQuestionPower: 68,
  };

  const continueWhereYouLeftOff = {
    title: 'Algebra Basics - Mixed Practice',
    topic: 'Algebra',
    progress: 65,
    questionsLeft: 7,
    link: '/student/practice/set/1',
  };

  const upcomingItems = [
    { id: 1, type: 'contest', title: 'PMC-5 Monthly Contest', date: '2024-12-05', time: '10:00 AM' },
    { id: 2, type: 'quiz', title: 'Fractions Quiz', date: '2024-12-03', time: '2:00 PM' },
    { id: 3, type: 'assignment', title: 'Word Problems Homework', date: '2024-12-04', time: '5:00 PM' },
  ];

  const motivationalMessage = "You're on fire! 🔥 7 days in a row!";

  const getTypeColor = (type) => {
    switch (type) {
      case 'contest':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'quiz':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'assignment':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'contest':
        return <Trophy size={18} />;
      case 'quiz':
        return <CheckCircle size={18} />;
      case 'assignment':
        return <BookOpen size={18} />;
      default:
        return <Calendar size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-primary-100 text-lg">
            Let's continue your amazing learning journey
          </p>
          
          {/* Program Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {user?.programs?.map((program) => (
              <span
                key={program}
                className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
              >
                {program}
              </span>
            ))}
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Grade {user?.grade}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-4">
        {/* Continue Where You Left Off */}
        <div className="mb-6 fade-in">
          <Link to={continueWhereYouLeftOff.link} className="block">
            <div className="card-hover bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold">Continue Where You Left Off</h3>
                <ArrowRight size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-2">{continueWhereYouLeftOff.title}</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-primary-100">{continueWhereYouLeftOff.questionsLeft} questions left</span>
                <span className="text-primary-100">{continueWhereYouLeftOff.progress}% complete</span>
              </div>
              <div className="progress-bar bg-white/20">
                <div
                  className="progress-fill bg-white"
                  style={{ width: `${continueWhereYouLeftOff.progress}%` }}
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Activity */}
            <div className="card fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <TrendingUp size={24} className="mr-2 text-primary-500" />
                This Week's Activity
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-2xl p-4 text-center">
                  <div className="text-4xl font-bold text-primary-600">{stats.questionsThisWeek}</div>
                  <p className="text-gray-600 text-sm mt-1">Questions Solved</p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-4 text-center">
                  <div className="flex items-center justify-center text-4xl font-bold text-orange-600">
                    <Flame size={36} className="mr-1" />
                    {stats.currentStreak}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Day Streak</p>
                </div>
              </div>
            </div>

            {/* Power Metrics */}
            <div className="card fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Target size={24} className="mr-2 text-primary-500" />
                Your Super Powers 🦸
              </h3>
              <div className="space-y-4">
                {/* Resilience */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">💪 Resilience</span>
                    <span className="text-primary-600 font-bold">{stats.resilience}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${stats.resilience}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">How well you bounce back from mistakes</p>
                </div>

                {/* Comeback Power */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">🚀 Comeback Power</span>
                    <span className="text-primary-600 font-bold">{stats.comebackPower}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${stats.comebackPower}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Your improvement after a tough patch</p>
                </div>

                {/* Hard Question Power */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">🧠 Hard Question Power</span>
                    <span className="text-primary-600 font-bold">{stats.hardQuestionPower}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${stats.hardQuestionPower}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Success rate on challenging problems</p>
                </div>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-6 text-white shadow-lg fade-in">
              <p className="text-2xl font-bold text-center">{motivationalMessage}</p>
            </div>
          </div>

          {/* Right Column - Upcoming Items */}
          <div className="space-y-6">
            <div className="card fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Calendar size={24} className="mr-2 text-primary-500" />
                Coming Up
              </h3>
              <div className="space-y-3">
                {upcomingItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border-2 transition-all hover:shadow-md ${getTypeColor(item.type)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(item.type)}
                        <span className="text-xs font-bold uppercase">{item.type}</span>
                      </div>
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <div className="flex items-center text-sm">
                      <Clock size={14} className="mr-1" />
                      <span>{item.date} • {item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link to="/student/practice" className="block">
                  <button className="w-full btn-primary text-left flex items-center justify-between">
                    <span>Start Practicing</span>
                    <BookOpen size={20} />
                  </button>
                </Link>
                <Link to="/student/contests" className="block">
                  <button className="w-full btn-secondary text-left flex items-center justify-between">
                    <span>View Contests</span>
                    <Trophy size={20} />
                  </button>
                </Link>
                <Link to="/student/leaderboards" className="block">
                  <button className="w-full btn-secondary text-left flex items-center justify-between">
                    <span>Leaderboards</span>
                    <Award size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
