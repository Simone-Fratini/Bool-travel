import { useState } from "react";
import { trips } from "../../models/db_trips";
import { useParams } from "react-router-dom";

const initialTravel = {
    tripName: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
};

export default function FormComponent({ overlay }) {
    const { id } = useParams();

    const [newTravel, setNewTravel] = useState(initialTravel);
    const [travelList, setTravelList] = useState([...trips]);


    function handleSubmit(e) {
        e.preventDefault();
        sendData();
        setTravelList([...travelList, newTravel]);
        setNewTravel(initialTravel);
        window.location.reload();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        //console.log(`Updating ${name} to ${value}`);
        setNewTravel({
            ...newTravel,
            [name]: value,
        });
    }

    return (
        <div className={`${overlay} overlayForm  position-absolute t-0 l-0 w-100 h-100 d-flex justify-content-center flex-column align-items-center`}>
            <form onSubmit={handleSubmit} className="w-50 bg-white p-5 rounded-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Travel name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="tripName"
                        placeholder="Travel name"
                        value={initialTravel.tripName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="location"
                        placeholder="Enter your name"
                        value={initialTravel.location}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Starting Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="username"
                        name="startDate"
                        placeholder="Enter your name"
                        value={initialTravel.startDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Ending date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="username"
                        name="endDate"
                        placeholder="Enter your name"
                        value={initialTravel.endDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="description"
                        placeholder="Enter your name"
                        value={initialTravel.description}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}