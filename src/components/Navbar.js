import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

    const windowHeight = window.innerHeight;
    // Determine the active section based on scroll position
    const homeElement = document.getElementById("home");
    const aboutElement = document.getElementById("about");
    const home2Element = document.getElementById("home2");

    const homeRect = homeElement && homeElement.getBoundingClientRect();
    const aboutRect = aboutElement && aboutElement.getBoundingClientRect();
    const home2Rect = home2Element && home2Element.getBoundingClientRect();
    
    if (homeRect && homeRect.top <= windowHeight / 2 && homeRect.bottom >= windowHeight / 2) {
      setActiveSection("home");
    } else if (aboutRect && aboutRect.top <= windowHeight / 2 && aboutRect.bottom >= windowHeight / 2) {
      setActiveSection("about");
    } else if (home2Rect && home2Rect.top <= windowHeight / 2 && home2Rect.bottom >= windowHeight / 2) {
      setActiveSection("home2");
    } else {
      setActiveSection(null);
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                href="#home"
                to="home"
                smooth={true}
                offset={0}
                duration={0}
                active={activeSection === "home"}
                onClick={() => {
                  updateExpanded(false);
                  setTimeout(() => {
                    setActiveSection("home");
                  }, 0);
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                href="#about"
                to="about"
                smooth={true}
                offset={0}
                duration={0}
                active={activeSection === "about"}
                onClick={() => {
                  updateExpanded(false);
                  setTimeout(() => {
                    setActiveSection("about");
                  }, 0);
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                href="#home2"
                to="home2"
                smooth={true}
                offset={0}
                duration={0}
                active={activeSection === "home2"}
                onClick={() => {
                  updateExpanded(false);
                  setTimeout(() => {
                    setActiveSection("home2");
                  }, 0);
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
