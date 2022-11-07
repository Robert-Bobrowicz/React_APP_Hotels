import { useEffect, useState } from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

const BestHotel = (props) => {
    const hotel = props.getBestHotel();
    const endTime = moment().add(24, 'minutes').add(44, 'seconds');
    const [time, setTime] = useState('');

    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            const remainingTime = moment().to(endTime);
            setTime(remainingTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const clickHandler = (e) => {
        console.log(props.getBestHotel());
        if (props.onOpen) props.getBestHotel();
    };

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
                <p>Limited time offer, ends {time}!</p>
                <Link
                    to={`/hotel/${props.getBestHotel().id}`}
                    onClick={clickHandler}
                    className="btn btn-sm btn-primary"
                >
                    View offer
                </Link>
            </div>
        </div>
    )
}

export default BestHotel;