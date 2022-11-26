import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <HeaderContainer>
      <div className="visitor">Today 0 | Total 12345</div>
      <div className="title-wrapper">
        <h1 className="header-title">사이좋은 사람들, 싸이월드</h1>
        <Link href="#" className="privacy_setting_link">
          사생활보호설정
        </Link>
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: minmax(208px, 27%) 1fr;
  align-items: center;
  padding-top: 10px;
  grid-column: span 2;
  .visitor {
    text-align: center;
    font-size: 13px;
  }
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .header-title {
    font-family: "DungGeunMo", sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }
  .privacy_setting_link {
    color: ${({ theme }) => theme.colors.grey_40};
    font-size: 13px;
    vertical-align: middle;
    line-height: 15px;

    &::after {
      content: "▶";
      color: ${({ theme }) => theme.colors.red};
      font-size: 4px;
      padding-left: 4px;
      vertical-align: middle;
      line-height: 15px;
    }
  }
`;
