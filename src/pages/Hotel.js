import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useWebsiteTitle from "../components/hooks/useWebSiteTitle";
import LoadingIcon from "../components/LoadingIcon/LoadingIcon";
import img from '../assets/images/pexels-ahmed-abdelaziz-453201.jpg';
// import ReducerContext from "../components/context/reducerContext";
// import LoadingIcon from "../components/LoadingIcon/LoadingIcon";
import axios from "../axios";

export default function Hotel(props) {
    const params = useParams(); //inny zapis: const {id} = useParams();
    // console.log(params); //zwraca listę parametrów, tu tylko id hotelu, ze ścieżki zdefiniowanej w App w Route
    // const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    // const reducer = useContext(ReducerContext);
    const [loading, setLoading] = useState(true);
    const setTitle = useWebsiteTitle();

    const fetchHotel = async () => {

        // setHotel({
        //     id: 2,
        //     name: "Robert's Apartments Old Town",
        //     city: "Old Town, Warsaw",
        //     rating: 9.8,
        //     description: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        //     image: ""
        // });
        // reducer.dispatch({ type: 'set-loading', loading: false });
        try {
            const res = await axios.get(`/hotels/${params.id}.json`);
            setHotel(res.data);
            console.log(res.data);
            setTitle('Hotel ' + res.data.name);
        } catch (ex) {
            console.log(ex.response);
        }

        setLoading(false);
    }

    useEffect(() => {
        // reducer.dispatch({ type: 'set-loading', loading: true });
        fetchHotel();
    }, [])

    // if (loading) return <LoadingIcon /> //inaczej można przez stan globalny reducerContext
    // if (reducer.state.loading) return null; //warunek by nie wyświetlać Hotel details zanim nie wcyta sie hotel z backendu

    return loading ? <LoadingIcon /> : (
        <div className="card">
            <div className="card-header">
                <h2>Hotel details: {hotel.name}</h2>
            </div>
            <div className="card-body">
                <img
                    src={img}
                    alt="Hotel"
                    className="img-fluid img-thumbnail mb-4"
                />
                <p>Location: <b>{hotel.city}</b></p>
                <p>Rooms: {hotel.rooms}</p>
                <p className="lead">{hotel.description}</p>
                <p>Amenities:</p>
                <ul>
                    {hotel.amenities.map(el =>
                        <li key={el}>{el}</li>)
                    }
                </ul>
                <p><b>Rating: {hotel.rating}</b></p>
            </div>
        </div>
    )
}