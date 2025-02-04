import { MapPin, Calendar, Users } from "lucide-react";

export default function TravelCardComponent({ tripData, clientsData }) {
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
            <span className="inline-flex items-center ml-4 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              Gia' effettuato
            </span>
            <span className="inline-flex items-center ml-5 mr-5 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
              In corso
            </span>
            <span className="inline-flex items-center ml-3 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
              In programma
            </span>
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
