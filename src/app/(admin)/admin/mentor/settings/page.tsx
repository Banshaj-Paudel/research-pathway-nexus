import { useState } from 'react';
import { User, Bell, Shield, Globe, Calendar, CreditCard, HelpCircle, LogOut, Save, Camera, Mail, Phone, MapPin, Edit, Eye, EyeOff } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    newMentee: true,
    sessionReminder: true,
    weeklyDigest: true,
    achievements: true,
    messages: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    showAchievements: true,
    showStats: true
  });

  const [profile, setProfile] = useState({
    firstName: 'Sarah',
    lastName: 'Chen',
    title: 'Senior Software Engineer',
    company: 'Google',
    email: 'sarah.chen@google.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'PhD in Computer Science with 8+ years at Google. Passionate about helping underrepresented students break into tech. Specialized in ML and AI systems.',
    expertise: ['Machine Learning', 'Data Science', 'Python', 'Career Development'],
    languages: ['English', 'Mandarin', 'Spanish'],
    timezone: 'America/Los_Angeles'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'privacy', label: 'Privacy & Security', icon: <Shield className="h-5 w-5" /> },
    { id: 'availability', label: 'Availability', icon: <Calendar className="h-5 w-5" /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'help', label: 'Help & Support', icon: <HelpCircle className="h-5 w-5" /> }
  ];

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handlePrivacyChange = (key: string) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const renderProfileTab = () => (
    <div className="w-full p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {profile.firstName[0]}{profile.lastName[0]}
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-border-light hover:bg-gray-50">
            <Camera className="h-4 w-4 text-text-subtle" />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-dark">Profile Photo</h3>
          <p className="text-text-subtle text-sm">Upload a professional photo</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">First Name</label>
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => setProfile({...profile, firstName: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">Last Name</label>
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => setProfile({...profile, lastName: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">Job Title</label>
          <input
            type="text"
            value={profile.title}
            onChange={(e) => setProfile({...profile, title: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">Company</label>
          <input
            type="text"
            value={profile.company}
            onChange={(e) => setProfile({...profile, company: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">Phone</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">Location</label>
        <input
          type="text"
          value={profile.location}
          onChange={(e) => setProfile({...profile, location: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">Bio</label>
        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({...profile, bio: e.target.value})}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Tell mentees about your background and expertise..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">Timezone</label>
        <select
          value={profile.timezone}
          onChange={(e) => setProfile({...profile, timezone: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="America/Los_Angeles">Pacific Time (PT)</option>
          <option value="America/Denver">Mountain Time (MT)</option>
          <option value="America/Chicago">Central Time (CT)</option>
          <option value="America/New_York">Eastern Time (ET)</option>
          <option value="Europe/London">London (GMT)</option>
          <option value="Europe/Paris">Central European Time</option>
          <option value="Asia/Tokyo">Japan Time</option>
        </select>
      </div>

      <div className="flex justify-end pt-4">
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-text-dark mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email notifications', description: 'Receive email notifications' },
            { key: 'newMentee', label: 'New mentee requests', description: 'When someone requests to be your mentee' },
            { key: 'sessionReminder', label: 'Session reminders', description: 'Reminders for upcoming sessions' },
            { key: 'weeklyDigest', label: 'Weekly digest', description: 'Weekly summary of your mentoring activity' },
            { key: 'achievements', label: 'Achievement notifications', description: 'When you unlock new achievements' },
            { key: 'messages', label: 'Message notifications', description: 'When you receive new messages from mentees' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-text-dark">{item.label}</p>
                <p className="text-sm text-text-subtle">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications[item.key as keyof typeof notifications]}
                  onChange={() => handleNotificationChange(item.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-text-dark mb-4">Push Notifications</h3>
        <div className="space-y-4">
          {[
            { key: 'push', label: 'Push notifications', description: 'Receive notifications on your device' },
            { key: 'sms', label: 'SMS notifications', description: 'Receive text message notifications' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-text-dark">{item.label}</p>
                <p className="text-sm text-text-subtle">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications[item.key as keyof typeof notifications]}
                  onChange={() => handleNotificationChange(item.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-text-dark mb-4">Profile Visibility</h3>
        <div className="space-y-4">
          {[{ key: 'profileVisible', title: 'Profile Visibility', desc: 'Make your profile visible to students' },
            { key: 'showEmail', title: 'Show Email Address', desc: 'Display email on your public profile' },
            { key: 'showPhone', title: 'Show Phone Number', desc: 'Display phone number on your profile' },
            { key: 'allowMessages', title: 'Allow Direct Messages', desc: 'Let students send you direct messages' },
            { key: 'showAchievements', title: 'Show Achievements', desc: 'Display your achievements and badges' },
            { key: 'showStats', title: 'Show Statistics', desc: 'Display mentoring statistics and ratings' }].map(item => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-text-dark">{item.title}</h4>
                  <p className="text-sm text-text-subtle">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy[item.key as keyof typeof privacy]}
                    onChange={() => handlePrivacyChange(item.key)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and security settings</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="lg:grid lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3 border-r border-gray-100">
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 p-8">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'notifications' && renderNotificationsTab()}
            {activeTab === 'privacy' && renderPrivacyTab()}
            {/* Add additional tab renders as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
