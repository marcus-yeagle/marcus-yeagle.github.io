import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const UlamSpiral = React.lazy(() => import('./components/UlamSpiral'));
const Art = React.lazy(() => import('./components/FPArt'));
const SayState = React.lazy(() => import('./components/SayState'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="art"
          element={
            <React.Suspense fallback={<>...</>}>
              <Art />
            </React.Suspense>
          }
        />
        <Route
          path="ulam"
          element={
            <React.Suspense fallback={<>...</>}>
              <UlamSpiral />
            </React.Suspense>
          }
        />
        <Route
          path="say-a-state"
          element={
            <React.Suspense fallback={<>...</>}>
              <SayState />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/art">FP Art</Link>
          </li>
          <li>
            <Link to="/ulam">Ulam Spiral</Link>
          </li>
          <li>
            <Link to="/say-a-state">Say-a-State</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
