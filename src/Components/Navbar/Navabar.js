import React from "react";
import styled from "styled-components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <LogoContainer>
        <Link to="#">JithinP</Link>
      </LogoContainer>
      <LinksContainer>
        <Link to="#">Home</Link>
        <Link to="#">Projects</Link>
        <Link to="#">Contact</Link>
      </LinksContainer>
      <SocialsContainer>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </SocialsContainer>
    </>
  );
}

export default Navbar;

const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  a {
    margin: auto;
    font-family: "Playfair Display", serif;
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    color: #232423;
    letter-spacing: -2px;
  }
`;
const LinksContainer = styled.div`
  grid-column: 2/4;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    letter-spacing: -1px;
    font-weight: 400;
    color: #232423;
    :hover {
      border-bottom: 1px solid #444444;
    }
  }
  @media (max-width: 580px) {
    display: none;
  }
`;
const SocialsContainer = styled.div`
  grid-column: 4/5;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    color: black;
    margin: 0 1rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
