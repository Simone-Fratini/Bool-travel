import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialTravel = {
    tripName: "",
    location: "",
    startDate: "",
    endDate: "",
    img: "",
    description: ""
};

export default function FormComponent({ overlay }) {
    const { id } = useParams();

    const [newTravel, setNewTravel] = useState(initialTravel);
    const [travelList, setTravelList] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();
        sendData();
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
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="name"
                        placeholder="Enter your name"
                        value={userReview.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Review</label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="text"
                        rows="3"
                        placeholder="Enter your review"
                        value={userReview.text}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input
                        type="number"
                        min="0"
                        max="5"
                        step="1"
                        className="form-control"
                        id="vote"
                        name="vote"
                        placeholder="Enter your vote from 1 to 5"
                        value={userReview.vote}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}