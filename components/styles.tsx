import styled from "@emotion/styled";

export const ContentBox = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.grey_60};
  border-radius: 10px;
  height: 100%;
`;

export const ItemTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;

  span {
    font-size: 10px;
    letter-spacing: -1px;
    color: black;
    margin-left: 2em;
    text-transform: uppercase;
  }
`;

export const ItemContainer = styled.div`
  margin: 30px;
`;
