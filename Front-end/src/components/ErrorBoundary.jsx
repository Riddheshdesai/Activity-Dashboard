import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error);
    console.error("Error info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center h-screen text-2xl text-red-600">
          Something went wrong! Please try again later.
        </div>
      );
    }

    return this.props?.children;
  }
}

export default ErrorBoundary;
