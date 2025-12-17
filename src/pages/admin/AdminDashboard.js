import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, BookOpen, Users, BarChart3, Settings, FileText, Award } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage questions, users, and system settings</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            to="/admin/questions/add"
            className="bg-gradient-to-br from-ilm-500 to-ilm-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <Plus size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Add Questions</h3>
            <p className="text-white text-opacity-90">Create new practice questions</p>
          </Link>

          <Link
            to="/admin/questions"
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-ilm-100 rounded-xl flex items-center justify-center">
                <BookOpen className="text-ilm-600" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Manage Questions</h3>
            <p className="text-gray-600">View and edit existing questions</p>
          </Link>

          <Link
            to="/admin/users"
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-vss-100 rounded-xl flex items-center justify-center">
                <Users className="text-vss-600" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Manage Users</h3>
            <p className="text-gray-600">View students, teachers, and schools</p>
          </Link>

          <Link
            to="/admin/analytics"
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pmc-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-pmc-600" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600">View system statistics and reports</p>
          </Link>

          <Link
            to="/admin/practice-sets"
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-rmc-100 rounded-xl flex items-center justify-center">
                <FileText className="text-rmc-600" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Practice Sets</h3>
            <p className="text-gray-600">Create and manage practice sets</p>
          </Link>

          <Link
            to="/admin/certificates"
            className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <Award size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Certificates</h3>
            <p className="text-white text-opacity-90">Manage VSS certificates</p>
          </Link>

          <Link
            to="/admin/settings"
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <Settings className="text-gray-600" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Settings</h3>
            <p className="text-gray-600">Configure system settings</p>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-ilm-600 mb-2">0</div>
              <div className="text-gray-600">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vss-600 mb-2">0</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pmc-600 mb-2">0</div>
              <div className="text-gray-600">Practice Sets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rmc-600 mb-2">0</div>
              <div className="text-gray-600">Total Attempts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
