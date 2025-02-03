import { useState } from "react";
import { trips } from "../../models/db_trips";

const initialTravel = {
    tripName: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
};

export default function FormComponent() {
    const [newTravel, setNewTravel] = useState(initialTravel);
    const [travelList, setTravelList] = useState([...trips]);

    function handleSubmit(e) {
        e.preventDefault();
        alert("Travel added successfully!");

        // Add the new travel to the list
        setTravelList([...travelList, newTravel]);

        // Reset form
        setNewTravel(initialTravel);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setNewTravel({
            ...newTravel,
            [name]: value,
        });
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add New Travel</h2>

                {/* Travel Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Travel Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        name="tripName"
                        placeholder="Enter travel name"
                        value={newTravel.tripName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        name="location"
                        placeholder="Enter location"
                        value={newTravel.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Start Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Starting Date</label>
                    <input
                        type="date"
                        className="w-full p-2 border rounded-md"
                        name="startDate"
                        value={newTravel.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* End Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Ending Date</label>
                    <input
                        type="date"
                        className="w-full p-2 border rounded-md"
                        name="endDate"
                        value={newTravel.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        className="w-full p-2 border rounded-md"
                        name="description"
                        placeholder="Enter description"
                        value={newTravel.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Submit
                </button>
            </form>
        </div>
    );
}
