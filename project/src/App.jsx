import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const UlamSpiral = React.lazy(() => import('./components/UlamSpiral'));
const Art = React.lazy(() => import('./components/FPArt'));
const SayState = React.lazy(() => import('./components/SayState'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
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

function Navigation() {
  return (
    <div style={{ width: '100%' }}>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Marcus Yeagle</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <Link style={undefined} to="/art">
                  FP Art
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link style={undefined} to="/ulam">
                  Ulam Spiral
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link style={undefined} to="/say-a-state">
                  Say-a-State
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Contact" id="collapsible-nav-dropdown">
                <NavDropdown.Item
                  target="blank"
                  href="https://www.instagram.com/marcus.yeagle/"
                >
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="blank"
                  href="https://www.linkedin.com/in/marcusyeagle/"
                >
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="blank"
                  href="https://github.com/marcus-yeagle"
                >
                  GitHub
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="mailto:marcus.yeagle@gmail.com">
                  Email
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
