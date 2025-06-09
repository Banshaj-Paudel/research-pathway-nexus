
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Research Shock</h3>
            <p className="text-blue-200">
              Connecting students with scholarships, research opportunities, jobs, and mentorship.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Opportunities</h4>
            <ul className="space-y-2">
              <li><Link href="/scholarships" className="text-blue-200 hover:text-white">Scholarships</Link></li>
              <li><Link href="/jobs" className="text-blue-200 hover:text-white">Jobs</Link></li>
              <li><Link href="/research" className="text-blue-200 hover:text-white">Research Projects</Link></li>
              <li><Link href="/mentors" className="text-blue-200 hover:text-white">Mentors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Institutions</h4>
            <ul className="space-y-2">
              <li><Link href="/admin/university" className="text-blue-200 hover:text-white">University Portal</Link></li>
              <li><Link href="/admin/job" className="text-blue-200 hover:text-white">Post Jobs</Link></li>
              <li><Link href="/admin/mentor" className="text-blue-200 hover:text-white">Mentor Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-200 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-white">Contact</Link></li>
              <li><Link href="/help" className="text-blue-200 hover:text-white">Help Center</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Research Shock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
