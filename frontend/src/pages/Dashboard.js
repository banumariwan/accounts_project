import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get("dashboard/").then(res => setStats(res.data));
  }, []);

  return (
    <div className="row g-4">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="col-md-3">
          <div className="card text-white bg-primary h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-capitalize">{key.replace('_', ' ')}</h5>
              <p className="card-text display-6">{value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
