import moment from "moment";
import React from "react";
import Moment from "react-moment";
import useBookings from "../hooks/useBookings";
import BookingRow from "./BookingRow";

const BookingList = () => {
    const date = moment();
    const timeSlots = getAllTimeSlots();
    const { bookings, setBookings } = useBookings();

    function getDateTimeForSlot(date, hour, minute) {
        return moment(date).set("hour", hour).set("minute", minute).set("second", 0).format();
    }

    function getAllTimeSlots() {
        const items = [];
        for (let i = 8; i <= 15; i++) {
            items.push(moment(date).set("hour", i).set("minute", 0).set("second", 0).unix());
            items.push(moment(date).set("hour", i).set("minute", 30).set("second", 0).unix());
        }
        return items;
    }

    return (
        <table className="table table-striped caption-top">
            <caption>Time slots for <Moment date={date} format='MMMM Do YYYY' /></caption>
            <thead>
                <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {timeSlots.map((t) => (
                    <BookingRow key={t} timeSlot={t} bookings={bookings} />
                ))}
            </tbody>
        </table>
    )
};

export default BookingList;