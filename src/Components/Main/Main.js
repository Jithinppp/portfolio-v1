import React from "react";
import img from "../../Images/jithin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Main() {
  return (
    <MainContainer>
      <MainTitle>
        Building digital
        <br /> products, brands
        <br />
        <FontAwesomeIcon icon={faCode} /> experience
      </MainTitle>
      <Image src={img} />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  grid-column: 1/5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 740px) {
    margin-top: 10rem;
    flex-direction: column;
  }
`;

const MainTitle = styled.p`
  font-size: 4rem;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  letter-spacing: -4.7px;
  color: #232423;
  @media (max-width: 960px) {
    font-size: 2.9rem;
    letter-spacing: -3px;
  }
`;
const Image = styled.img`
  width: 350px;
  object-fit: cover;
  border-radius: 47% 53% 60% 40% / 30% 30% 70% 70%;
  @media (max-width: 960px) {
    width: 300px;
  }
`;
