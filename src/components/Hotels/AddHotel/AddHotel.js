import { useState } from "react";

export default function AddHotel(props) {
    const [form, setForm] = useState({
        name: '',
        city: '',
        rooms: 2,
        amenities: [],
        picture: null
    });

    return (
        <div className="card mb-4">
            <div className="card-header">New hotel</div>
            <div className="card-body">
                <form>
                    <label>Hotel name</label>
                    <input
                        type="text"
                        value={form.name}
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter new hotel name" />
                    <div className="invalid-feedback">Error</div>

                    <label>City</label>
                    <input
                        type="text"
                        value={form.city}
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter city name" />
                    <div className="invalid-feedback">Error</div>

                    <label>Number of rooms</label>
                    <select value={form.rooms} className="form-control mb-4">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <div className="invalid-feedback">Error</div>

                    <h6>Amenities</h6>
                    <div className="form-group mb-4">
                        <label className="me-4">TV <input type="checkbox" /></label>
                        <label className="me-4">WiFi <input type="checkbox" /></label>
                        <label className="me-4">Private bathroom <input type="checkbox" /></label>
                        <label className="me-4">Washing machine <input type="checkbox" /></label>
                    </div>

                    <div className="form-group mt-2">
                        <h6 className="me-2">Select picture:</h6>
                        <input type="file" />
                    </div>

                </form>
            </div>
        </div>
    )
}