import styled from "@emotion/styled";
import React from "react";
import { ContentBox } from "./styles";

function SideBar() {
  return (
    <Container>
      <ContentBox>
        <div className="profile-container">SideBar</div>
      </ContentBox>
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  /* padding: 0 2px 10px 6px; */
  .profile-container {
  }
`;
