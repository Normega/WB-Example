import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home"; //the imported name (e.g., HomePage) could be whatever you want
import ProfilePage from "./pages/Profile";
import ServicesPage from "./pages/Services";
import ServiceDetailPage from "./pages/ServiceDetail";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import SecretPage from "pages/Secret";
import AvatarCreation from "pages/AvatarCreation";
import WellnessDefinition from "pages/WBDefinition";
import ServiceCreatePage from "pages/services/ServiceCreate";
import UserServicesPage from "pages/services/UserServices";
import CheckIn from "pages/CheckIn";
import UserDashboard from "pages/UserDashboard";

const Routess = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    {/* service id is dynamic */}
    <Route path="/services/me" element={<UserServicesPage />} />
    <Route path="/services/new" element={<ServiceCreatePage />} />
    <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/secret" element={<SecretPage />} />
    <Route path="/avatar-creation" element={<AvatarCreation />} />
    <Route path="/definition" element={<WellnessDefinition />} />
    <Route path="/checkin" element={<CheckIn />} />
    <Route path="/dashboard" element={<UserDashboard />} />
  </Routes>
);

export default Routess;
