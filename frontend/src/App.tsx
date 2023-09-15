import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Profile from "./pages/dashboard/Profile";
import ForgotPassword from "./pages/auth/ForgotPassword";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import { themeSettings } from "./utils/theme";
import { ThemeProvider, createTheme } from '@mui/material';
import HomePage from "./pages/home";

export default function App() {
  const theme = useMemo(() => createTheme(themeSettings("dark")), ["dark"])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={theme}>
          <Router>
            <div>
              <Routes>
                <Route index path="/" element={<HomePage/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/profile' element={<ProtectedRoute outlet={<Profile />} isAuthenticated={false} authenticationPath={""} />} />
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}