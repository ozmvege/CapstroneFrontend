import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Layout } from './components/Layout/Layout';
import { Main } from './components/Main/Main';
import { ReservationPage } from './components/Reservation/Reservation';
import { OrderOnline } from './components/OrderOnline/OrderOnline';
import { ConfirmedBooking } from './components/Reservation/ConfirmedBooking';
import { fetchAPI, submitAPI } from './utilities/api';
function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed-booking");
    } else {
      alert("Failed to submit reservation. Please try again.");
    }
  };

  return (
    <Layout>
      <Navbar showNavbar={showNavbar} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/Reservations"
          element={<ReservationPage handleFormSubmit={submitForm} />}
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
