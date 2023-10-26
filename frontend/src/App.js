import { Link, Route, Routes } from "react-router-dom";
import Property from "./Property/Property";
import Broker from "./Broker/Broker";
import "./App.css";

function App() {
  const apiKey = process.env.API_URL;
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="Property">Property</Link>
          </li>
          <li className="nav-item">
            <Link to="Broker">Broker</Link>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>
      {console.log("HEHEHE" + apiKey)}
      <Routes>
        <Route path="Property" element={<Property />} />
        <Route path="Broker" element={<Broker />} />
        {/* Add more routes for other components */}
      </Routes>
    </div>
  );
}

export default App;
