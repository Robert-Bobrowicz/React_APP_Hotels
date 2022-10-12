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
                    className={`form-control ${!props.isValid && props.showError ? 'is-invalid' : ''} mb-4`}
                    placeholder={`enter ${props.label}`}
                />
                <div className="invalid-feedback">Error</div>
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
                    className="form-control mb-4">
                    {props.options.map(option =>
                        <option value={option.value}>{option.label}</option>
                    )}
                </select>
                <div className="invalid-feedback">Error</div>

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