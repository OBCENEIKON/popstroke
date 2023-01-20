import moment from "moment/moment";
import React, { useState } from "react";
import Moment from "react-moment";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NewBooking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [timeSlot, setTimeSlot] = useState(location.state.timeSlot);

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/bookings/create";

        if (name.length == 0 || phone.length == 0)
            return;

        const body = {
            name,
            phone,
            time_slot: moment.unix(timeSlot)
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => navigate(`/`))
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Booking for <Moment date={moment.unix(timeSlot)} format='MMMM Do YYYY @ h:mm a' />
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="bookingName">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="bookingName"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setName)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setPhone)}
                            />
                        </div>
                        <button type="submit" className="btn custom-button mt-3">
                            Book this time
                        </button>
                        <Link to="/" className="btn btn-link mt-3">
                            Back to booking list
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewBooking;