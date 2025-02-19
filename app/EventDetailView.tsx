'use client'

import React, { useState } from 'react';
import { Calendar, MessageSquare, FileText, List, Grid, Clock, Users, 
  Settings, Plus, Send, ChevronRight, AlertCircle, DollarSign, Download,
  Bell, CheckCircle, Phone, Mail, MapPin, Utensils, Music, Camera,
  AlertTriangle, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EventDetailView = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const eventData = {
    title: "Smith & Johnson Wedding Reception",
    eventType: "Wedding",
    date: "June 12, 2024",
    time: "4:00 PM - 11:00 PM",
    guestCount: 200,
    venue: "Grand Ballroom",
    budget: "$45,000",
    amountPaid: "$35,000",
    nextPayment: "April 15, 2024",
    contactName: "Emma Smith",
    contactPhone: "(555) 123-4567",
    contactEmail: "emma.smith@email.com"
  };

  const statusSummary = [
    { label: "Days Until Event", value: "85", trend: "neutral" },
    { label: "Tasks Completed", value: "68%", trend: "up" },
    { label: "Budget Used", value: "78%", trend: "down" },
    { label: "Vendor Confirmations", value: "9/12", trend: "up" }
  ];

  const vendorStatus = [
    { name: "Catering", status: "confirmed", icon: Utensils },
    { name: "Music", status: "pending", icon: Music },
    { name: "Photography", status: "confirmed", icon: Camera }
  ];

  const upcomingDeadlines = [
    {
      task: "Final Menu Selection",
      due: "3 days",
      priority: "high",
      department: "Catering"
    },
    {
      task: "Floor Plan Approval",
      due: "5 days",
      priority: "medium",
      department: "Operations"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="px-6 py-3 flex items-center text-sm text-slate-500 border-b">
            <button className="hover:text-slate-700">Events</button>
            <ChevronRight size={16} className="mx-2" />
            <button className="hover:text-slate-700">Weddings</button>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-slate-900 font-medium">{eventData.title}</span>
          </div>

          {/* Event Header */}
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div>
                <h1 className="text-xl font-semibold flex items-center space-x-3">
                  <span>{eventData.title}</span>
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                    {eventData.eventType}
                  </span>
                </h1>
                <div className="mt-1 flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <Calendar size={16} />
                    <span>{eventData.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Clock size={16} />
                    <span>{eventData.time}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin size={16} />
                    <span>{eventData.venue}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50">
                <Phone size={16} className="mr-2" />
                Contact Client
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-blue-600 text-sm font-medium rounded-lg text-white hover:bg-blue-700">
                <Plus size={16} className="mr-2" />
                Add Task
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 flex space-x-6">
            {[
              'Overview',
              'Timeline',
              'Tasks',
              'Vendors',
              'Floor Plan',
              'Catering',
              'Budget',
              'Documents'
            ].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Status Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {statusSummary.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                  </div>
                  <span className={`
                    px-2.5 py-1 rounded-full text-xs font-medium
                    ${stat.trend === 'up' ? 'bg-green-50 text-green-700' : 
                      stat.trend === 'down' ? 'bg-red-50 text-red-700' : 
                      'bg-slate-50 text-slate-700'}
                  `}>
                    {stat.trend === 'up' ? '↑ 12%' : 
                     stat.trend === 'down' ? '↓ 8%' : 
                     'No change'}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-8 space-y-6">
            {/* Critical Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Critical Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex-shrink-0">
                      <AlertTriangle size={20} className="text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-900">Vendor Confirmation Needed</h4>
                      <p className="mt-1 text-sm text-yellow-700">
                        Music vendor hasn't confirmed availability. Follow-up required within 24 hours.
                      </p>
                    </div>
                    <button className="flex-shrink-0 px-3 py-1.5 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-lg hover:bg-yellow-200">
                      Take Action
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-blue-200 transition-colors">
                      <div className="flex items-center space-x-4">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 border-slate-300 rounded text-blue-600 focus:ring-blue-500"
                        />
                        <div>
                          <p className="font-medium text-slate-900">{deadline.task}</p>
                          <p className="text-sm text-slate-500">
                            {deadline.department} • Due in {deadline.due}
                          </p>
                        </div>
                      </div>
                      <span className={`
                        px-2.5 py-1 rounded-full text-xs font-medium
                        ${deadline.priority === 'high' ? 'bg-red-50 text-red-700' : 
                          'bg-yellow-50 text-yellow-700'}
                      `}>
                        {deadline.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vendor Status */}
            <Card>
              <CardHeader>
                <CardTitle>Vendor Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {vendorStatus.map((vendor, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-slate-100 rounded-lg">
                            <vendor.icon size={20} className="text-slate-600" />
                          </div>
                          <span className="font-medium">{vendor.name}</span>
                        </div>
                        <span className={`
                          px-2.5 py-1 rounded-full text-xs font-medium
                          ${vendor.status === 'confirmed' ? 'bg-green-50 text-green-700' : 
                            'bg-yellow-50 text-yellow-700'}
                        `}>
                          {vendor.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Client Details */}
            <Card>
              <CardHeader>
                <CardTitle>Client Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">ES</span>
                    </div>
                    <div>
                      <p className="font-medium">{eventData.contactName}</p>
                      <p className="text-sm text-slate-500">Primary Contact</p>
                    </div>
                  </div>
                  <div className="pt-4 space-y-3 border-t">
                    <button className="w-full flex items-center space-x-3 p-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg">
                      <Phone size={16} />
                      <span>{eventData.contactPhone}</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg">
                      <Mail size={16} />
                      <span>{eventData.contactEmail}</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-800">Amount Paid</span>
                      <span className="text-green-800 font-semibold">{eventData.amountPaid}</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <p className="mt-2 text-sm text-green-700">78% of total budget</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-sm text-slate-600">Next Payment Due</span>
                    <span className="font-medium">{eventData.nextPayment}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm text-slate-600">Remaining Balance</span>
                    <span className="font-medium">$10,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailView;