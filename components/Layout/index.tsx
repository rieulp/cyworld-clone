import React from "react";
import styled from "@emotion/styled";
import SideBar from "./SideBar";
import Header from "./Header";
import { ContentBox } from "../styles";
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
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px 17px 34px;
`;

const InnerBox = styled.div`
  min-width: 808px;
  min-height: 544px;
  padding: 26px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid black;
  border-radius: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 18px;
    left: 18px;
    right: 18px;
    bottom: 18px;
    border: 2px dashed white;
    border-radius: 10px;
  }

  & > div {
    background: #eee;
    position: relative;
    height: 100%;
    display: grid;
    grid-template-rows: 40px 1fr;
    column-gap: 3px;
    grid-template-columns: minmax(208px, 27%) 1fr;
    border-radius: 10px;
    padding: 10px;
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
