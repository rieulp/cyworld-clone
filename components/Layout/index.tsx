import React from "react";
import styled from "@emotion/styled";
import SideBar from "./SideBar";
import Header from "./Header";
import { ContentBox } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  const { pathname } = useRouter();
  return (
    <Container>
      <InnerBox>
        <div>
          <Header />
          <SideBar />
          <main>
            <ContentBox>{children}</ContentBox>
          </main>
          <NavBar>
            <Link href="/" className={"/" === pathname ? "active" : ""}>
              홈
            </Link>
            <Link href="/game" className={"/game" === pathname ? "active" : ""}>
              게임
            </Link>
            <Link
              href="/diary"
              className={"/diary" === pathname ? "active" : ""}
            >
              다이어리
            </Link>
          </NavBar>
        </div>
      </InnerBox>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  background-image: url(/images/background.svg);
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
  background-image: url(/images/inner-box.svg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 3.8%;

  & > div {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-rows: 40px 1fr;
    column-gap: 3px;
    grid-template-columns: minmax(208px, 27%) 1fr;
  }
`;

const NavBar = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 60px;
  right: -64px;
  gap: 2px;
  a {
    display: block;
    width: 65px;
    background-color: #298eb5;
    color: white;
    text-align: center;
    line-height: 32px;
    font-size: 13px;
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    border-radius: 0px 5px 5px 0px;
    &.active {
      background-color: white;
      color: black;
    }
  }
`;
