import React from "react";
import { Link } from "react-router-dom";
import Bookings from "./Bookings";

export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">Popstroke Mini Golf Bookings</h1>
                <p className="lead">
                    Tee off's are every 30 minutes from 8:00 AM to 4:00 PM
                </p>
                <hr className="my-4" />
                <Bookings />
                <Link
                    to="/bookings"
                    className="btn btn-lg custom-button"
                    role="button"
                >
                    View Bookings
                </Link>
            </div>
        </div>
    </div>
);
