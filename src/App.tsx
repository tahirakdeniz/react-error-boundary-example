'use client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
import Counter from "./components/Counter";
import FallbackComponent from "./components/Fallback";
import Home from './components/Home';
import ErrorThrower from './components/ErrorThrower';

function App() {
  return (
    <Router>
        <div>
          <ErrorBoundary fallbackRender={FallbackComponent}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/counter" element={<Counter />} />
              <Route path='/error' element={<ErrorThrower />} />            </Routes>
          </ErrorBoundary>
        </div>
    </Router>
  );
}

export default App;
