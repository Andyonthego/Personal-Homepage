import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineSchool, MdWorkOutline, MdOutlineCode } from "react-icons/md";

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
    const catalog = [
      { id: "home", element: document.getElementById("home") },
      { id: "education", element: document.getElementById("education") },
      { id: "work", element: document.getElementById("work") },
      { id: "about", element: document.getElementById("about") },
      { id: "contact", element: document.getElementById("contact") },
    ];
    
    // 
    function getElementRect(element) {
      return element ? element.getBoundingClientRect() : null;
    }
    
    // 
    function isElementActive(rect) {
      return rect && rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
    }
    
    // 
    let activeSection = null;
    
    for (let item of catalog) {
      const rect = getElementRect(item.element);
      if (isElementActive(rect)) {
        activeSection = item.id;
        break;
      }
    }
    
    setActiveSection(activeSection);
    
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
                duration={200}
                active={activeSection === "home"}
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                href="#education"
                to="education"
                smooth={true}
                offset={0}
                duration={200}
                active={activeSection === "education"}
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <MdOutlineSchool style={{ marginBottom: "2px" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                href="#work"
                to="work"
                smooth={true}
                offset={0}
                duration={200}
                active={activeSection === "work"}
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <MdWorkOutline style={{ marginBottom: "2px" }} /> Work Experience
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                href="#about"
                to="about"
                smooth={true}
                offset={0}
                duration={200}
                active={activeSection === "about"}
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <MdOutlineCode style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                href="#contact"
                to="contact"
                smooth={true}
                offset={0}
                duration={200}
                active={activeSection === "contact"}
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
