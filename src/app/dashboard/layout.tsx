import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-svh overflow-hidden bg-gray-50 flex flex-row">
      <div className="w-1/4 h-full bg-yellow-50">
        <Nav />
      </div>
      <div className="w-3/4 h-full bg-blue-50">
        {children}
      </div>
    </div>
  );
}

const links = [
  {
    key: 'home',
    title: 'Home',
    path: '/'
  },
  {
    key: 'dashboard',
    title: 'My Nodes',
    path: '/dashboard'
  },
  {
    key: 'addNode',
    title: 'Add Node',
    path: '/dashboard/add'
  },
]

const Nav = () => {
  return (
    <div className="p-8 flex flex-col gap-4">
      {
        links.map(link => (
          <Link href={link.path}>
            <Button>
              {link.title}
            </Button>
          </Link>
        ))
      }
    </div>
  )
}

export default DashboardLayout
