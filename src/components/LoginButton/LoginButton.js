export default function LoadingButton(props) {
    return (
        <button className="btn btn-primary mt-2" type="button" disabled>
            <span className="sr-only">
                processing request ...
            </span>
        </button>
    )
}