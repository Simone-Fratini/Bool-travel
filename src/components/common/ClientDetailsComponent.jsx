// import { trips, guides, clients } from "../../models/db_trips"

export default function ClientDetailsComponent({ clientData }) {
    console.log(clientData.data);
    console.log(clientData);
    return (
        <div className={`client-${clientData.data.id}`}>
            <p>Name: {clientData.data.firstName}</p>
            <p>Surname: {clientData.data.lastName}</p>
            <p>Phone Number: {clientData.data.lastName}</p>
            <p>Email: {clientData.data.lastName}</p>
        </div>
    )
}