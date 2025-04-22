import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        <div className={`fixed lg:static inset-y-0 left-0 z-30 transform lg:transform-none transition duration-300 lg:flex ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto p-6">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
