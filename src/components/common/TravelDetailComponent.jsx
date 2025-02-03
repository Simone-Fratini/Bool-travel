import React from "react";
import { MapPin, Calendar, Users, Mail, Phone } from "lucide-react";

function TravelDetailComponent({ tripData, guidesData }) {
  //console.log(tripData)
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-96 relative">
          <img
            src={tripData.img}
            alt={tripData.tripName}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-4xl font-bold text-white">{tripData.tripName}</h1>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{tripData.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <p>Date: {tripData.startDate}</p>
                  <p>-{tripData.endDate}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-600">{tripData.description}</p>
              </div>
                          
            </div>
            
          </div>
          <div className="text-center mt-5">
            <span>Guide:</span>
            <span></span>
          </div>
          <div>
              {/* partecipants */}
          </div>
        </div>
      </div>
    </div>
  );
}

function FindGuide(tripData, guidesData) {
    const guide = guidesData.filter((guide) => guide.id === tripData.guideId);
    console.log(guide);
    return guide;
}

export default TravelDetailComponent;
