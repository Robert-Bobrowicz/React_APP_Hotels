
function LastSeenHotel(props) {

    // const hotel = {
    //     name: "Robert's Apartments Old Town Krzywe Koło",
    //     rating: 9.2
    // }

    // if (!props.hotel) return null;

    return (
        <div>
            Last seen offer
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
                        <a href="#ViewHotel" className="btn btn-sm btn-primary">View offer</a>
                        <button onClick={props.onRemove} className="btn btn-sm btn-secondary">Don't show again</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LastSeenHotel;