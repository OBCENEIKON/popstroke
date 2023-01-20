import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BookingAction = (props) => {
    const navigate = useNavigate();

    function handleClick() {
        let timeSlot = props.timeSlot;
        let timeSlotId = props.timeSlotId

        if (props.timeSlotId) {
            const token = document.querySelector('meta[name="csrf-token"]').content;
            const reqOpts = {
                method: 'DELETE',
                headers: {
                    "X-CSRF-Token": token,
                    "Content-Type": "application/json",
                },
            }
            // Fri, 20 Jan 2023 14:00:00.000000000 UTC +00:00
            console.log(props);
            if (window.confirm("Are you sure you want to delete yourself from this time slot?")) {
                fetch('/api/v1/bookings/destroy/' + timeSlotId, reqOpts)
                    .then((response) => {
                        window.location.reload(false);
                    });
            }
        } else
            navigate("/new_booking", { state: { timeSlot: timeSlot } });

    }

    if (props.timeSlotId) {
        return (
            <i className="bi bi-journal-minus" onClick={handleClick} />
        );
    }

    return (
        <i className="bi bi-journal-plus" onClick={handleClick} />
    );
};

export default BookingAction;