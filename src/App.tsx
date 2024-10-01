import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Auth from './pages/Auth';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import Dashboard from './pages/Dashboard/Dashboard';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivateRoute = lazy(() => import('./features/PrivateRoute/PrivateRoute'));

const queryClient = new QueryClient();

// Dummy authentication state
const isAuthenticated = false; // Change to true/false to simulate authentication

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/auth/*"
                element={<Auth />}
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute
                    element={<Dashboard />}
                    isAuthenticated={isAuthenticated}
                  />
                }
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </Router>
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
