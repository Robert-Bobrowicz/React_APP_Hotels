import { Component } from "react"

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError){
            return <p>Error occurred</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;