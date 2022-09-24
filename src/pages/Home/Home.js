import { useState, useCallback, useEffect } from "react";
import Hotels from "../../components/Hotels/Hotels";
import BestHotel from '../../components/BestHotel/BestHotel';
import LastSeenHotel from '../../components/Hotels/LastSeenHotel/LastSeenHotel';
import useLocalStorage from '../../components/hooks/useLocalStorage';
import useWebsiteTitle from '../../components/hooks/useWebSiteTitle';
// import ReducerContext from "../../components/context/reducerContext";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";

const hotelsDB = [
    {
        id: 1,
        name: "Robert's Apartments Piwna 12",
        city: "Old Town, Warsaw",
        rating: 9.2,
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        image: ""
    },
    {
        id: 2,
        name: "Robert's Apartments Old Town",
        city: "Old Town, Warsaw",
        rating: 9.8,
        description: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        image: ""
    },
    {
        id: 3,
        name: "Robert's Apartments National Stadium",
        city: "Praga, Warsaw",
        rating: 9.4,
        description: "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        image: ""
    }
]

export default function Home(props) {
    const [lastSeenHotel, setLastSeenHotel] = useLocalStorage('last-seen-hotel', null);
    // const reducer = useContext(ReducerContext);
    const [loading, setLoading] = useState(true);
    const [hotels, setHotels] = useState([]);

    const getBestHotel = useCallback(() => {
        if (!hotels.length) {
            return null;
        } else {
            return hotels.sort((a, b) =>
                a.rating > b.rating ? -1 : 1
            )[0];
        }
    }, []);

    const openHotel = (hotel) => {
        setLastSeenHotel(hotel);
    }

    const removeLastSeenHotel = () => {
        setLastSeenHotel(null);
    }

    useWebsiteTitle('Main page: Hotels');

    useEffect(() => {
        // reducer.dispatch({ type: 'set-loading', loading: true });

        setTimeout(() => {
            // reducer.dispatch({ type: 'set-hotels', hotels: hotelsDB });
            // reducer.dispatch({ type: 'set-loading', loading: false })
            setHotels(hotelsDB);
            setLoading(false);
        }, 2000)
    }, [])

    // if (reducer.state.loading) {
    //     return <LoadingIcon />
    // }

    return loading ? <LoadingIcon /> : (
        <>
            <h2>Hotels</h2>
            {lastSeenHotel ? <LastSeenHotel {...lastSeenHotel} onRemove={removeLastSeenHotel} /> : null}
            {getBestHotel() ? <BestHotel getBestHotel={getBestHotel} /> : null}
            <Hotels onOpen={openHotel} hotels={hotels} />
        </>
    )
}