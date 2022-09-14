import useLocalStorage from "../../hooks/useLocalStorage";

function LastSeenHotel(props) {
    // const [hotel, setHotel] = useLocalStorage(null);

    const hotel = {
        name: "Robert's Apartments Old Town Krzywe Koło",
        rating: 9.2
    }

    if (!hotel) return null;



    return (
        <div>
            Last seen offer
            <div className=" card alert alert-secondary">
                <div className="card-header text-center">
                    Best offer!
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5>{hotel.name}</h5>
                        <p>Rating: {hotel.rating}</p>
                    </div>
                    <a href="#ViewHotel" className="btn btn-sm btn-primary">View offer</a>
                </div>
            </div>
        </div>
    );
}

export default LastSeenHotel;