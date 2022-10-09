export default function LoadingButton(props) {

    return (
        props.loading ?
            (<button className="btn btn-success mt-2 sr-only" type="button" disabled>
                <span>
                    processing request ...
                </span>
            </button >)
            :
            <button className="btn btn-success mt-2">Save</button>
    )
}