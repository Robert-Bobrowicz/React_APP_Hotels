export default function LoadingIcon() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border m-5" role="status"> </div>
            <span className="sr-only">Data loading ...</span>
        </div>
    )
}