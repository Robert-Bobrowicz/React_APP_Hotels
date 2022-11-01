import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import HotelForm from "../HotelForm/HotelForm";

export default function EditHotel(props) {
    const navigate = useNavigate();

    const submit = async form => {

        await axios.post('/hotels.json', form);
        navigate('/profile/myhotels');
    }

    return (
        <div className="card mb-4">
            <div className="card-header">Edit hotel</div>
            <div className="card-body">
                <HotelForm buttonText="Save changes" onSubmit={submit} />
            </div>
        </div >
    )
}