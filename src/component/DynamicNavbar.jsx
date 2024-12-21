'use client';
import React, { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBook,
  FaChartBar,
} from "react-icons/fa"; // Importing relevant icons from react-icons
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Button,
  ListGroup,
} from "react-bootstrap"; // Importing react-bootstrap components
import { IoBookSharp } from "react-icons/io5";
import Link from "next/link";
import LinkNav from "./LinkNav";
import LogoutButton from "./logout";
import './Styles/Navbar.css'

const NavbarWithSidebar = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {/* Main Container */}
      <div className="d-flex vh-100">
        {/* Sidebar for Desktop */}
        <div
          className="bg-light sidebar d-none d-md-block"
          style={{ width: "250px" }}
        >
          <Link href={'/teacher'}>
          <h5 className="p-3">
            <IoBookSharp className="mx-2" />
            Sidebar
          </h5></Link>
          <ListGroup>
            <LinkNav />
            <LogoutButton />
          </ListGroup>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1">
          {/* Navbar */}
          <Container fluid>
            <Button
              className="d-md-none"
              variant="light"
              onClick={toggleSidebar}
            >
              <FaBars />
            </Button>
          </Container>

          {/* Main Content */}
          <Container>{children}</Container>
        </div>

        {/* Offcanvas Sidebar for Mobile */}
        <Offcanvas
          show={showSidebar}
          onHide={toggleSidebar}
          className="offcanvas-start bg-light"
          id="sidebarMobile"
          aria-labelledby="sidebarMobileLabel"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="sidebarMobileLabel">College</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <LinkNav />
            <LogoutButton />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default NavbarWithSidebar;
