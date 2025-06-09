"use client";

import { useState } from 'react';
import { Search, User, Mail, Phone, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedStudent, setExpandedStudent] = useState<number | null>(null);

  const students = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.j@university.edu',
      phone: '(555) 123-4567',
      studentId: 'S12345678',
      program: 'Computer Science',
      year: 'Senior',
      gpa: 3.8,
      status: 'Active',
      courses: [
        { code: 'CS401', name: 'Advanced Algorithms', grade: 'A' },
        { code: 'CS402', name: 'Machine Learning', grade: 'A-' }
      ]
    },
    // More students...
  ];

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.includes(searchTerm)
  );

  const toggleExpand = (id: number) => {
    setExpandedStudent(expandedStudent === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
          <p className="text-gray-500">Manage student records</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center">
          <User className="h-4 w-4 mr-2" />
          Add Student
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="relative mb-6 w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredStudents.map((student) => (
            <div key={student.id} className="border rounded-lg overflow-hidden">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                onClick={() => toggleExpand(student.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{student.name}</h3>
                    <p className="text-sm text-gray-500">{student.studentId}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="font-medium">{student.program}</div>
                    <div className="text-xs text-gray-500">{student.year}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">GPA: {student.gpa}</div>
                    <div className="text-xs text-gray-500">{student.status}</div>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(student.id);
                    }}
                  >
                    {expandedStudent === student.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              {expandedStudent === student.id && (
                <div className="border-t p-4 bg-gray-50">
                  <h4 className="font-medium mb-2">Current Courses</h4>
                  <div className="space-y-2">
                    {student.courses.map((course, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span>{course.code}: {course.name}</span>
                        <span className="font-medium">{course.grade}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t flex space-x-3">
                    <a href={`mailto:${student.email}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                      <Mail className="h-4 w-4 mr-1" /> Email
                    </a>
                    <a href={`tel:${student.phone}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                      <Phone className="h-4 w-4 mr-1" /> Call
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
