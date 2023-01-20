import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Booking = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [booking, setBooking] = useState();

    useEffect(() => {
        const url = `/api/v1/show/${params.id}`;
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => setBooking(response))
            .catch(() => navigate("/bookings"));
    }, [params.id]);

    return (
        <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                    {booking.name}
                </h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                    </div>
                    <div className="col-sm-12 col-lg-7">
                        <h5 className="mb-2">Preparation Instructions</h5>
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <button
                            type="button"
                            className="btn btn-danger"
                        >
                            Delete Recipe
                        </button>
                    </div>
                </div>
                <Link to="/bookings" className="btn btn-link">
                    Back to recipes
                </Link>
            </div>
        </div>
    );
};

export default Booking;