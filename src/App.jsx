import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

// Placeholder components for protected routes
// import AdminRoute from "./components/auth/AdminRoute";
// import AuthRoute from "./components/auth/AuthRoute";

// Admin and Auth protected content (to be defined later)
// import AdminPage from "./components/admin/AdminPage";
// import ProfilePage from "./components/user/ProfilePage";
import GetScreened from "./components/home/home_lower_section/dynamic_parts/GetScreened";
import CancerRisks from "./components/home/home_lower_section/dynamic_parts/CancerRisks";
import ReduceRisks from "./components/home/home_lower_section/dynamic_parts/ReduceRisks";

import HealthFacilityFinder from "./components/facilities/Finder";
import WhyScreening from "./components/home/home_lower_section/dynamic_parts/WhyScreening";
import Symptom from "./components/home/home_lower_section/dynamic_parts/Symptom";


export default function App() {
  return (
    <Routes>
      {/* Default Route for Home Page */}
      <Route path="/" element={<Home />}>
        {/* <Route path="/" element={<HealthFacilityFinder />}> */}
        <Route index element={<GetScreened />} />

        <Route path="get-screened" element={<GetScreened />} />
        <Route path="cancer-risks" element={<CancerRisks />} />
        <Route path="reduce-risks" element={<ReduceRisks />} />
        <Route path="whyScreening" element={<WhyScreening />} />
        <Route path="symptoms" element={<Symptom />} />
      </Route>
      <Route path="/myHealth" element={<myHealthStatus />} />
      <Route path="/nearHospital" element={<HealthFacilityFinder />} />
      {/* Auth Protected Routes */}
      {/* <Route element={<AuthRoute />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route> */}

      {/* Admin Protected Routes */}
      {/* <Route element={<AdminRoute />}>
          <Route path="admin" element={<AdminPage />} />
        </Route> */}
    </Routes>
  );
}
