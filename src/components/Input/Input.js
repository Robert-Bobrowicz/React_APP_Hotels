// import PropTypes from "prop-types";

function Input(props) {
    if (props.type === "text") {
        return (
            <div className="form-group">
                <label>{props.label} </label>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                    className={`form-control ${props.error && props.showError ? 'is-invalid' : ''} mb-4`}
                    placeholder={`enter ${props.label}`}
                />
                <div className="invalid-feedback">{props.error}</div>
            </div>
        )
    }

    if (props.type === "select") {
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <select
                    value={props.rooms}
                    onChange={e => props.onChange(e.target.value)}
                    className={`form-control ${props.error && props.showError ? 'is-invalid' : ''} mb-4`}>
                    {props.options.map(option =>
                        <option value={option.value} key={option.value}>{option.label}</option>
                    )}
                </select>
                <div className="invalid-feedback">{props.error}</div>
            </div>
        )
    }

    if (props.type === "checkbox") {
        const changeFeatureHandler = e => {
            const value = e.target.value;
            const isChecked = e.target.checked;

            if (isChecked) {
                const newAmenties = [...props.value, value];
                props.onChange(newAmenties);
            } else {
                const newAmenities = props.value.filter(x => !x === value);
                props.onChange(newAmenities);
            }
        }

        return (
            <div className="form-group mb-4">
                {props.options.map(option => {
                    return (
                        <div className="custom-control custom-checkbox" key={option.value}>
                            <label className="me-4" forHtml={option.value}>{option.label}
                                <span className="ms-1">
                                    <input
                                        type="checkbox"
                                        value={option.value}
                                        className="custom-control-input"
                                        onChange={changeFeatureHandler}
                                        checked={props.value.find(x => x === option.value)} />
                                </span>
                            </label>
                        </div>
                    )
                })}

                {/* <div className="custom-control custom-checkbox">
                    <label className="me-4" forHtml="tv">TV
                        <span className="ms-1">
                            <input
                                type="checkbox"
                                value="tv"
                                className="custom-control-input"
                                onChange={changeFeatureHandler}
                                checked={props.amenities.find(x => x === 'tv')} />
                        </span>
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <label className="me-4">WiFi
                        <span className="ms-1">
                            <input
                                type="checkbox"
                                value="wifi"
                                className="custom-control-input"
                                checked={props.amenities.find(x => x === 'wifi')}
                                onChange={changeFeatureHandler} />
                        </span>
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <label className="me-4">Private bathroom
                        <span className="ms-1">
                            <input
                                type="checkbox"
                                value="private bathroom"
                                className="custom-control-input"
                                checked={props.amenities.find(x => x === 'private bathroom')}
                                onChange={changeFeatureHandler} />
                        </span>
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <label className="me-4">Washing machine
                        <span className="ms-1">
                            <input
                                type="checkbox"
                                value="washing machine"
                                className="custom-control-input"
                                checked={props.amenities.find(x => x === 'washing machine')}
                                onChange={changeFeatureHandler} />
                        </span>
                    </label>
                </div> */}
            </div>
        )
    }
}

Input.defaultProps = {
    type: "text",
    isValid: "true",
    showError: "false"
}

export default Input;