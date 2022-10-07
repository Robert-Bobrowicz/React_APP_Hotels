
export default function AddHotel(props) {
    return (
        <div className="card">
            <div className="card-header">New hotel</div>
            <div className="card-body">
                <form>
                    <label>Hotel name</label>
                    <input
                        type="text"
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter new hotel name" />
                    <div className="invalid-feedback">Error</div>

                    <label>City</label>
                    <input
                        type="text"
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter city name" />
                    <div className="invalid-feedback">Error</div>

                    <label>Number of rooms</label>
                    <input
                        type="text"
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter new hotel name" />
                    <div className="invalid-feedback">Error</div>
                    
                </form>
            </div>
        </div>
    )
}