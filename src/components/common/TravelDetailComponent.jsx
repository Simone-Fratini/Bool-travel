import React, { useState, useEffect } from "react";
import { MapPin, Calendar, Mail, Phone, X } from "lucide-react";

function TravelDetailComponent({ tripData, guidesData, clientsData }) {
  const guide = FindGuide(tripData, guidesData);
  const tripClients = clientsData.filter((client) => client.tripId === tripData.id);

  // State to track the selected client
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);


  const [inputValue, setInputValue] = useState("")
  const [searchedClients, setSearchedClients] = useState([])

  const totClients = [...tripClients]

  function searchBar() {
    if (inputValue !== "") {
      const filteredClients = tripClients.filter((client) =>
        client.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
        client.lastName.toLowerCase().includes(inputValue.toLowerCase())
      );
      if (filteredClients !== searchedClients) {
        setSearchedClients(filteredClients);
      }

    } else {
      setSearchedClients(totClients);
    }
  }

  useEffect(searchBar, [inputValue])

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
                  <p>- {tripData.endDate}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-600">{tripData.description}</p>
              </div>
            </div>
          </div>

          {/* Guide */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold mb-2">Travel guide:</h3>
            <span className="text-xl font-bold text-gray-600 cursor-pointer" onClick={() => setSelectedGuide(guide)} >{guide.firstName} {guide.lastName}</span>
          </div>

          {/* Participants */}
          <div className="mt-10 bg-gray-100 p-6 rounded-md">
            <div className="font-bold text-center text-lg">Participants</div>

            <form className="max-w-md mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  value={inputValue}
                  onChange={(e) => { setInputValue(e.target.value) }}
                  required
                />
              </div>
            </form>

            <div className="mt-4">
              {searchedClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-between border bg-gray-300 rounded-md mt-2 py-6 px-8 cursor-pointer hover:bg-gray-400 transition"
                  onClick={() => setSelectedClient(client)}
                >
                  <div>
                    <h4 className="font-semibold">{client.firstName} {client.lastName}</h4>
                  </div>
                  <div>
                    <div>Client: #{client.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Client */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedClient(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-semibold mb-4">Client Details</h3>
            <p><strong>Name:</strong> {selectedClient.firstName} {selectedClient.lastName}</p>
            <p className="mt-2 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-gray-600" /> {selectedClient.email}
            </p>
            <p className="mt-2 flex items-center">
              <Phone className="h-4 w-4 mr-2 text-gray-600" /> {selectedClient.phoneNumber}
            </p>
          </div>
        </div>
      )}

      {selectedGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedGuide(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-semibold mb-4">Guide Details</h3>
            <p><strong>Name:</strong> {selectedGuide.firstName} {selectedGuide.lastName}</p>
            <p className="mt-2 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-gray-600" /> {selectedGuide.email}
            </p>
            <p className="mt-2 flex items-center">
              <Phone className="h-4 w-4 mr-2 text-gray-600" /> {selectedGuide.phoneNumber}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function FindGuide(tripData, guidesData) {
  return guidesData.find((guide) => guide.tripId === tripData.id) || {};
}

export default TravelDetailComponent;
