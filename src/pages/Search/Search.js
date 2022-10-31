import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { objectToArrayConvereter } from "../../helpers/objectToArray";
import Hotels from "../../components/Hotels/Hotels";

export default function Search(props) {

    const { term } = useParams();
    const [hotels, setHotels] = useState([]);

    const searchHandler = async () => {
        try {
            const res = await axios.get('/hotels.json');

            const newHotel = objectToArrayConvereter(res.data)
                .filter(hotel => hotel.name.includes(term));
            setHotels(newHotel);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    useEffect(() => { searchHandler() }, [term]);

    // const searchHandler = term => {
    //     console.log('szukam z poziomu App', term);
    //     const newHotels = [...hotelsDB]
    //         .filter(el => el.name
    //             .toLowerCase()
    //             .includes(term.toLowerCase()));
    //     dispatch({ type: 'set-hotels', hotels: newHotels })
    // }

    return (
        <>
            <h2>Search results for "{term}"</h2>
            <Hotels hotels={hotels} />
        </>
    )
}