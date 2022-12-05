import styled from "@emotion/styled";
import Link from "next/link";
import { BoardSummary } from "../api/useBoards";
import { ItemTitle } from "./styles";
import { isNewDate } from "../utils/day";

interface Props {
  data?: BoardSummary[];
  counts?: {
    boardsCount?: [number, number];
  };
}
function UpdateNews({ data, counts }: Props) {
  return (
    <Container>
      <ItemTitle>Updated news</ItemTitle>
      <div className="row">
        <ul className="updateList">
          {data?.map(({ number, title, createdAt }) => {
            const isNew = isNewDate(createdAt) ? "new" : "";
            return (
              <li key={number} className={isNew}>
                <Link href={`/diary/${number}`}>
                  <span className="tag diary">다이어리</span>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <table className="countsTable">
          <tbody>
            <tr>
              <th>다이어리</th>
              <td>
                <Link href="/diary">{counts?.boardsCount?.join("/")}</Link>
              </td>
              <th>사진첩</th>
              <td>0/265</td>
            </tr>
            <tr>
              <th>게시판</th>
              <td>0/15</td>
              <th>방명록</th>
              <td>0/15</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default UpdateNews;

const Container = styled.div`
  .new::after {
    content: "N";
    display: inline-block;
    font-size: 8px;
    color: white;
    border-radius: 2px;
    background: #ff8822;
    width: 8px;
    padding: 1px;
    text-align: center;
    margin-left: 5px;
  }
  .tag {
    display: inline-block;
    border-radius: 1px;
    font-size: 10px;
    padding: 3px 1px;
    color: white;
    margin-right: 0.6em;
  }
  .diary {
    background-color: ${({ theme }) => theme.colors.pink};
  }
  .updateList {
    flex: 1;
    font-size: 12px;
    border-top: 1px solid ${({ theme }) => theme.colors.grey_60};
    padding-top: 3px;
    li {
      padding: 3px 0;
    }
  }

  .row {
    display: flex;
    gap: 11px;
    align-items: flex-start;
  }
  .countsTable {
    flex: 0.8;
    border-top: 1px dashed ${({ theme }) => theme.colors.grey_60};
    font-size: 12px;
    text-align: left;

    tr {
      border-bottom: 1px dashed ${({ theme }) => theme.colors.grey_60};
      display: flex;
      gap: 8px;
      height: 25px;
      align-items: center;
    }

    td {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      flex: 1;
    }
  }
`;
