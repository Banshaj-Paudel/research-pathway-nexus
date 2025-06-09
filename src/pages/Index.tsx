
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import visitor pages
import HomePage from "../app/(visitor)/page";
import ScholarshipsPage from "../app/(visitor)/scholarships/page";
import MentorsPage from "../app/(visitor)/mentors/page";

// Import admin pages  
import MentorDashboard from "../app/(admin)/admin/mentor/dashboard/page";
import UniversityDashboard from "../app/(admin)/admin/university/dashboard/page";

// Import layouts
import VisitorLayout from "../app/(visitor)/layout";
import AdminLayout from "../app/(admin)/layout";

const Index = () => {
  return (
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
      
      {/* Admin Routes */}
      <Route path="/admin/mentor/dashboard" element={
        <AdminLayout>
          <MentorDashboard />
        </AdminLayout>
      } />
      <Route path="/admin/university/dashboard" element={
        <AdminLayout>
          <UniversityDashboard />
        </AdminLayout>
      } />
    </Routes>
  );
};

export default Index;
