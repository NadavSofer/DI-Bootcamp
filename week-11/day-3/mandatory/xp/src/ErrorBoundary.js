import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch = (error, errorInfo) => {
        console.log('error: ', error);
        console.log('errorInfo: ', errorInfo);
        this.setState({hasError:true, error:error, errorInfo:errorInfo})
    }

    render(){
        if (this.state.hasError) {
            return (
                <div>
                    <h1>something went wrong...</h1>
                    <h2>{this.state.error.message}</h2>

                </div>
            )
        }
        return(
            <>
                {this.props.children}
            </>
        )
    }
}

export default ErrorBoundary