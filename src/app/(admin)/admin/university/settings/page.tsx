'use client';

import { useState } from 'react';
import { Settings, User, Lock, Bell, Mail, CreditCard, Database, Users, Award, FileText, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    applicationUpdates: true,
    scholarshipUpdates: true,
    systemAlerts: true,
  });

  const [profile, setProfile] = useState({
    universityName: 'Tech University',
    email: 'admin@techuniv.edu',
    phone: '+1 (555) 123-4567',
    address: '123 University Ave, Tech City',
    website: 'www.techuniv.edu',
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordExpiry: 90,
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleProfileChange = (field: keyof typeof profile, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSecurityChange = (field: keyof typeof security, value: any) => {
    setSecurity(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">University Settings</h2>
        <p className="text-muted-foreground">
          Manage your university's account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>University Profile</CardTitle>
              <CardDescription>
                Update your university's public profile and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="universityName">University Name</Label>
                  <Input
                    id="universityName"
                    value={profile.universityName}
                    onChange={(e) => handleProfileChange('universityName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={profile.website}
                    onChange={(e) => handleProfileChange('website', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={profile.address}
                  onChange={(e) => handleProfileChange('address', e.target.value)}
                />
              </div>

              <div className="pt-2">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={() => handleNotificationChange('email')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="application-updates">Application Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about application status changes
                    </p>
                  </div>
                  <Switch
                    id="application-updates"
                    checked={notifications.applicationUpdates}
                    onCheckedChange={() => handleNotificationChange('applicationUpdates')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="scholarship-updates">Scholarship Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about scholarship applications and deadlines
                    </p>
                  </div>
                  <Switch
                    id="scholarship-updates"
                    checked={notifications.scholarshipUpdates}
                    onCheckedChange={() => handleNotificationChange('scholarshipUpdates')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="system-alerts">System Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Important system notifications and maintenance alerts
                    </p>
                  </div>
                  <Switch
                    id="system-alerts"
                    checked={notifications.systemAlerts}
                    onCheckedChange={() => handleNotificationChange('systemAlerts')}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and login preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={security.twoFactorAuth}
                    onCheckedChange={(checked) => handleSecurityChange('twoFactorAuth', checked)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <div className="flex items-center space-x-4">
                    <Select
                      value={security.sessionTimeout.toString()}
                      onValueChange={(value) => handleSecurityChange('sessionTimeout', parseInt(value))}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select timeout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="0">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-expiry">Password Expiry</Label>
                  <div className="flex items-center space-x-4">
                    <Select
                      value={security.passwordExpiry.toString()}
                      onValueChange={(value) => handleSecurityChange('passwordExpiry', parseInt(value))}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select expiry period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="0">Never expire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button>Update Security Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>
                Manage your subscription and payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Current Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      Enterprise Plan - $99/month
                    </p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Payment Method</h4>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-6 w-6" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Billing History</h4>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-4 p-4 text-sm font-medium border-b">
                      <div>Date</div>
                      <div>Description</div>
                      <div>Amount</div>
                      <div>Status</div>
                    </div>
                    <div className="grid grid-cols-4 p-4 text-sm">
                      <div>Mar 1, 2024</div>
                      <div>Monthly Subscription</div>
                      <div>$99.00</div>
                      <div className="text-green-600">Paid</div>
                    </div>
                    <div className="grid grid-cols-4 p-4 text-sm bg-muted/50">
                      <div>Feb 1, 2024</div>
                      <div>Monthly Subscription</div>
                      <div>$99.00</div>
                      <div className="text-green-600">Paid</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button>Update Billing</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
