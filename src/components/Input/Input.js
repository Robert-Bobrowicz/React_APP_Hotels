import PropTypes from "prop-types";

function Input(props) {
    return (
        <div className="form-group">
            <label>{props.label} </label>
            <input
                type={props.type}
                value={props.name}
                onChange={e => props.onChange(e.target.value)}
                className={`form-control ${!props.isValid && props.showError ? 'is-invalid' : ''} mb-4`}
                placeholder="enter new hotel name"
            />
            <div className="invalid-feedback">Error</div>
        </div>

    )
}

Input.defaultProps = {
    type: "text",
    isValid: "true",
    showError: "false"
}

export default Input;