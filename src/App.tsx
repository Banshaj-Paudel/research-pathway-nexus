
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import SettingsPage from "./app/(admin)/admin/mentor/settings/page";
import UniversityDashboard from "./app/(admin)/admin/university/dashboard/page";

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
          
          {/* Admin Routes */}
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
              <SettingsPage />
            </AdminLayout>
          } />
          <Route path="/admin/university/dashboard" element={
            <AdminLayout>
              <UniversityDashboard />
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
