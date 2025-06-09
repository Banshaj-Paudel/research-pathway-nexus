"use client";

import { useState } from 'react';
import { Trophy, Award, Star, Target, TrendingUp, Calendar, Users, MessageCircle, Clock, Medal, Gift } from 'lucide-react';

const AchievementsPage = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('all');

  const achievements = [
    {
      id: 1,
      title: "Mentor Excellence Award",
      description: "Awarded for outstanding mentorship and consistent 5-star ratings",
      category: "Recognition",
      type: "Award",
      earnedDate: "2024-04-15",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      rarity: "Legendary",
      progress: 100,
      requirements: "Maintain 4.8+ rating with 20+ reviews",
      badge: "🏆"
    },
    {
      id: 2,
      title: "50 Mentoring Hours",
      description: "Completed 50 hours of mentoring sessions",
      category: "Milestone",
      type: "Hours",
      earnedDate: "2024-03-20",
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      rarity: "Epic",
      progress: 100,
      requirements: "Complete 50 mentoring hours",
      badge: "⏰"
    },
    {
      id: 3,
      title: "Community Builder",
      description: "Helped 25+ students achieve their career goals",
      category: "Impact",
      type: "Community",
      earnedDate: "2024-02-10",
      icon: <Users className="h-8 w-8 text-green-500" />,
      rarity: "Epic",
      progress: 100,
      requirements: "Successfully mentor 25 students",
      badge: "👥"
    },
    {
      id: 4,
      title: "Response Champion",
      description: "Maintained 90%+ response rate for 3 months",
      category: "Engagement",
      type: "Communication",
      earnedDate: "2024-01-05",
      icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
      rarity: "Rare",
      progress: 100,
      requirements: "Maintain 90%+ response rate for 3 months",
      badge: "💬"
    },
    {
      id: 5,
      title: "Rising Star",
      description: "Achieved top 10% mentor ranking in first 6 months",
      category: "Recognition",
      type: "Ranking",
      earnedDate: "2023-12-15",
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      rarity: "Epic",
      progress: 100,
      requirements: "Reach top 10% ranking within 6 months",
      badge: "⭐"
    }
  ];

  const inProgressGoals = [
    {
      id: 1,
      title: "100 Mentoring Hours",
      description: "Complete 100 total mentoring hours",
      category: "Milestone",
      currentProgress: 68,
      targetProgress: 100,
      estimatedCompletion: "2024-07-15",
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      badge: "⏱️"
    },
    {
      id: 2,
      title: "Perfect Month",
      description: "Maintain 100% response rate for an entire month",
      category: "Engagement",
      currentProgress: 22,
      targetProgress: 30,
      estimatedCompletion: "2024-06-30",
      icon: <Target className="h-6 w-6 text-green-500" />,
      badge: "🎯"
    },
    {
      id: 3,
      title: "Knowledge Sharer",
      description: "Create and share 10 resources with the community",
      category: "Contribution",
      currentProgress: 6,
      targetProgress: 10,
      estimatedCompletion: "2024-08-01",
      icon: <Gift className="h-6 w-6 text-purple-500" />,
      badge: "📚"
    }
  ];

  const stats = [
    { label: "Total Achievements", value: achievements.length, icon: <Trophy className="h-5 w-5" /> },
    { label: "Mentoring Hours", value: 68, icon: <Clock className="h-5 w-5" /> },
    { label: "Students Helped", value: 25, icon: <Users className="h-5 w-5" /> },
    { label: "Average Rating", value: "4.9", icon: <Star className="h-5 w-5" /> }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'from-yellow-400 to-orange-500';
      case 'Epic': return 'from-purple-400 to-pink-500';
      case 'Rare': return 'from-blue-400 to-indigo-500';
      case 'Common': return 'from-gray-400 to-gray-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const filteredAchievements = achievements.filter(achievement => {
    if (selectedTimeRange === 'all') return true;
    const earnedDate = new Date(achievement.earnedDate);
    const now = new Date();
    
    switch (selectedTimeRange) {
      case 'month':
        return (now.getTime() - earnedDate.getTime()) <= (30 * 24 * 60 * 60 * 1000);
      case 'quarter':
        return (now.getTime() - earnedDate.getTime()) <= (90 * 24 * 60 * 60 * 1000);
      case 'year':
        return (now.getTime() - earnedDate.getTime()) <= (365 * 24 * 60 * 60 * 1000);
      default:
        return true;
    }
  });

  return (
    <div className="w-full p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievements & Progress</h1>
        <p className="text-gray-600">Track your mentoring milestones and accomplishments</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="mb-6">
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Time</option>
          <option value="year">This Year</option>
          <option value="quarter">Last 3 Months</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Earned Achievements */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Earned Achievements</h2>
          <div className="space-y-4">
            {filteredAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${getRarityColor(achievement.rarity)} mr-4`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <span className="text-2xl">{achievement.badge}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          achievement.rarity === 'Legendary' ? 'bg-yellow-100 text-yellow-800' :
                          achievement.rarity === 'Epic' ? 'bg-purple-100 text-purple-800' :
                          achievement.rarity === 'Rare' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {achievement.rarity}
                        </span>
                        <span className="text-xs text-gray-500">{achievement.category}</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(achievement.earnedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Goals */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Goals in Progress</h2>
          <div className="space-y-4">
            {inProgressGoals.map((goal) => (
              <div key={goal.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-100 rounded-full mr-4">
                    {goal.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <span className="text-xl">{goal.badge}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{goal.description}</p>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{goal.currentProgress}/{goal.targetProgress}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(goal.currentProgress / goal.targetProgress) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                        {goal.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        Est. completion: {new Date(goal.estimatedCompletion).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white p-6 rounded-xl shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
            <div className="text-center">
              <Medal className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Milestone</h3>
              <p className="text-gray-600 text-sm mb-4">
                You're {100 - 68} hours away from the "100 Mentoring Hours" achievement!
              </p>
              <div className="w-full bg-white/50 rounded-full h-3 mb-4">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: '68%' }}
                ></div>
              </div>
              <p className="text-blue-600 font-medium">68% Complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900 text-sm">Completed mentoring session with Alex Johnson</p>
                <p className="text-gray-500 text-xs">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900 text-sm">Received 5-star review from Sarah Kim</p>
                <p className="text-gray-500 text-xs">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900 text-sm">Shared new resource: "Technical Interview Guide"</p>
                <p className="text-gray-500 text-xs">3 days ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900 text-sm">🏆 Earned "Response Champion" achievement</p>
                <p className="text-gray-500 text-xs">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
