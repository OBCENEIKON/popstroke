import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "../components/Booking";
import Home from "../components/Home";
import NewBooking from "../components/NewBooking";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/new_booking" element={<NewBooking />} />
        </Routes>
    </Router>
);