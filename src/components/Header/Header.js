import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
import { FcRadarPlot, FcLinux } from "react-icons/fc";
import { BiCycling } from "react-icons/bi";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="navbar"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="text-black" href="/home">
            <FcRadarPlot></FcRadarPlot><FcLinux></FcLinux><BiCycling></BiCycling> Bike VaLLy <span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} className="text-black" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-black" to="/explore">
              Explore
            </Nav.Link>

            <>
              <Nav.Link as={Link} className="text-black" to="/dashboard">
                Dashboard
              </Nav.Link>
            </>

            <Navbar.Text className="text-dark">
              <a href="#login" className="text-black">
                {user?.displayName}
              </a>
            </Navbar.Text>
            {!user?.email ? (
              <Nav.Link as={Link} className="text-black" to="/login">
                Login
              </Nav.Link>
            ) : (
              <button onClick={logOut} variant="light">
                Logout
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;


