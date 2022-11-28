import styled from "@emotion/styled";

export const ContentBox = styled.div<{ color?: string }>`
  background: ${({ color }) => color ?? "white"};
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

export const Button = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.grey_40};
`;

export const GameBox = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .title {
    font-weight: 700;
    font-size: 12px;
  }
  .sub-title {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.grey_60};
  }
  .number-box {
    padding: 2px;
    border: 1px solid black;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      padding: 3px;
    }
  }
  input {
    border-radius: 5px;
  }
`;
