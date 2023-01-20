import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { get, loadingState } = useGetRequest("/api/v1/bookings/index");

    useEffect(() => {
        const fetchBookings = async () => {
            const bookings = await get();
            setBookings(bookings);
        };
        fetchBookings();
    }, [get]);

    return { bookings, setBookings, loadingState };
};

export default useBookings;
