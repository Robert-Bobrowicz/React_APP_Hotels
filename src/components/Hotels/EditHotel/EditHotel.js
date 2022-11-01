import { useState } from "react";
import LoadingButton from "../../../components/LoginButton/LoginButton";
import Input from "../../Input/Input";
import formValidate from "../../../helpers/formValidate";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function EditHotel(props) {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: {
            value: '',
            error: '',
            showError: false,
            rules: ['required', { rule: 'min', length: 4 }]
        },
        description: {
            value: '',
            error: '',
            showError: false,
            rules: ['required', { rule: 'min', length: 10 }]
        },
        city: {
            value: '',
            error: '',
            showError: false,
            rules: ['required', { rule: 'min', length: 4 }]
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
        rating: {
            value: '',
            error: '',
            showError: false
        },
        picture: {
            value: null,
            error: '',
            showError: false
        },
        userId: {
            value: '',
            error: '',
            showError: false
        }
    });

    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post('/hotels.json', {
                name: form.name.value,
                description: form.description.value,
                city: form.city.value,
                rooms: form.rooms.value,
                amenities: form.amenities.value,
                rating: form.rating.value,
                id: auth.userId
            });
            navigate('/profile/myhotels');
            console.log("hotel has been edited and add to remote DB", res);
            setLoading(false);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const changeHandler = (value, fieldName) => {
        const error = formValidate(form[fieldName].rules, value);

        setForm({
            ...form,
            [fieldName]: {
                ...form[fieldName],
                value,
                showError: true,
                error: error
            }
        })
    };

    return (
        <div className="card mb-4">
            <div className="card-header">Edit hotel</div>
            <div className="card-body">
                <form onSubmit={submit}>
                    <Input
                        label="Hotel name"
                        value={form.name.value}
                        onChange={val => changeHandler(val, 'name')}
                        error={form.name.error}
                        showError={form.name.showError}
                    />

                    <Input
                        label="Description"
                        type="textarea"
                        value={form.description.value}
                        onChange={val => changeHandler(val, 'description')}
                        error={form.description.error}
                        showError={form.description.showError}
                    />

                    <Input
                        label="City"
                        value={form.city.value}
                        onChange={val => changeHandler(val, 'city')}
                        error={form.city.error}
                        showError={form.city.showError}
                    />

                    <Input
                        label="Number of rooms"
                        type="select"
                        value={form.rooms.value}
                        onChange={val => changeHandler(val, 'rooms')}
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
                        error={form.rooms.error}
                        showError={form.rooms.showError}
                    />

                    <h6>Amenities</h6>
                    <Input
                        type="checkbox"
                        value={form.amenities.value}
                        onChange={val => changeHandler(val, 'amenities')}
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
                        error={form.amenities.error}
                        showError={form.amenities.showError}
                    />

                    <Input
                        label="Rating"
                        value={form.rating.value}
                        onChange={val => changeHandler(val, 'rating')}
                        error={form.rating.error}
                        showError={form.rating.showError}
                    />

                    <Input
                        type="file"
                        onChange={val => changeHandler(val, 'picture')}
                    />

                    <LoadingButton className="btn btn-primary mt-4" loading={loading}>Save changes</LoadingButton>
                </form>
            </div>
        </div>
    )
}