import { useCallback, useState, useEffect, useLocalStorage } from "react";

export default function Home(props) {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastSeenHotel, setLastSeenHotel] = useLocalStorage('last-seen-hotel', null);

    const getBestHotel = useCallback(() => {
        if (!hotels.length) {
            return null;
        } else {
            return hotels.sort((a, b) =>
                a.rating > b.rating ? -1 : 1
            )[0];
        }
    }, [hotels]);

    const openHotel = (hotel) => {
        setLastSeenHotel(hotel);
    }

    const removeLastSeenHotel = () => {
        setLastSeenHotel(null);
    }

    useEffect(() => {
        setTimeout(() => {
            setHotels(hotelsDB);
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            <h2>Hotels</h2>
            {lastSeenHotel ? <LastSeenHotel {...lastSeenHotel} onRemove={removeLastSeenHotel} /> : null}
            {getBestHotel() ? <BestHotel getBestHotel={getBestHotel} /> : null}
            <Hotels onOpen={openHotel} hotels={hotels} />
        </>
    )
}