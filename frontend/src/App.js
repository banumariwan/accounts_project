import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FlightList from "./pages/FlightList";
import PassengerList from "./pages/PassengerList";
import BookingList from "./pages/BookingList";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-light">
        {/* Header / Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
          <div className="container">
            <NavLink className="navbar-brand fw-bold" to="/dashboard">
              Airport Management
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `nav-link fw-semibold ${isActive ? "active" : ""}`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `nav-link fw-semibold ${isActive ? "active" : ""}`
                    }
                  >
                    Flights
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/passengers"
                    className={({ isActive }) =>
                      `nav-link fw-semibold ${isActive ? "active" : ""}`
                    }
                  >
                    Passengers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/bookings"
                    className={({ isActive }) =>
                      `nav-link fw-semibold ${isActive ? "active" : ""}`
                    }
                  >
                    Bookings
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <div className="container my-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<FlightList />} />
            <Route path="/passengers" element={<PassengerList />} />
            <Route path="/bookings" element={<BookingList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
