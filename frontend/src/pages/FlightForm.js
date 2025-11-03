import { useState } from "react";
import api from "../services/api";

export default function FlightForm({ onAdded }) {
  const [data, setData] = useState({
    flight_number: "",
    origin: "",
    destination: "",
    departure_time: "",
    arrival_time: "",
    status: "Scheduled",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("flights/", data)
      .then(() => {
        alert("Flight added successfully!");
        onAdded();
        setData({
          flight_number: "",
          origin: "",
          destination: "",
          departure_time: "",
          arrival_time: "",
          status: "Scheduled",
        });
      })
      .catch(() => alert("Error adding flight."));
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            name="flight_number"
            value={data.flight_number}
            onChange={handleChange}
            placeholder="Flight Number"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            name="origin"
            value={data.origin}
            onChange={handleChange}
            placeholder="Origin"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            name="destination"
            value={data.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="datetime-local"
            name="departure_time"
            value={data.departure_time}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="datetime-local"
            name="arrival_time"
            value={data.arrival_time}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <select
            name="status"
            value={data.status}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Scheduled">Scheduled</option>
            <option value="Delayed">Delayed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="col-md-6 d-grid">
          <button type="submit" className="btn btn-success">Add Flight</button>
        </div>
      </div>
    </form>
  );
}
