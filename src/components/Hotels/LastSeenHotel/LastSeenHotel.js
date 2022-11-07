import { Link } from "react-router-dom";

function LastSeenHotel(props) {

    // const hotel = {
    //     name: "Robert's Apartments Old Town Krzywe Koło",
    //     rating: 9.2
    // }

    // if (!props.hotel) return null;

    const clickHandler = (e) => {
        if (props.onOpen) props.onOpen(props);
    };

    return (
        <div>
            <div className=" card alert alert-secondary">
                <div className="card-header text-center">
                    Recently viewed
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5>{props.name}</h5>
                        <p>Rating: {props.rating}</p>
                    </div>

                    <div style={{
                        width: "240px",
                        marginLeft: "auto"
                    }}
                        className="d-flex justify-content-between">
                        <Link
                            to={`/hotel/${props.id}`}
                            onClick={clickHandler}
                            className="btn btn-sm btn-primary"
                        >
                            View offer
                        </Link>
                        <button onClick={props.onRemove} className="btn btn-sm btn-secondary">Don't show again</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LastSeenHotel;