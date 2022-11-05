import { useState } from "react";
import Input from "../../Input/Input";
import formValidate from "../../../helpers/formValidate";
import useAuth from "../../hooks/useAuth";
import LoadingButton from "../../../components/LoginButton/LoginButton";

const HotelForm = props => {
    const [auth] = useAuth();
    const [loading, setLoading] = useState(false);

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

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            props.onSubmit({
                name: form.name.value,
                description: form.description.value,
                city: form.city.value,
                rooms: form.rooms.value,
                amenities: form.amenities.value,
                rating: Number(form.rating.value),
                userId: auth.userId
            });
        } catch (ex) {
            console.log(ex.response);
        }
        setLoading(false);
    };

    return (
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

            <LoadingButton className="btn btn-primary mt-4" loading={loading}>{props.buttonText}</LoadingButton>
        </form>
    )
}

export default HotelForm;