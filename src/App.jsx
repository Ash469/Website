import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import ML from './pages/ML';
import About from './pages/About';
import Contact from './pages/Contact';

// Case Studies
import Techniche from './pages/case-studies/Techniche';
import PIMS from './pages/case-studies/PIMS';
import LotusTraders from './pages/case-studies/LotusTraders';
import NSS from './pages/case-studies/NSS';
import SchoolMgmt from './pages/case-studies/SchoolMgmt';
import AppMgmt from './pages/case-studies/AppMgmt';
import Udgam from './pages/case-studies/Udgam';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Main pages */}
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="ml" element={<ML />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Case studies */}
          <Route path="work/techniche" element={<Techniche />} />
          <Route path="work/pims" element={<PIMS />} />
          <Route path="work/lotus-traders" element={<LotusTraders />} />
          <Route path="work/nss" element={<NSS />} />
          <Route path="work/school-management" element={<SchoolMgmt />} />
          <Route path="work/application-management" element={<AppMgmt />} />
          <Route path="work/udgam" element={<Udgam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
