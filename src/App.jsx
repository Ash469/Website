import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';
import Contact from './pages/Contact';

// Project Details
import Techniche from './pages/projects/Techniche/Techniche';
import PIMS from './pages/projects/PIMS/PIMS';
import LotusTraders from './pages/projects/LotusTraders/LotusTraders';
import NSS from './pages/projects/NSS/NSS';
import SchoolMgmt from './pages/projects/SchoolMgmt/SchoolMgmt';
import AppMgmt from './pages/projects/AppMgmt/AppMgmt';
import Udgam from './pages/projects/Udgam/Udgam';
import SmartReturn from './pages/projects/SmartReturn/SmartReturn';
import Groundwater from './pages/projects/Groundwater/Groundwater';
import BullMQ from './pages/projects/BullMQ/BullMQ';
import StepWars from './pages/projects/StepWars/StepWars';

// Experience Details
import LotusTradersExp from './pages/experience/LotusTraders/LotusTradersExp';
import PIMSExp from './pages/experience/PIMS/PIMSExp';
import AppMgmtExp from './pages/experience/AppMgmt/AppMgmtExp';
import TechnicheDevOpsExp from './pages/experience/Techniche/TechnicheDevOpsExp';
import NSSExp from './pages/experience/NSS/NSSExp';
import UdgamExp from './pages/experience/Udgam/UdgamExp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Main pages */}
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Project Details */}
          <Route path="projects/techniche" element={<Techniche />} />
          <Route path="projects/pims" element={<PIMS />} />
          <Route path="projects/lotus-traders" element={<LotusTraders />} />
          <Route path="projects/nss" element={<NSS />} />
          <Route path="projects/school-management" element={<SchoolMgmt />} />
          <Route path="projects/application-management" element={<AppMgmt />} />
          <Route path="projects/udgam" element={<Udgam />} />
          <Route path="projects/smart-return" element={<SmartReturn />} />
          <Route path="projects/groundwater-prediction" element={<Groundwater />} />
          <Route path="projects/bulk-email-runner" element={<BullMQ />} />
          <Route path="projects/step-wars" element={<StepWars />} />

          {/* Experience Details */}
          <Route path="experience/lotus-traders" element={<LotusTradersExp />} />
          <Route path="experience/pims" element={<PIMSExp />} />
          <Route path="experience/application-management" element={<AppMgmtExp />} />
          <Route path="experience/techniche" element={<TechnicheDevOpsExp />} />
          <Route path="experience/nss" element={<NSSExp />} />
          <Route path="experience/udgam" element={<UdgamExp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
