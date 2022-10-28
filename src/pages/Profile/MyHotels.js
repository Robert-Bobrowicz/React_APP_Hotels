import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../axios';

export default function MyHotels(props) {
    const { pathname } = useLocation();
    const [myHotels, setMyHotels] = useState({
        'keyID': {
            name: 'Mój hotel'
        }
    });
    const fetchMyHotels = async () => {
        try {
            const res = await axios.get('/hotels');
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
                            <tr>
                                <td>
                                    Name of your hotel
                                </td>
                                <td>
                                    <button className='btn btn-warning'>Edit</button>
                                    <button className='m-2 btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ) : <p>No hotel on your list</p>}

            <Link to={`${pathname}/add-new`} className='btn btn-primary'>Add new hotel</Link>
        </>

    )
}