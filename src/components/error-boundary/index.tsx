import { Component } from 'react';
import Exception from '../exception';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false, errorInfo: '' };
  static getDerivedStateFromError(error: Error) {
    console.log('error----->：', error);
    console.log('errormessage----->：', error.message);
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.warn('error-boundary------>', error);
    console.warn('errorInfo-boundary------>', errorInfo);
  }

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <Exception text={errorInfo} />;
    }
    return children;
  }
}

export default ErrorBoundary;
