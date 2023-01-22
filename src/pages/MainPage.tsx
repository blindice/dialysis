import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import SideBar from "../component/SideBar";
import AddDiagnose from "../features/diagnose/AddDiagnose";
import AddPatient from "../features/patient/AddPatient";
import ViewPatients from "../features/patient/ViewPatients";

function MainPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "12% 1fr",
      }}
    >
      <div>
        <SideBar />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Routes>
          <Route path="/" element={<AddPatient />} />
          <Route path="/adddiagnose" element={<AddDiagnose />} />
          <Route path="/viewpatient" element={<ViewPatients />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
