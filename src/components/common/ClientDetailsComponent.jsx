// import { trips, guides, clients } from "../../models/db_trips"

export default function ClientDetailsComponent({ clientData }) {

    return (
        <div className={`client-${clientData.id}`}>
            <p>Name: {clientData.firstName}</p>
            <p>Surname: {clientData.lastName}</p>
            <p>Phone Number: {clientData.phoneNumber}</p>
            <p>Email: {clientData.email}</p>
        </div>
    )
}