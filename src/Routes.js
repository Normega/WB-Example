import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import { AvatarCreationPage } from './pages/AvatarCreation';
import CheckIn from './pages/CheckIn';
import UserDashboard from './pages/UserDashboard';
import Hero from './components/Hero';

const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/checkin' element={<CheckIn />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/dashboard' element={<UserDashboard />} />
        <Route path='/avatar' element={<AvatarCreationPage />} />
    </Routes>
);

export default AppRoutes;
