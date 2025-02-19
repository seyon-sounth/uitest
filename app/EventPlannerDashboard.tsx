'use client'

import React, { useState } from 'react';
import { Calendar, Users, DollarSign, Clock, Mail, Phone, 
  MessageSquare, Image, FileText, Palette, MapPin, Book,
  Package, Coffee, Music, Camera, ChevronRight, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EventPlannerDashboard = () => {
  const [activeView, setActiveView] = useState('overview');

  const events = [
    {
      client: "Emma & James Wedding",
      date: "June 12, 2024",
      venue: "Grand Plaza Hotel",
      budget: "$45,000",
      type: "Wedding",
      status: "Planning Phase",
      progress: 35
    },
    {
      client: "Tech Corp Conference",
      date: "July 15, 2024",
      venue: "Innovation Center",
      budget: "$75,000",
      type: "Corporate",
      status: "Vendor Selection",
      progress: 60
    }
  ];

  const clientRequirements = {
    style: "Modern Elegant",
    colorScheme: "Dusty Blue & Gold",
    guestCount: 200,
    specialRequests: [
      "Vegan menu options",
      "Live band preferred",
      "Outdoor ceremony space"
    ]
  };

  const vendorTimeline = [
    {
      time: "10:00 AM",
      vendor: "Catering Tasting",
      company: "Gourmet Delights",
      status: "Confirmed"
    },
    {
      time: "2:00 PM",
      vendor: "Florist Meeting",
      company: "Bloom & Wild",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Emma & James Wedding</h1>
              <div className="flex items-center space-x-4 mt-2 text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  June 12, 2024
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  200 Guests
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Grand Plaza Hotel
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                <Phone className="w-4 h-4 mr-2" />
                Contact Client
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            {['Overview', 'Design', 'Vendors', 'Timeline', 'Budget', 'Documents'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
                  activeView === tab.toLowerCase()
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveView(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-8 space-y-6">
            {/* Client Vision Board */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Client Vision & Style</CardTitle>
                  <button className="text-sm text-blue-600">Edit Preferences</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Palette className="w-5 h-5 text-purple-600" />
                      <h3 className="font-medium">Style Theme</h3>
                    </div>
                    <p className="text-gray-600">{clientRequirements.style}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Image className="w-5 h-5 text-blue-600" />
                      <h3 className="font-medium">Color Scheme</h3>
                    </div>
                    <p className="text-gray-600">{clientRequirements.colorScheme}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Book className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium">Special Requests</h3>
                    </div>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {clientRequirements.specialRequests.map((request, index) => (
                        <li key={index}>• {request}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vendor Management */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Vendor Timeline</CardTitle>
                  <button className="text-sm text-blue-600">Add Vendor</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vendorTimeline.map((meeting, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-medium text-gray-500">
                          {meeting.time}
                        </div>
                        <div>
                          <h4 className="font-medium">{meeting.vendor}</h4>
                          <p className="text-sm text-gray-500">{meeting.company}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        meeting.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {meeting.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Elements */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Design Elements</CardTitle>
                  <button className="text-sm text-blue-600">Add Element</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {['Florals', 'Lighting', 'Table Settings', 'Stage Design'].map((element, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-full flex items-center justify-center">
                        <Image className="w-6 h-6 text-gray-600" />
                      </div>
                      <h4 className="font-medium">{element}</h4>
                      <p className="text-sm text-gray-500 mt-1">2 options selected</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Client Communications */}
            <Card>
              <CardHeader>
                <CardTitle>Client Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Send Update</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Schedule Call</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Budget Tracker */}
            <Card>
              <CardHeader>
                <CardTitle>Budget Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-blue-800">Total Budget</span>
                      <span className="font-bold text-blue-800">$45,000</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="mt-2 text-sm text-blue-700">$29,250 allocated</p>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { category: 'Venue & Catering', amount: '$15,000', percentage: '40%' },
                      { category: 'Decor & Flowers', amount: '$8,000', percentage: '25%' },
                      { category: 'Entertainment', amount: '$6,250', percentage: '15%' }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">{item.category}</span>
                        <div className="text-right">
                          <span className="font-medium">{item.amount}</span>
                          <span className="text-sm text-gray-500 ml-2">({item.percentage})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventPlannerDashboard;