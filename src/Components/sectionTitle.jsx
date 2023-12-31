import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: "Poppins";
    font-size: 3.5rem;
    font-weight: bold;
    color: hsl(240, 4%, 36%);
  }
  h2 {
    font-family: "Poppins";
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 2.5rem;
      color: hsl(240, 4%, 36%); 
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = "Need Subheading",
  heading = "need heading",
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
    </SectionTitleStyle>
  );
}
