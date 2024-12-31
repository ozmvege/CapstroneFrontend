import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Layout } from './components/Layout/Layout';
import { Main } from './components/Main/Main';
import { ReservationPage } from './components/Reservation/Reservation';
import { OrderOnline } from './components/OrderOnline/OrderOnline';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Use useCallback to ensure handleScroll doesn't change between renders
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


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Layout>
      <Navbar showNavbar={showNavbar} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Reservations" element={<ReservationPage />} />
        <Route path="/OrderOnline" element={<OrderOnline />}/>
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;