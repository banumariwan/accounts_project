import { useState, useEffect } from "react";
import api from "../services/api";

export default function BookingForm({ onAdded }) {
  const [data, setData] = useState({
    flight: "",
    passenger: "",
    seat_number: "",
    status: "Confirmed"
  });

  const [flights, setFlights] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    api.get("flights/").then((res) => setFlights(res.data));
    api.get("passengers/").then((res) => setPassengers(res.data));
  }, []);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("bookings/", data)
      .then(() => {
        alert("Booking added successfully!");
        onAdded();
        setData({ flight: "", passenger: "", seat_number: "", status: "Confirmed" });
      })
      .catch(() => alert("Error adding booking."));
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
      <div className="row g-3 align-items-center">
        <div className="col-md-3">
          <select name="flight" value={data.flight} onChange={handleChange} className="form-select">
            <option value="">Select Flight</option>
            {flights.map((f) => (
              <option key={f.id} value={f.id}>{f.flight_number}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select name="passenger" value={data.passenger} onChange={handleChange} className="form-select">
            <option value="">Select Passenger</option>
            {passengers.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <input
            name="seat_number"
            value={data.seat_number}
            onChange={handleChange}
            placeholder="Seat Number"
            className="form-control"
          />
        </div>

        <div className="col-md-2">
          <select name="status" value={data.status} onChange={handleChange} className="form-select">
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="col-md-2 d-grid">
          <button type="submit" className="btn btn-success">Add Booking</button>
        </div>
      </div>
    </form>
  );
}
