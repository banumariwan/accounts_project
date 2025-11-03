import { useState } from "react";
import api from "../services/api";

export default function PassengerForm({ onAdded }) {
  const [data, setData] = useState({
    name: "",
    passport_number: "",
    email: "",
    phone_number: ""
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("passengers/", data)
      .then(() => {
        alert("Passenger added successfully!");
        onAdded();
        setData({ name: "", passport_number: "", email: "", phone_number: "" });
      })
      .catch(() => alert("Error adding passenger."));
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
      <div className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="passport_number"
            value={data.passport_number}
            onChange={handleChange}
            placeholder="Passport Number"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="phone_number"
            value={data.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="form-control"
          />
        </div>
        <div className="col-12 d-grid">
          <button type="submit" className="btn btn-primary">Add Passenger</button>
        </div>
      </div>
    </form>
  );
}
