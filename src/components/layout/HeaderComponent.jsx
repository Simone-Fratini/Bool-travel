import React from 'react';
import {Link} from 'react-router-dom';
import { Plane } from 'lucide-react';

export default function HeaderComponent() {
    return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">TravelBool</span>
            </Link>
            <Link to="/formPage" className='hover:text-blue-600 transition-all hover:scale-105'>Add Trip</Link>
            <div className='hover:text-blue-600 transition-all cursor-pointer hover:scale-105'>Log out</div>
          </div>
          
        </div>
      </div>
    </header>
    )
}