
'use client'
import React from 'react';
import { Calendar, Bell, Home, Search, Users, Settings, HelpCircle, Plus, 
  TrendingUp, DollarSign, Clock, CheckCircle, AlertTriangle, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const VenueDashboard = () => {
  // Sample data for revenue chart
  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 },
  ];

  // Quick stats data
  const quickStats = [
    {
      title: "Today's Events",
      value: "3",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Pending Inquiries",
      value: "12",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Monthly Revenue",
      value: "$67,890",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Booking Rate",
      value: "78%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      title: "Johnson Wedding",
      type: "Wedding",
      date: "Today, 2:00 PM",
      guests: 150,
      status: "Ready",
      revenue: "$12,000",
      statusColor: "bg-green-500"
    },
    {
      title: "Tech Conference",
      type: "Corporate",
      date: "Tomorrow, 9:00 AM",
      guests: 300,
      status: "Setup Needed",
      revenue: "$25,000",
      statusColor: "bg-yellow-500"
    },
    {
      title: "Charity Gala",
      type: "Social",
      date: "Jul 25, 6:00 PM",
      guests: 200,
      status: "Pending",
      revenue: "$18,000",
      statusColor: "bg-blue-500"
    }
  ];

  // Alerts and notifications
  const alerts = [
    {
      type: "Urgent",
      message: "Catering staff shortage for tomorrow's conference",
      time: "1 hour ago"
    },
    {
      type: "Important",
      message: "New booking inquiry for August wedding",
      time: "2 hours ago"
    },
    {
      type: "Update",
      message: "Johnson wedding final payment received",
      time: "3 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold text-blue-600">VenueIn</span>
            <nav className="flex space-x-6">
              <button className="text-blue-600 font-medium">Dashboard</button>
              <button className="text-gray-500">Calendar</button>
              <button className="text-gray-500">Events</button>
              <button className="text-gray-500">Team</button>
              <button className="text-gray-500">Reports</button>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Venue Dashboard</h1>
            <p className="text-gray-500">Welcome back! Here's what's happening at your venue</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            <span>New Booking</span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon size={24} className={stat.color} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Revenue Chart */}
          <Card className="col-span-8">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Alerts & Notifications */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <AlertTriangle size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">{alert.type}</p>
                      <p className="text-sm text-gray-600">{alert.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="col-span-12">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Today's Events</CardTitle>
                <button className="text-sm text-blue-600">View Calendar</button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500">
                      <th className="pb-4 font-medium">Event Details</th>
                      <th className="pb-4 font-medium">Type</th>
                      <th className="pb-4 font-medium">Date & Time</th>
                      <th className="pb-4 font-medium">Guests</th>
                      <th className="pb-4 font-medium">Status</th>
                      <th className="pb-4 font-medium">Revenue</th>
                      <th className="pb-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingEvents.map((event, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Calendar size={20} className="text-gray-500" />
                            </div>
                            <span className="font-medium">{event.title}</span>
                          </div>
                        </td>
                        <td className="py-4 text-gray-500">{event.type}</td>
                        <td className="py-4 text-gray-500">{event.date}</td>
                        <td className="py-4 text-gray-500">{event.guests}</td>
                        <td className="py-4">
                          <span className="flex items-center space-x-2">
                            <span className={`w-2 h-2 rounded-full ${event.statusColor}`}></span>
                            <span className="text-gray-500">{event.status}</span>
                          </span>
                        </td>
                        <td className="py-4 font-medium">{event.revenue}</td>
                        <td className="py-4">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VenueDashboard;