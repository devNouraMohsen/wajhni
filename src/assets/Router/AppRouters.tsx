// src/AppRouters.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from '../../components/LandingPage';
import App from '../../App';
import TopBanner from '../../components/TopBanner';
import Footer from '../../components/Footer';

const AppRouters: React.FC = () => {
  return (
    <ChakraProvider>
        <TopBanner />
        <Router>
            <Routes>
            <Route path="" element={<LandingPage />} />
            <Route path="/games" element={<App />} />
            </Routes>
        </Router>
        <Footer />
    </ChakraProvider>
  );
};

export default AppRouters;
