import moment from "moment/moment";
import React from "react";
import BookingAction from "./BookingAction";

const BookingRow = (props) => {
    let customerName = '';
    let phone = '';
    let timeSlotId = false;

    if (props.bookings) {
        props.bookings.forEach((booking) => {
            if (props.timeSlot == moment(booking.time_slot).unix()) {
                customerName = booking.name
                phone = booking.phone
                timeSlotId = booking.id;
            }
        });
    }


    return (
        <tr>
            <th scope="row">{moment.unix(props.timeSlot).format('h:mm a')}</th>
            <td>{customerName}</td>
            <td>{phone}</td>
            <td><BookingAction timeSlot={props.timeSlot} timeSlotId={timeSlotId} /></td>
        </tr>
    );
};

export default BookingRow;
