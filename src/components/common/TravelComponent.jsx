import { MapPin, Calendar, Users } from "lucide-react";

export default function TravelComponent({ tripData, clientsData }) {
  return (
    <div
      key={tripData.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={tripData.img}
          alt={tripData.tripName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {tripData.tripName}
        </h2>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{tripData.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <p>Date: {tripData.startDate}</p>
            <p>-{tripData.endDate}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>Participants: <ClientsNumber tripId={tripData.id} clientsData={clientsData} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientsNumber({ tripId, clientsData }) {
  const clients = clientsData.filter((client) => client.tripId === tripId);
  return clients.length;
}
