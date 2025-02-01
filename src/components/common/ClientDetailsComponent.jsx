import { trips, guides, clients } from "../../models/db_trips"

export default function ClientDetailsComponent({ clientData }) {
    return (
        <div className={`client-${clientData.data.id}`}>
            <p>Name: {clientData.data.firstName}</p>
            <p>Surname: {clientData.data.lastName}</p>
            <p>Phone Number: {clientData.data.lastName}</p>
            <p>Email: {clientData.data.lastName}</p>
        </div>
    )
}