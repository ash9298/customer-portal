import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Downloads from "./pages/Downloads";
import MyCases from "./pages/MyCases";
import MyLicenses from "./pages/MyLicenses";
import Addons from "./pages/Addons";
import Reports from "./pages/Reports";
import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="license-management" replace />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="customercase" element={<MyCases />} />
          <Route path="license-management" element={<MyLicenses />} />
          <Route path="addons" element={<Addons />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
