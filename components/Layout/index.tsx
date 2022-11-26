import React from "react";
import styled from "@emotion/styled";
import SideBar from "./SideBar";
import Header from "./Header";
import { ContentBox } from "./styles";

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  return (
    <Container>
      <InnerBox>
        <Header />
        <SideBar />
        <main>
          <ContentBox>{children}</ContentBox>
        </main>
      </InnerBox>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  background-image: url("/images/background.svg");
  background-position: center center;
  background-repeat: repeat;
  background-size: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px 17px 34px;

  .grid-column {
    display: grid;
    grid-template-columns: minmax(208px, 27%) 1fr;
  }

  .content-container {
    display: grid;
    grid-template-columns: minmax(208px, 27%) 1fr;
  }
`;

const InnerBox = styled.div`
  width: 89vw;
  height: 60vw;
  min-width: 808px;
  min-height: 544px;
  background-image: url("/images/inner-box.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 3.8%;
  display: grid;
  grid-template-rows: 40px 1fr;
  column-gap: 3px;
  grid-template-columns: minmax(208px, 27%) 1fr;
`;
