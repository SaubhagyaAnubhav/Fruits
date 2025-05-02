import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Fresh from './components/Fresh/Fresh'
import Menu from './components/Navbar/Menu'
import Menu1 from './components/Menu1/Menu1'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'

const App = () => {
  useEffect(() => {
    console.log('App mounted');
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });
  }, []);

  return (
    <>
      <main className='overflow-x-hidden'>
        <ErrorBoundary>
          <Banner2 />
          <Navbar/>
          <Fresh/>
          <Menu />
          <Menu1 />
          <Banner />
          <Footer />
        </ErrorBoundary>
      </main>
    </>
  )
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default App
