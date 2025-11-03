import { useEffect, useState } from "react";
import api from "../services/api";
import PassengerForm from "./PassengerForm";

export default function PassengerList() {
  const [passengers, setPassengers] = useState([]);

  const loadPassengers = () => {
    api.get("passengers/").then((res) => setPassengers(res.data));
  };

  useEffect(() => {
    loadPassengers();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Passengers</h2>
      <PassengerForm onAdded={loadPassengers} />

      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Passport</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.passport_number}</td>
                <td>{p.email}</td>
                <td>{p.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
