'use client';
import React, { useState } from "react";
import { FaBars, FaTachometerAlt, FaUser, FaCog, FaSignOutAlt, FaBook, FaChartBar, FaSearch } from "react-icons/fa"; // Importing relevant icons from react-icons
import { Container, Navbar, Nav, Offcanvas, Button, ListGroup } from 'react-bootstrap'; // Importing react-bootstrap components
import { UserButton, useUser } from '@clerk/nextjs';
import Link from "next/link";
const NavbarWithSidebar = ({ children }) => {
  const { user } = useUser();

  // State to control the visibility of the Offcanvas sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {/* Main Container */}
      <div className="d-flex h-100">
        {/* Sidebar for Desktop */}
        <div className="bg-light sidebar d-none d-md-block" style={{ width: '250px', transitionDuration: '1s' }}>
          <h5 className="p-3">Sidebar</h5>
          <ListGroup>
            <ListGroup.Item>
              <a href="#">
                <FaTachometerAlt className="me-2" /> Dashboard
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">
                <FaUser className="me-2" /> Profile
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">
                <FaBook className="me-2" /> Courses
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">
                <FaChartBar className="me-2" /> Analytics
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">
                <FaSearch className="me-2" /> Browse
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">
                <FaCog className="me-2" /> Settings
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">
                <FaSignOutAlt className="me-2" /> Logout
              </a>
            </ListGroup.Item>
          </ListGroup>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1">
          {/* Navbar */}
          <Navbar expand="lg" className="p-3" variant="light" bg="light">
            <Container fluid>
              {/* Toggle Sidebar on Mobile */}
              <Button
                className="d-md-none"
                variant="light"
                onClick={toggleSidebar} // Update to toggle state
              >
                <FaBars />
              </Button>

              <Navbar.Toggle aria-controls="navbarNav" />
              <Navbar.Collapse id="navbarNav">
                <Nav className="ms-auto">
                  <Nav.Item>
                    {user && <UserButton />}
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Main Content */}
          <Container className="mt-3">
            {children}
          </Container>
        </div>

        {/* Offcanvas Sidebar for Mobile */}
        <Offcanvas
          show={showSidebar} // Controlled visibility
          onHide={toggleSidebar} // Toggle visibility when the Offcanvas is closed
          className="offcanvas-start bg-light"
          id="sidebarMobile"
          aria-labelledby="sidebarMobileLabel"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="sidebarMobileLabel">Sidebar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link href="#">
                  <FaTachometerAlt className="me-2" /> Dashboard
                </Link>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Link href="#">
                  <FaUser className="me-2" /> Profile
                </Link>
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Link href="#">
                  <FaBook className="me-2" /> Courses
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#">
                  <FaChartBar className="me-2" /> Analytics
                </Link>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                
                  <Link href="#"> Browse
                </Link>
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Link href="#">
                  <FaCog className="me-2" /> Settings
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#">
                  <FaSignOutAlt className="me-2" /> Logout
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default NavbarWithSidebar;
