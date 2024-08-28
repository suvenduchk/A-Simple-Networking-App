import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./Menu-Bar/MenuBar.js";
import HomePage from "./Home/HomePage.js";
import AboutUsPage from "./About/AboutUsPage.js";
import SignUp from "./components/SignUp.js";
import LoginPage from "./Login/LoginPage.js";
import Page0001 from "./Pages/Page-0001.js";
import Dashboard from "./Dashboard/Dashboard.js";
import AllProfiles from "./AllProfiles/AllProfiles.js";
import Network from "./Network/Network.js";
import UserProfile from "./UserProfile/UserProfile.js";
import Services from "./Services/Services.js";
import ContactUs from "./ContactUs/ContactUs.js";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/page-0001/*" element={<Page0001 />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<AllProfiles />} />
            <Route path="network" element={<Network />} />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
