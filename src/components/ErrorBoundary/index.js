import { Component } from "react";

export default class ErrorBoundary extends Component{
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error Boundary</div>;
    }

    return this.props.children;
  }
}
