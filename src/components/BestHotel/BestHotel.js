import { useEffect, useState } from "react";
import moment from 'moment';

const BestHotel = (props) => {
    const hotel = props.getBestHotel();
    const endTime = moment().add(24, 'minutes').add(44, 'seconds');
    const [time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const remainingTime = moment().to(endTime);
            setTime(remainingTime);
            console.log(remainingTime)
        }, 1000);
    }, []);

    if (!hotel) return null;

    return (
        <div className=" card alert alert-success">
            <div className="card-header text-center">
                Best offer!
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5>{hotel.name}</h5>
                    <p>Rating: {hotel.rating}</p>
                </div>
                <p>Limited time offer, ends {time}</p>
                <a href="#ViewHotel" className="btn btn-sm btn-primary">View offer</a>
            </div>

        </div>
    )
}

export default BestHotel;