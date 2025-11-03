import { useEffect, useState } from "react";
import api from "../services/api";
import FlightForm from "./FlightForm";

export default function FlightList() {
  const [flights, setFlights] = useState([]);

  const loadFlights = () => {
    api.get("flights/").then((res) => setFlights(res.data));
  };

  useEffect(() => {
    loadFlights();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Flights</h2>
      <FlightForm onAdded={loadFlights} />

      <table className="table table-striped table-hover table-bordered shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.flight_number}</td>
              <td>{f.origin}</td>
              <td>{f.destination}</td>
              <td>{new Date(f.departure_time).toLocaleString()}</td>
              <td>{new Date(f.arrival_time).toLocaleString()}</td>
              <td>{f.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
