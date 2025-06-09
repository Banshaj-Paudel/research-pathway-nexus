
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Import visitor pages
import HomePage from "./app/(visitor)/page";
import ScholarshipsPage from "./app/(visitor)/scholarships/page";
import MentorsPage from "./app/(visitor)/mentors/page";
import JobsPage from "./app/(visitor)/jobs/page";
import ResearchPage from "./app/(visitor)/research/page";
import OpportunitiesPage from "./app/(visitor)/opportunities/page";
import AdminLoginPage from "./app/(visitor)/admin/page";

// Import admin pages  
import MentorDashboard from "./app/(admin)/admin/mentor/dashboard/page";
import MenteesPage from "./app/(admin)/admin/mentor/mentees/page";
import ResourcesPage from "./app/(admin)/admin/mentor/resources/page";
import AchievementsPage from "./app/(admin)/admin/mentor/achievements/page";
import MentorSettingsPage from "./app/(admin)/admin/mentor/settings/page";

// Import university pages
import UniversityDashboard from "./app/(admin)/admin/university/dashboard/page";
import UniversityApplicationsPage from "./app/(admin)/admin/university/applications/page";
import UniversityScholarshipsPage from "./app/(admin)/admin/university/scholarships/page";
import UniversityStudentsPage from "./app/(admin)/admin/university/students/page";
import UniversityReportsPage from "./app/(admin)/admin/university/reports/page";
import UniversitySettingsPage from "./app/(admin)/admin/university/settings/page";

// Import layouts
import VisitorLayout from "./app/(visitor)/layout";
import AdminLayout from "./app/(admin)/layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Visitor Routes */}
          <Route path="/" element={
            <VisitorLayout>
              <HomePage />
            </VisitorLayout>
          } />
          <Route path="/scholarships" element={
            <VisitorLayout>
              <ScholarshipsPage />
            </VisitorLayout>
          } />
          <Route path="/mentors" element={
            <VisitorLayout>
              <MentorsPage />
            </VisitorLayout>
          } />
          <Route path="/jobs" element={
            <VisitorLayout>
              <JobsPage />
            </VisitorLayout>
          } />
          <Route path="/research" element={
            <VisitorLayout>
              <ResearchPage />
            </VisitorLayout>
          } />
          <Route path="/opportunities" element={
            <VisitorLayout>
              <OpportunitiesPage />
            </VisitorLayout>
          } />
          <Route path="/admin" element={
            <VisitorLayout>
              <AdminLoginPage />
            </VisitorLayout>
          } />
          
          {/* Admin Mentor Routes */}
          <Route path="/admin/mentor" element={
            <Navigate to="/admin/mentor/dashboard" replace />
          } />
          <Route path="/admin/mentor/dashboard" element={
            <AdminLayout>
              <MentorDashboard />
            </AdminLayout>
          } />
          <Route path="/admin/mentor/mentees" element={
            <AdminLayout>
              <MenteesPage />
            </AdminLayout>
          } />
          <Route path="/admin/mentor/resources" element={
            <AdminLayout>
              <ResourcesPage />
            </AdminLayout>
          } />
          <Route path="/admin/mentor/achievements" element={
            <AdminLayout>
              <AchievementsPage />
            </AdminLayout>
          } />
          <Route path="/admin/mentor/settings" element={
            <AdminLayout>
              <MentorSettingsPage />
            </AdminLayout>
          } />

          {/* Admin University Routes */}
          <Route path="/admin/university">
            <Route index element={
              <Navigate to="dashboard" replace />
            } />
            <Route path="dashboard" element={
              <AdminLayout>
                <UniversityDashboard />
              </AdminLayout>
            } />
            <Route path="applications" element={
              <AdminLayout>
                <UniversityApplicationsPage />
              </AdminLayout>
            } />
            <Route path="scholarships" element={
              <AdminLayout>
                <UniversityScholarshipsPage />
              </AdminLayout>
            } />
            <Route path="students" element={
              <AdminLayout>
                <UniversityStudentsPage />
              </AdminLayout>
            } />
            <Route path="reports" element={
              <AdminLayout>
                <UniversityReportsPage />
              </AdminLayout>
            } />
            <Route path="settings" element={
              <AdminLayout>
                <UniversitySettingsPage />
              </AdminLayout>
            } />
          </Route>
          <Route path="/admin/university/applications" element={
            <AdminLayout>
              <UniversityApplicationsPage />
            </AdminLayout>
          } />
          <Route path="/admin/university/scholarships" element={
            <AdminLayout>
              <UniversityScholarshipsPage />
            </AdminLayout>
          } />
          <Route path="/admin/university/students" element={
            <AdminLayout>
              <UniversityStudentsPage />
            </AdminLayout>
          } />
          <Route path="/admin/university/reports" element={
            <AdminLayout>
              <UniversityReportsPage />
            </AdminLayout>
          } />
          <Route path="/admin/university/settings" element={
            <AdminLayout>
              <UniversitySettingsPage />
            </AdminLayout>
          } />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
