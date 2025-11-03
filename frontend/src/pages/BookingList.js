import { useEffect, useState } from "react";
import api from "../services/api";
import BookingForm from "./BookingForm";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    api.get("bookings/").then((res) => setBookings(res.data));
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Bookings</h2>
      <BookingForm onAdded={loadBookings} />

      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Flight</th>
              <th>Passenger</th>
              <th>Seat</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.flight?.flight_number}</td>
                <td>{b.passenger?.name}</td>
                <td>{b.seat_number}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
