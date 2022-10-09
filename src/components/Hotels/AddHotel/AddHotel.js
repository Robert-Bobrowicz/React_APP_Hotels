import { useState, useRef } from "react";

export default function AddHotel(props) {
    const imageRef = useRef();
    const [form, setForm] = useState({
        name: '',
        description: '',
        city: '',
        rooms: 2,
        amenities: [],
        picture: null
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(form)
        console.log(imageRef.current)

    }

    return (
        <div className="card mb-4">
            <div className="card-header">New hotel</div>
            <div className="card-body">
                <form onSubmit={submit}>
                    <label>Hotel name</label>
                    <input
                        type="text"
                        value={form.name}
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter new hotel name" />
                    <div className="invalid-feedback">Error</div>

                    <label>Description</label>
                    <textarea
                        type="text"
                        value={form.description}
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                    />
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
                        <label className="me-4">TV
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="tv"
                                    checked={form.amenities.find(x => x === 'tv')} />
                            </span>
                        </label>
                        <label className="me-4">WiFi
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="wifi"
                                    checked={form.amenities.find(x => x === 'wifi')} />
                            </span>
                        </label>
                        <label className="me-4">Private bathroom
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="private_bathroom"
                                    checked={form.amenities.find(x => x === 'private_bathroom')} />
                            </span>
                        </label>
                        <label className="me-4">Washing machine
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="washing_machine"
                                    checked={form.amenities.find(x => x === 'twashing_machine')} />
                            </span>
                        </label>
                    </div>

                    <div className="form-group mt-2">
                        <h6 className="me-2">Select picture:</h6>
                        <input type="file" ref={imageRef}/>
                    </div>

                    <button className="btn btn-primary mt-4">Add hotel</button>

                </form>
            </div>
        </div>
    )
}