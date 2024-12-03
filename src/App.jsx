import "react-toastify/dist/ReactToastify.css";
import CancerRisks from "./components/home/home_lower_section/dynamic_parts/CancerRisks";
import GetScreened from "./components/home/home_lower_section/dynamic_parts/GetScreened";
import HealthFacilityFinder from "./components/facilities/Finder";
import Home from "./components/home/Home";
import ReduceRisks from "./components/home/home_lower_section/dynamic_parts/ReduceRisks";
import Symptom from "./components/home/home_lower_section/dynamic_parts/Symptom";
import TestimonialsPage from "./components/testimonies/TestimonialsPage";
import WhyScreening from "./components/home/home_lower_section/dynamic_parts/WhyScreening";
import { Route, Routes } from "react-router-dom";
import { LocationProvider } from "./components/context/LocationContext";

// Placeholder components for protected routes
// import AdminRoute from "./components/auth/AdminRoute";
// import AuthRoute from "./components/auth/AuthRoute";

// Admin and Auth protected content (to be defined later)
// import AdminPage from "./components/admin/AdminPage";
// import ProfilePage from "./components/user/ProfilePage";



export default function App() {
  return (
    <LocationProvider>
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
      <Route path="/TestimonialsPage" element={<TestimonialsPage />} />
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
</LocationProvider>
  );
}
