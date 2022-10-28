import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../axios';

export default function MyHotels(props) {
    const { pathname } = useLocation();
    const [myHotels, setMyHotels] = useState([]);
    const fetchMyHotels = async () => {
        try {
            const res = await axios.get('/hotels.json');
            // const res = {   //to w celu sprawdzenia i konwersji obiektu w postaci zapisywanej w DB 
            //     'keyID': {
            //         name: 'Mój hotel'
            //     }
            // }

            const newHotel = [];
            for (const key in res.data) {
                newHotel.push({
                    ...res.data[key],
                    id: key
                });
            }
            setMyHotels(newHotel);
        } catch (ex) {
            console.log(ex.response);
        }

    };

    useEffect(() => {
        fetchMyHotels();
    }, []);

    return (
        <>
            {myHotels ? (
                <>
                    <div>My hotels</div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myHotels.map((hotel) => (
                                <tr key={hotel.id}>
                                    <td>
                                        {hotel.name}
                                    </td>
                                    <td>
                                        <button className='btn btn-primary'>Edit</button>
                                        <button className='m-2 btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : <p>No hotel on your list</p>}

            <Link to={`${pathname}/add-new`} className='btn btn-primary'>Add new hotel</Link>
        </>

    )
}