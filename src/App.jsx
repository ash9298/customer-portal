import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
// import PublicRoute from "./routes/PublicRoute";
// import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Downloads from "./pages/Downloads";
import MyCases from "./pages/MyCases";
import MyLicenses from "./pages/MyLicenses";
import Addons from "./pages/Addons";
import Reports from "./pages/Reports";
import LicensesTab from "./components/reports/licenses";
import UserActivityTab from "./components/reports/userActivity";
import TestResultsTab from "./components/reports/testResults";
import LeapworkUsageTab from "./components/reports/leapworkUsage";
import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="login"
            element={
              // <PublicRoute>
              <Login />
              // </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              // <PublicRoute>
              <Signup />
              // </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              // <PrivateRoute>
              <DashboardLayout />
              // </PrivateRoute>
            }
          >
            <Route
              index
              element={<Navigate to="license-management" replace />}
            />
            <Route path="downloads" element={<Downloads />} />
            <Route path="customercase" element={<MyCases />} />
            <Route path="license-management" element={<MyLicenses />} />
            <Route path="addons" element={<Addons />} />
            <Route path="reports" element={<Reports />}>
              <Route index element={<Navigate to="licenses" replace />} />
              <Route path="licenses" element={<LicensesTab />} />
              <Route path="user-activity" element={<UserActivityTab />} />
              <Route path="test-results" element={<TestResultsTab />} />
              <Route path="leapwork-usage" element={<LeapworkUsageTab />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
