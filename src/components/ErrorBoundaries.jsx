import React from "react";

export default class ErrorBoundaries extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }

      static getDerivedStateFromError(error) {
        console.log(error);
        return { error: error.toString() };
        // return { error: true, errorMessage: error.toString() };
        // return { error };
      };
      
      componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        console.log(error);
        // You can also log error messages to an error reporting service here
      }
      
      render() {

        if (this.state.error) {
          // Error path
          return (
            <div>
              <h2>Oops! Something went wrong.</h2>
                {this.state.error && this.state.error.toString()}
                {/* {this.state.errorInfo.componentStack} */}
            </div>
          );
        }
        // Normally, just render children
        return this.props.children;
      }  
}