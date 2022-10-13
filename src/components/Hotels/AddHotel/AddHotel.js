import { useState } from "react";
import LoadingButton from "../../../components/LoginButton/LoginButton";
import Input from "../../Input/Input";

export default function AddHotel(props) {
    // const imageRef = useRef();
    // const [form, setForm] = useState({
    //     name: '',
    //     description: '',
    //     city: '',
    //     rooms: 2,
    //     amenities: [],
    //     picture: null
    // });

    const [form, setForm] = useState({
        name: {
            value: '',
            error: '',
            showError: false,
            rules: ['required']
        },
        description: {
            value: '',
            error: '',
            showError: false,
            rules: ['required']
        },
        city: {
            value: '',
            error: '',
            showError: false,
            rules: ['required']
        },
        rooms: {
            value: '',
            error: '',
            showError: false,
            rules: ['required']
        },
        amenities: {
            value: [],
            error: '',
            showError: false
        },
        picture: {
            value: null,
            error: '',
            showError: false
        }
    });

    const [loading, setLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        //save data to backend
        setTimeout(() => {
            setLoading(false);
        }, 1500)

    }

    // const changeFeatureHandler = (e) => {
    //     const value = e.target.value;
    //     const isChecked = e.target.checked;


    //     if (isChecked) {
    //         console.log(form.amenities, value)
    //         var newAmenities = [...form.amenities, value];
    //         setForm({ ...form, amenities: newAmenities });
    //     } else {
    //         newAmenities = form.amenities.filter(x => x !== value);
    //         setForm({ ...form, features: newAmenities });
    //     }
    // }

    const changehandler = (value, fieldName) => {
        setForm({ ...form, [fieldName]: { ...form[fieldName], value: value } })
    };

    return (
        <div className="card mb-4">
            <div className="card-header">New hotel</div>
            <div className="card-body">
                <form onSubmit={submit}>
                    {/* <label>Hotel name</label> */}
                    {/* <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter new hotel name" />
                    <div className="invalid-feedback">Error</div> */}

                    <Input
                        label="Hotel name"
                        value={form.name.value}
                        onChange={val => changehandler(val, 'name')}
                        error=""
                        showError={false}
                    />

                    {/* <label>Description</label>
                    <textarea
                        type="text"
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                    />
                    <div className="invalid-feedback">Error</div> */}

                    <Input
                        label="Description"
                        type="textarea"
                        value={form.description.value}
                        onChange={value => setForm({ ...form, description: value })}
                        error=""
                        showError={false}
                    />

                    {/* <label>City</label>
                    <input
                        type="text"
                        value={form.city}
                        onChange={e => setForm({ ...form, city: e.target.value })}
                        className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
                        placeholder="enter city name" />
                    <div className="invalid-feedback">Error</div> */}

                    <Input
                        label="City"
                        value={form.city.value}
                        onChange={value => setForm({ ...form, city: value })}
                        error=""
                        showError={false}
                    />

                    {/* <label>Number of rooms</label>
                    <select
                        value={form.rooms}
                        onChange={e => setForm({ ...form, rooms: e.target.value })}
                        className="form-control mb-4">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <div className="invalid-feedback">Error</div> */}
                    <Input
                        label="Number of rooms"
                        type="select"
                        value={form.rooms.value}
                        onChange={value => setForm({ ...form, rooms: value })}
                        options={[
                            {
                                value: 1, label: 1
                            },
                            {
                                value: 2, label: 2
                            },
                            {
                                value: 3, label: 3
                            },
                            {
                                value: 4, label: 4
                            },
                            {
                                value: 5, label: 5
                            }
                        ]}
                        error=""
                        showError={false}
                    />

                    <h6>Amenities</h6>
                    {/* <div className="form-group mb-4">
                        <label className="me-4">TV
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="tv"
                                    onChange={changeFeatureHandler}
                                    checked={form.amenities.find(x => x === 'tv')} />
                            </span>
                        </label>
                        <label className="me-4">WiFi
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="wifi"
                                    checked={form.amenities.find(x => x === 'wifi')}
                                    onChange={changeFeatureHandler} />
                            </span>
                        </label>
                        <label className="me-4">Private bathroom
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="private_bathroom"
                                    checked={form.amenities.find(x => x === 'private_bathroom')}
                                    onChange={changeFeatureHandler} />
                            </span>
                        </label>
                        <label className="me-4">Washing machine
                            <span className="ms-1">
                                <input
                                    type="checkbox"
                                    value="washing_machine"
                                    checked={form.amenities.find(x => x === 'twashing_machine')}
                                    onChange={changeFeatureHandler} />
                            </span>
                        </label>
                    </div> */}
                    <Input
                        type="checkbox"
                        value={form.amenities.value}
                        onChange={value => setForm({ ...form, amenities: value })}
                        options={[
                            {
                                value: "tv", label: "tv"
                            },
                            {
                                value: "wifi", label: "wifi"
                            },
                            {
                                value: "private bathroom", label: "private bathroom"
                            },
                            {
                                value: "washing mashine", label: "washing machine"
                            }
                        ]}
                        error=""
                        showError={false}
                    />

                    <Input
                        type="file"
                        onChange={value => setForm({ ...form, image: value })}
                    />
                    {/* <div className="form-group mt-2">
                        <h6 className="me-2">Select picture:</h6>
                        <input
                            type="file"
                            onChange={e => setForm({ ...form, image: e.target.files })}
                            ref={imageRef} />
                    </div> */}

                    <LoadingButton className="btn btn-primary mt-4" loading={loading}>Add hotel</LoadingButton>
                </form>
            </div>
        </div>
    )
}